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
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'sonner';
import AdminNavbar from './AdminNavbar';
import Footer from './AdminFooter';

interface SubCategory {
  id: string;
  name: string;
  description: string;
  category_name: string;
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
        const response = await axios.put(`http://localhost:4001/api/v1/Subcategory/Update/${currentSubcategory.id}`, {
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
        const response = await axios.post(`http://localhost:4001/api/v1/Subcategory/CreateSubcategory`, {
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
        await axios.delete(`http://localhost:4001/api/v1/Subcategory/Delete/${id}`, {
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
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]); // Initialize with empty array
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
    }
  }, [isAuthenticated, navigate]);

  const fetchSubcategories = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/api/v1/Subcategory/AllSubcategories`);
      setSubcategories(response.data.subCategories || []);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      setSubcategories([]);
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
    <>
      <AdminNavbar />
      <Box sx={{ 
        p: 3,
        minHeight: 'calc(100vh - 140px)', // Account for navbar and footer height
        backgroundColor: '#f5f5f5'
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h5">Subcategories Management</Typography>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add New Subcategory
          </Button>
        </Box>

        <TableContainer component={Paper}>
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

        <Dialog open={open} onClose={handleClose}>
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
                label="Category Name"
                name="category_name"
                value={formData.category_name}
                onChange={handleInputChange}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              {editMode ? 'Update' : 'Create'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Footer />
    </>
  );
};

export default Subcategory;