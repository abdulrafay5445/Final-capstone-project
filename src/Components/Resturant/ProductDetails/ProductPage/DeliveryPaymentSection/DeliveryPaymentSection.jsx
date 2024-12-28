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
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [isCheckoutSuccessful, setIsCheckoutSuccessful] = useState(false);

  // Calculate total price of the cart
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOpenModal = () => {
    if (items.length > 0) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsCheckoutSuccessful(false); // Reset success state
  };

  const handleCheckout = () => {
    setIsCheckoutSuccessful(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsCheckoutSuccessful(false);
    }, 2000); // Close the modal after 2 seconds
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
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        ) : (
          <Typography sx={{ padding: 2, textAlign: "center", color: "#888" }}>
      
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
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#333" }}>
            Total
          </Typography>
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
          onClick={handleOpenModal}
          sx={{
            marginTop: 2,
            backgroundColor: "#1976d2",
            color: "white",
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

      {/* Address Modal */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle
          sx={{
            backgroundColor: "#f8bbd0",
            color: "#880e4f",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {isCheckoutSuccessful ? "Success!" : "Enter Delivery Address"}
        </DialogTitle>
        <DialogContent
          sx={{
            padding: 3,
            backgroundColor: "#fce4ec",
            color: "#880e4f",
            textAlign: "center",
          }}
        >
          {isCheckoutSuccessful ? (
            <Box>
              <CheckCircleIcon
                sx={{
                  fontSize: 50,
                  color: "green",
                  marginBottom: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Your product is on the way!
              </Typography>
            </Box>
          ) : (
            <TextField
              fullWidth
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
          )}
        </DialogContent>
        {!isCheckoutSuccessful && (
          <DialogActions
            sx={{
              padding: 2,
              justifyContent: "center",
              backgroundColor: "#f8bbd0",
            }}
          >
            <Button
              onClick={handleCheckout}
              variant="contained"
              sx={{
                backgroundColor: "#ad1457",
                color: "white",
                "&:hover": {
                  backgroundColor: "#880e4f",
                },
              }}
            >
              Checkout
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </Box>
  );
};

export default DeliveryPaymentSection;
