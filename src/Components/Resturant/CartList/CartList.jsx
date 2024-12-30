import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
  Button,
  ButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,

} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeProduct } from "../../Slices/productSlice";

function CartList({ open, handleClose }) {
  const items = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [addressError, setAddressError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  // Calculate the total price
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOpenModal = () => {
    if (items.length > 0) {
      setIsModalOpen(true);
      setIsCheckoutSuccess(false);
      setAddressError(false);
      setPhoneError(false);
  
    }
  };

  const handleCheckout = () => {
    let isValid = true;
    if (!address.trim()) {
      setAddressError(true);
      isValid = false;
    }
    if (!phoneNumber.trim() || phoneNumber.length !== 11 || isNaN(phoneNumber)) {
      setPhoneError(true);
      isValid = false;
    }
  

    if (isValid) {
      setIsCheckoutSuccess(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setAddress("");
    setPhoneNumber("");
    setPaymentOption("");
    setAddressError(false);
    setPhoneError(false);
  
  };

  return (
    <>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 350,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: "#fce4ec",
          }}
          role="presentation"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
              backgroundColor: "#f8bbd0",
            }}
          >
            <Typography variant="h6" color="#880e4f">
              Shopping Cart
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: "#880e4f" }} />
            </IconButton>
          </Box>

          <Divider />

          <List sx={{ flexGrow: 1, overflowY: "auto", backgroundColor: "#fce4ec" }}>
            {items && items.length > 0 ? (
              items.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src={item.strMealThumb} alt={item.strMeal} />
                  </ListItemAvatar>
                  <ListItemText primary={item.strMeal} sx={{ maxWidth: "150px" }} />

                  <ButtonGroup variant="outlined" aria-label="quantity buttons">
                    <Button onClick={() => dispatch(decreaseQuantity(item))} sx={{ minWidth: "30px" }}>
                      <RemoveIcon sx={{ color: "#880e4f" }} />
                    </Button>
                    <Button sx={{ minWidth: "30px", color: "#880e4f" }} disabled>
                      {item.quantity}
                    </Button>
                    <Button onClick={() => dispatch(increaseQuantity(item))} sx={{ minWidth: "30px" }}>
                      <AddIcon sx={{ color: "#880e4f" }} />
                    </Button>
                  </ButtonGroup>

                  <IconButton onClick={() => dispatch(removeProduct(item))} color="error" sx={{ marginLeft: "12px" }}>
                    <DeleteIcon sx={{ color: "#d81b60" }} />
                  </IconButton>
                </ListItem>
              ))
            ) : (
              <Typography sx={{ padding: "16px", textAlign: "center", fontStyle: "italic", color: "#880e4f" }}>
                Your cart is empty.
              </Typography>
            )}
          </List>

          <Divider />

          {items.length > 0 && (
            <Box
              sx={{
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f8bbd0",
              }}
            >
              <Typography variant="h6" color="#880e4f">
                Total Price:
              </Typography>
              <Typography variant="h6" color="#d81b60">
                Rs:{totalPrice.toFixed(2)}
              </Typography>
            </Box>
          )}

          <Box sx={{ padding: "16px", textAlign: "center" }}>
            <Button
              sx={{
                backgroundColor: "#d81b60",
                "&:hover": { backgroundColor: "#c2185b" },
              }}
              fullWidth
              variant="contained"
              onClick={handleOpenModal}
              disabled={items.length === 0}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      </Drawer>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle
          sx={{
            backgroundColor: "#f8bbd0",
            textAlign: "center",
            fontWeight: "bold",
            color: "#880e4f",
          }}
        >
          {isCheckoutSuccess ? (
            <Typography color="green">
              <CheckCircleOutlineIcon /> Your product is on the way!
            </Typography>
          ) : (
            "Confirm Delivery Details"
          )}
        </DialogTitle>
        {!isCheckoutSuccess && (
          <DialogContent sx={{ backgroundColor: "#fce4ec" }}>
            <TextField
              fullWidth
              label="Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              error={addressError}
              helperText={addressError && "Please enter your delivery address"}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              error={phoneError}
              helperText={phoneError && "Please enter a valid phone number (11 digits)"}
              sx={{ marginBottom: 2 }}
            />
          
          </DialogContent>
        )}
        <DialogActions sx={{ backgroundColor: "#f8bbd0", justifyContent: "center" }}>
          {!isCheckoutSuccess ? (
            <Button
              onClick={handleCheckout}
              variant="contained"
              sx={{
                backgroundColor: "#d81b60",
                color: "white",
                "&:hover": {
                  backgroundColor: "#c2185b",
                },
              }}
            >
              Checkout
            </Button>
          ) : (
            <Button
              onClick={handleCloseModal}
              variant="contained"
              sx={{
                backgroundColor: "#d81b60",
                color: "white",
                "&:hover": {
                  backgroundColor: "#c2185b",
                },
              }}
            >
              Close
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CartList;
