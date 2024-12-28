import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  ButtonGroup,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../../../../Slices/productSlice";

const DeliveryPaymentSection = () => {
  const items = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [address, setAddress] = useState("");
  const [checkoutMessage, setCheckoutMessage] = useState("");

  // Calculate total price of the cart
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmAddress = () => {
    setCheckoutMessage("Your product is on the way!");
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
        flex: 1,
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        boxShadow: 3,
        padding: 3,
        textAlign: "center",
        height: "100%",
        minHeight: "750px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Delivery and Pick-up Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          backgroundColor: "#ffffff",
          padding: 2,
          borderRadius: 2,
          justifyContent: "center",
          boxShadow: 2,
        }}
      >
        <Button
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            border: "1px solid #ddd",
            borderRadius: 2,
            padding: "10px 40px",
            backgroundColor: "#4caf50",
            color: "white",
            transition: "all 0.3s",
            fontSize: "0.875rem",
            "&:hover": {
              backgroundColor: "#45a049",
            },
          }}
        >
          Delivery
        </Button>

        <Button
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            border: "1px solid #ddd",
            borderRadius: 2,
            padding: "10px 40px",
            fontSize: "0.875rem",
            "&:hover": {
              color: "#D60E64",
            },
            color: "black",
          }}
        >
          Pickup
        </Button>
      </Box>

      {/* Cart Items Section */}
      <List sx={{ marginTop: 2 }}>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                paddingY: 1,
                borderBottom: "1px solid #f0f0f0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ListItemAvatar>
                <Avatar src={item.strMealThumb} alt={item.strMeal} />
              </ListItemAvatar>
              <ListItemText
                primary={item.strMeal}
                primaryTypographyProps={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#333",
                }}
              />
              <ButtonGroup
                variant="text"
                aria-label="Quantity button group"
                sx={{ alignItems: "center" }}
              >
                <Button
                  onClick={() => dispatch(decreaseQuantity(item))}
                  sx={{ color: "#d32f2f" }}
                >
                  <RemoveIcon />
                </Button>
                <Button
                  disabled
                  sx={{
                    width: 40,
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {item.quantity}
                </Button>
                <Button
                  onClick={() => dispatch(increaseQuantity(item))}
                  sx={{ color: "#388e3c" }}
                >
                  <AddIcon />
                </Button>
              </ButtonGroup>

              <IconButton
                onClick={() => dispatch(removeProduct(item))}
                sx={{
                  color: "#d32f2f",
                  marginLeft: 2,
                }}
                aria-label="remove product"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        ) : (
          <Typography
            sx={{
              padding: 2,
              textAlign: "center",
              color: "#888",
            }}
          >
            Your cart is empty.
          </Typography>
        )}
      </List>

      {/* Total Section */}
      <Box sx={{ padding: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#333" }}
            >
              Total
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginY: 1,
                fontSize: "0.875rem",
                paddingLeft: "5px",
                fontWeight: "normal",
              }}
            >
              (incl. fees and tax)
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ fontWeight: "bold" }}
          >
            Rs. {totalPrice}
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => setOpenModal(true)}
          sx={{
            marginTop: 2,
            backgroundColor: "#1976d2",
            color: "white",
            cursor: "pointer",
            width: "100%",
            padding: "14px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Review payment and address
        </Button>
      </Box>

      {/* Modal for Address Confirmation */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Confirm Address</DialogTitle>
        <DialogContent>
          <TextField
            label="Enter your address"
            fullWidth
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmAddress} color="primary">
            Confirm Address
          </Button>
        </DialogActions>
      </Dialog>

      {/* Checkout Message */}
      {checkoutMessage && (
        <Box sx={{ marginTop: 3, padding: 2, textAlign: "center" }}>
          <Typography variant="h6" color="success.main">
            {checkoutMessage}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DeliveryPaymentSection;
