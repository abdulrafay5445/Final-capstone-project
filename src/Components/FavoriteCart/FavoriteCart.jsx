import React from "react";
import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, Divider, ListItemAvatar, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const FavoriteCart = ({ open, handleClose }) => {
  const items = useSelector((state) => state.favorite.items);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      sx={{ "& .MuiDrawer-paper": { backgroundColor: "#fce4ec" } }} // Pinkish background for the drawer
    >
      <Box sx={{ width: 300 }} role="presentation">
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            backgroundColor: "#f8bbd0", // Medium pink background for the header
          }}
        >
          <Typography variant="h6" sx={{ color: "#880e4f" }}>
            Favorite Cart
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "#880e4f" }} />
          </IconButton>
        </Box>

        <Divider />

        {/* Items Section */}
        <List>
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <ListItem key={index} sx={{ padding: "12px" }}>
                <ListItemAvatar>
                  <Avatar src={item.strMealThumb} alt={item.strMeal} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.strMeal}
                  primaryTypographyProps={{ color: "#880e4f", fontWeight: "bold" }} // Pinkish text
                />
              </ListItem>
            ))
          ) : (
            <Typography
              sx={{
                padding: "16px",
                textAlign: "center",
                fontStyle: "italic",
                color: "#880e4f", // Pinkish text for empty message
              }}
            >
              Your cart is empty.
            </Typography>
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default FavoriteCart;

