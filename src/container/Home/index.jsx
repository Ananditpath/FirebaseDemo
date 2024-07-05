import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const Home = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    image: "",
    imageFile: null,
  });
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    name: "",
    price: "",
    description: "",
    image: "",
    imageFile: null,
  });
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProduct({
      ...product,
      image: URL.createObjectURL(file),
      imageFile: file,
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.name = product.name ? "" : "Product name is required";
    tempErrors.price = product.price ? "" : "Product price is required";
    tempErrors.description = product.description
      ? ""
      : "Product description is required";
    tempErrors.image = product.image ? "" : "Product image is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (currentProduct.id) {
      setProducts(
        products.map((p) => (p.id === currentProduct.id ? product : p))
      );
      setCurrentProduct({
        id: null,
        name: "",
        price: "",
        description: "",
        image: "",
        imageFile: null,
      });
    } else {
      setProducts([...products, { ...product, id: Date.now().toString() }]);
    }
    setProduct({
      id: "",
      name: "",
      price: "",
      description: "",
      image: "",
      imageFile: null,
    });
    handleClose();
  };

  const handleEdit = (product) => {
    setProduct(product);
    setCurrentProduct(product);
    handleClickOpen();
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setDeleteDialogOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setProduct({
      id: "",
      name: "",
      price: "",
      description: "",
      image: "",
      imageFile: null,
    });
  };

  const handleDeleteDialogOpen = (product) => {
    setProductToDelete(product);
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setProductToDelete(null);
    setDeleteDialogOpen(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ color: "green" }}>
            Product Management
          </Typography>
          <Typography variant="h6" sx={{ color: "gray" }}>
            Manage your products effectively
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="success"
          onClick={handleClickOpen}
          sx={{ mb: 2 }}
        >
          Add Product
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: "green", fontWeight: 600 }}>
          {currentProduct.id ? "Edit Product" : "Add Product"}
        </DialogTitle>
        <Divider sx={{ borderBottom: "2px solid #0000003b" }} />
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
              display: "flex",
              flexDirection: "column",
              width: "500px",
              borderRadius: "30px",
            }}
          >
            <TextField
              label="Product Name"
              name="name"
              value={product.name}
              onChange={handleChange}
              variant="outlined"
              required
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
            <TextField
              label="Product Price"
              name="price"
              value={product.price}
              onChange={handleChange}
              variant="outlined"
              required
              error={Boolean(errors.price)}
              helperText={errors.price}
            />
            <TextField
              label="Product Description"
              name="description"
              value={product.description}
              onChange={handleChange}
              variant="outlined"
              required
              error={Boolean(errors.description)}
              helperText={errors.description}
            />

            <Button
              variant="outlined"
              color="success"
              component="label"
              sx={{ m: 1 }}
            >
              Upload Product Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
            </Button>
            {product.image && (
              <Box sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <img
                  src={product.image}
                  alt="Product"
                  style={{ width: "100px", height: "100px" }}
                />
              </Box>
            )}
          </Box>
        </DialogContent>
        <Divider sx={{ borderBottom: "2px solid #0000003b" }} />
        <DialogActions>
          <Button onClick={handleClose} color="error" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="success" variant="contained">
            {currentProduct.id ? "Update Product" : "Add Product"}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this product?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(productToDelete.id)}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "transparent",
          border: `1px solid  #0000003b`,
          borderRadius: "0.425rem",
          marginTop: "20px",
          backgroundImage: "none",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  align="center"
                  sx={{ height: "300px", fontSize: "24px", fontWeight: 600 }}
                >
                  No products available at the moment
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell sx={{ flexDirection: "row", gap: "10px" }}>
                    <IconButton
                      onClick={() => handleEdit(product)}
                      sx={{ backgroundColor: "green" }}
                    >
                      <Edit sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteDialogOpen(product)}
                      sx={{ backgroundColor: "red" }}
                    >
                      <Delete sx={{ color: "white" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
