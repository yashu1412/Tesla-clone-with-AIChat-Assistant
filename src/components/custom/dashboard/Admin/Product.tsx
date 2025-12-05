import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';

import { useAuth } from '../../Auth/AuthContext';
import AdminNavbar from './AdminNavbar';
import Footer from './AdminFooter';
import CreateProduct from './CreateProduct';
import { API_BASE_URL } from '../../../../utils/constants';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  includes: string;
  category: string;
  subcategory: string;
  image: string;
}

const ProductPage: React.FC = () => {
  const { token, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [subcategories, setSubcategories] = useState<{ id: string; name: string; category_name: string }[]>([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    includes: '',
    category: '',
    subcategory: '',
    image: '',
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      fetchProducts();
      fetchCategories();
      fetchSubcategories();
    }
  }, [isAuthenticated, navigate]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/product/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Update this line to use the response data directly since it's already an array
      setProducts(response.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to fetch products');
      setProducts([]);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/category/AllCategory`);
      setCategories((response.data.categories || []).map((c: any) => ({ id: c.id, name: c.name })));
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories([]);
    }
  };

  const fetchSubcategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Subcategory/AllSubcategories`);
      setSubcategories((response.data.subCategories || []).map((s: any) => ({ id: s.id, name: s.name, category_name: s.category_name })));
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      setSubcategories([]);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    setEditMode(false);
    setFormData({
      name: '',
      price: '',
      description: '',
      includes: '',
      category: '',
      subcategory: '',
      image: '',
    });
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentProduct(null);
  };

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      description: product.description,
      includes: product.includes,
      category: product.category,
      subcategory: product.subcategory,
      image: product.image,
    });
    setEditMode(true);
    setOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user?.role) {
      toast.error('Unauthorized: User role not found');
      return;
    }

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Role': user.role,
        },
      };

      if (editMode && currentProduct) {
        const response = await axios.put(
          `${API_BASE_URL}/product/${currentProduct.id}`,
          productData,
          config
        );
        if (response.data) toast.success('Product updated successfully');
      } else {
        const response = await axios.post(
          `${API_BASE_URL}/product/CreateProduct`,
          productData,
          config
        );
        if (response.data) toast.success('Product created successfully');
      }

      fetchProducts();
      handleClose();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error occurred";
      console.error(message);
      toast.error(message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!user?.role) {
      toast.error('Unauthorized: User role not found');
      return;
    }

    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await axios.delete(`${API_BASE_URL}/product/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'role': user.role // Changed 'Role' to lowercase 'role' to match backend expectation
          }
        });
        
        if (response.data.success) { // Check for success property
          toast.success('Product deleted successfully');
          fetchProducts();
        } else {
          toast.error('Failed to delete product');
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error occurred";
        console.error(message);
        toast.error(message);
      }
    }
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden flex flex-col bg-white text-black font-sans">
      <AdminNavbar />
      <Box 
        component="main"
        data-chat-container
        sx={{ 
          p: { xs: 2, sm: 4, md: 6 },
          mt: '64px',
          bgcolor: '#FFFFFF', 
          minHeight: 'calc(100vh - 64px)',
          color: '#000000',
          position: 'relative',
          zIndex: 0,
          width: '100%',
          maxWidth: '100%',
          overflowX: 'hidden'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, borderBottom: '1px solid #ccc', pb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Products Management
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              backgroundColor: '#3E6AE1',
              color: '#FFFFFF',
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',
              '&:hover': { backgroundColor: '#2851BC' },
              textTransform: 'none',
            }}
          >
            Add New Product
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto', bgcolor: '#FAFAFA', color: '#000000', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <Table>
        
            <TableHead>
              <TableRow>
                {['Image', 'Name', 'Price', 'Category', 'Subcategory', 'Actions'].map((head) => (
                  <TableCell
                    key={head}
                    sx={{ color: '#000000', fontWeight: 'bold', borderBottom: '1px solid #ccc' }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(products) &&
                products.map((product) => (
                  <TableRow 
                    key={product.id} 
                    sx={{ 
                      '&:hover': { bgcolor: '#f5f5f5' },
                      height: '100px' // Increased row height
                    }}
                  >
                    <TableCell sx={{ color: '#000000', borderBottom: '1px solid #eee', width: '120px' }}>
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          style={{
                            width: '100px',
                            height: '80px',
                            objectFit: 'contain',
                            borderRadius: '4px'
                          }}
                        />
                      ) : (
                        <Box 
                          sx={{ 
                            width: '100px', 
                            height: '80px', 
                            bgcolor: '#f0f0f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px'
                          }}
                        >
                          No Image
                        </Box>
                      )}
                    </TableCell>
                  
                    <TableCell 
                      onClick={() => navigate(`/product/${product.id}`)}
                      sx={{ 
                        color: '#000000', 
                        borderBottom: '1px solid #eee',
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#3E6AE1',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {product.name}
                    </TableCell>
                    <TableCell sx={{ color: '#000000', borderBottom: '1px solid #eee' }}>
                      ${product.price}
                    </TableCell>
                    <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' }, color: '#000000', borderBottom: '1px solid #eee' }}>
                      {product.category}
                    </TableCell>
                    <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' }, color: '#000000', borderBottom: '1px solid #eee' }}>
                      {product.subcategory}
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #eee' }}>
                      <IconButton onClick={() => handleEdit(product)} sx={{ color: '#3E6AE1' }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(product.id)} sx={{ color: '#FF4444' }}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <CreateProduct
          open={open}
          onClose={handleClose}
          formData={{ ...formData, price: Number(formData.price) }}
          editMode={editMode}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          categories={categories}
          subcategories={subcategories}
        />
      </Box>
      <Footer />
    </div>
  );
};

export default ProductPage;
