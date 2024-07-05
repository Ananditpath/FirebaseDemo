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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    price: Yup.number().required("Product price is required"),
    description: Yup.string().required("Product description is required"),
    imageFile: Yup.mixed().required("Product image is required"),
  });

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      price: "",
      description: "",
      image: "",
      imageFile: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (currentProduct) {
        setProducts(
          products.map((p) => (p.id === currentProduct.id ? values : p))
        );
        setCurrentProduct(null);
      } else {
        setProducts([...products, { ...values, id: Date.now().toString() }]);
      }
      handleClose();
    },
  });

  const handleEdit = (product) => {
    formik.setValues(product);
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
    formik.resetForm();
    setCurrentProduct(null);
  };

  const handleDeleteDialogOpen = (product) => {
    setProductToDelete(product);
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setProductToDelete(null);
    setDeleteDialogOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    formik.setFieldValue("image", URL.createObjectURL(file));
    formik.setFieldValue("imageFile", file);
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
      <Dialog
        open={open}
        onClose={handleClose}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <DialogTitle sx={{ color: "green", fontWeight: 600 }}>
          {currentProduct ? "Edit Product" : "Add Product"}
        </DialogTitle>
        <Divider sx={{ borderBottom: "2px solid #0000003b" }} />
        <DialogContent>
          <Box
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
              value={formik.values.name}
              onChange={formik.handleChange}
              variant="outlined"
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              label="Product Price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              variant="outlined"
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
            <TextField
              label="Product Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              variant="outlined"
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
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
            {formik.values.image && (
              <Box sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                <img
                  src={formik.values.image}
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
          <Button type="submit" color="success" variant="contained">
            {currentProduct ? "Update Product" : "Add Product"}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <Divider />
        <DialogContent>
          <Typography>Are you sure you want to delete this product?</Typography>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            onClick={handleDeleteDialogClose}
            color="primary"
            variant="outlined"
          >
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
