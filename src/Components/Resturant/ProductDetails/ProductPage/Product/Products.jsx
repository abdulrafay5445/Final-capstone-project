import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Modal,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../Slices/productSlice";
import { addFavorite } from "../../../../Slices/favouriteSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginModal from "../../../LoginModal/LoginModal";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [favoriteModalOpen, setFavoriteModalOpen] = useState(false);
  const [favoriteProduct, setFavoriteProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartToastMessage } = useSelector((state) => state.products);
  const { favoriteToastMessage } = useSelector((state) => state.favorite);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        if (response.data.meals) {
          setProducts(response.data.meals);
        } else {
          setError("No products found.");
        }
      } catch (err) {
        setError("Error fetching products.");
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (cartToastMessage) {
      toast.success(cartToastMessage);
    }
  }, [cartToastMessage]);

  useEffect(() => {
    if (favoriteToastMessage) {
      toast.success(favoriteToastMessage);
    }
  }, [favoriteToastMessage]);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email) {
      setEmail(storedUser.email);
    }
  };

  const handleEmailSubmit = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.error("Please sign up or log in first.");
      setModalOpen(false);
      setLoginModalOpen(true);
      return;
    }

    if (email !== storedUser.email) {
      toast.error("Enter the same email used during login.");
      return;
    }

    dispatch(addProduct(selectedProduct));
    toast.success("Product added to cart successfully!");
    setModalOpen(false);
    setEmail("");
  };

  const handleAddToFavorite = (product) => {
    setFavoriteProduct(product);
    setFavoriteModalOpen(true);
  };

  const handleFavoriteConfirmation = () => {
    dispatch(addFavorite(favoriteProduct));
    toast.success("Product added to favorites successfully!");
    setFavoriteModalOpen(false);
  };

  return (
    <Box
      sx={{
        padding: { xs: "10px", sm: "20px" },
        backgroundColor: "#FFE4E1",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem" },
          textAlign: "center",
          
        }}
      >
        Popular Products
        <br />
        Most ordered right now.
      </Typography>

      <ToastContainer />

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CircularProgress color="inherit" />
        </Box>
      ) : error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={6} sm={4} md={3} key={product.idMeal}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 5,
                  borderRadius: "16px",
                  overflow: "hidden",
                  height: "360px",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                  backgroundColor: "#FFFFFF",
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={product.strMealThumb}
                  alt={product.strMeal}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "12px",
                    position: "relative",
                    backgroundColor: "#FFF5F7",
                    color: "#333",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1.1rem" },
                      fontWeight: "bold",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textAlign: "center",
                    }}
                  >
                    {product.strMeal}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      mt: 1,
                      color: "#FF4081",
                    }}
                  >
                    Rs: 890.00
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Tooltip title="Favorite" placement="top">
                      <IconButton
                        onClick={() => handleAddToFavorite(product)}
                        sx={{ cursor: "pointer" }}
                      >
                        <FavoriteBorderIcon sx={{ color: "#FF4081" }} />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Add to cart" placement="top">
                      <IconButton
                        onClick={() => handleAddToCart(product)}
                        sx={{ cursor: "pointer" }}
                      >
                        <AddShoppingCartIcon sx={{ color: "#FF4081" }} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Modal open={favoriteModalOpen} onClose={() => setFavoriteModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 320,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <IconButton
            onClick={() => setFavoriteModalOpen(false)}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: "bold", color: "#333" }}
          >
            Add this item to your favorites?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#FF4081" }}
            onClick={handleFavoriteConfirmation}
          >
            Yes, Add to Favorites
          </Button>
        </Box>
      </Modal>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 360,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
      borderRadius: 3,
      background: "linear-gradient(135deg, #FFE0E8, #FF80AB)",
      color: "#333",
      textAlign: "center",
    }}
  >
    <IconButton
      onClick={() => setModalOpen(false)}
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        color: "#FF4081",
      }}
    >
      <CloseIcon />
    </IconButton>

    <Typography
      variant="h6"
      sx={{
        mb: 3,
        fontWeight: "bold",
        color: "#880E4F",
      }}
    >
      Add Item to Your Cart
    </Typography>

    <Typography
      variant="body2"
      sx={{
        mb: 3,
        color: "#AD1457",
      }}
    >
      Enter your email to continue.
    </Typography>

    <TextField
      fullWidth
      label="Email"
      variant="outlined"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      sx={{
        mb: 2,
        ".MuiOutlinedInput-root": {
          borderRadius: "12px",
          backgroundColor: "#FFF5F7",
        },
        ".MuiInputLabel-root": {
          color: "#AD1457",
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "#FF80AB",
        },
      }}
    />

    <Button
      variant="contained"
      sx={{
        mt: 2,
        width: "100%",
        backgroundColor: "#FF4081",
        color: "#fff",
        fontWeight: "bold",
        padding: "10px",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "#F50057",
        },
      }}
      onClick={handleEmailSubmit}
    >
      Add to Cart
    </Button>
  </Box>
</Modal>


      <LoginModal open={loginModalOpen} handleClose={() => setLoginModalOpen(false)} />
    </Box>
  );
};

export default Product;




