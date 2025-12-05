import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'sonner';
import AdminNavbar from './AdminNavbar';
import Footer from './AdminFooter';
import { API_BASE_URL } from '../../../../utils/constants';

interface SubCategory {
  id: string;
  name: string;
  description: string;
  category_name: string;
}

interface CategoryItem {
  id: string;
  name: string;
  description?: string;
}

const Subcategory: React.FC = () => {
  // Update the auth context usage to include user role
  const { token, isAuthenticated, user } = useAuth();
  
  // Modify the handleSubmit function to include role verification
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error('Name is required');
      return;
    }

    if (!formData.category_name.trim()) {
      toast.error('Category Name is required');
      return;
    }

    if (!user?.role) {
      toast.error('Unauthorized: User role not found');
      return;
    }

    try {
      if (editMode && currentSubcategory) {
        const response = await axios.put(`${API_BASE_URL}/Subcategory/Update/${currentSubcategory.id}`, {
          name: formData.name.trim(),
          description: formData.description.trim(),
          category_name: formData.category_name.trim()
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Role': user.role
          }
        });
        
        if (response.data) {
          toast.success('Subcategory updated successfully');
        }
      } else {
        const response = await axios.post(`${API_BASE_URL}/Subcategory/CreateSubcategory`, {
          name: formData.name.trim(),
          description: formData.description.trim(),
          category_name: formData.category_name.trim()
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Role': user.role
          }
        });
        
        if (response.data) {
          toast.success('Subcategory created successfully');
        }
      }
      fetchSubcategories();
      handleClose();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error occurred";
      console.error(message);
      toast.error(message);
    }
  };
  
  // Also update the handleDelete function with role header
  const handleDelete = async (id: string) => {
    if (!user?.role) {
      toast.error('Unauthorized: User role not found');
      return;
    }
  
    if (window.confirm('Are you sure you want to delete this subcategory?')) {
      try {
        await axios.delete(`${API_BASE_URL}/Subcategory/Delete/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Role': user.role
          }
        });
        toast.success('Subcategory deleted successfully');
        fetchSubcategories();
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error occurred";
        console.error(message);
        toast.error(message);
      }
    }
  };
  const navigate = useNavigate();
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentSubcategory, setCurrentSubcategory] = useState<SubCategory | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category_name: '',
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      fetchSubcategories();
      fetchCategories();
    }
  }, [isAuthenticated, navigate]);

  const fetchSubcategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Subcategory/AllSubcategories`);
      setSubcategories(response.data.subCategories || []);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      setSubcategories([]);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/category/AllCategory`);
      setCategories(response.data.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories([]);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    setEditMode(false);
    setFormData({ name: '', description: '', category_name: '' });
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentSubcategory(null);
  };

  const handleEdit = (subcategory: SubCategory) => {
    setCurrentSubcategory(subcategory);
    setFormData({
      name: subcategory.name,
      description: subcategory.description,
      category_name: subcategory.category_name,
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

  return (
    <div className="min-h-screen w-screen overflow-x-hidden flex flex-col bg-white text-black font-sans">
      <AdminNavbar />

      <main className="flex-grow p-4 sm:p-6 w-full" data-chat-container>
        <h2 className="text-3xl font-semibold mb-6">Subcategories Management</h2>

        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Manage the subcategories used to organize Tesla products.
          </span>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add New Subcategory
          </Button>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(subcategories) && subcategories.map((subcategory) => (
                  <TableRow key={subcategory.id}>
                    <TableCell>{subcategory.name}</TableCell>
                    <TableCell>{subcategory.description}</TableCell>
                    <TableCell>{subcategory.category_name}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(subcategory)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(subcategory.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>{editMode ? 'Edit Subcategory' : 'Add New Subcategory'}</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ pt: 2 }}>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                multiline
                rows={3}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Category"
                name="category_name"
                select
                value={formData.category_name}
                onChange={handleInputChange}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.name}>
                    {cat.name}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              {editMode ? 'Update' : 'Create'}
            </Button>
          </DialogActions>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
};

export default Subcategory;