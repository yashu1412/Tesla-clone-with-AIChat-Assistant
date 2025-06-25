import React, { useEffect, useState } from "react";
import { useAuth } from "../../Auth/AuthContext";
import { toast } from "sonner";
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  description: string;
}

const CategoryManagement: React.FC = () => {
  const { token, user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Verify authentication and role
  useEffect(() => {
    if (!isAuthenticated || !user) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    if (user.role !== "admin" && user.role !== "employee") {
      toast.error("Unauthorized access");
      navigate("/dashboard");
      return;
    }
  }, [isAuthenticated, user, navigate]);

  // Form states
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  // Fetch all categories
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:4001/api/v1/category/AllCategory");
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch categories");
      }
      
      setCategories(data.categories);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch categories";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Create new category
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !user) {
      toast.error("Authentication required");
      return;
    }

    try {
      const response = await fetch("http://localhost:4001/api/v1/category/CreateCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          description: formData.description.trim()
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to create category");
      }

      toast.success("Category created successfully");
      setFormData({ name: "", description: "" });
      fetchCategories();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to create category";
      toast.error(message);
    }
  };

  // Update category
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) return;

    try {
      const response = await fetch(`http://localhost:4001/api/v1/category/Update/${selectedCategory.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success("Category updated successfully");
      setIsEditing(false);
      setSelectedCategory(null);
      setFormData({ name: "", description: "" });
      fetchCategories();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to update category";
      toast.error(message);
    }
  };

  // Delete category
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      const response = await fetch(`http://localhost:4001/api/v1/category/Delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success("Category deleted successfully");
      fetchCategories();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to delete category";
      toast.error(message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <AdminNavbar />

      <motion.main
        className="flex-grow p-6 max-w-7xl w-full mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Category Management</h2>

        {/* Category Form */}
        <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl mb-4">{isEditing ? "Edit Category" : "Create New Category"}</h3>
          <form onSubmit={isEditing ? handleUpdate : handleCreate} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Category Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {isEditing ? "Update" : "Create"}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setSelectedCategory(null);
                    setFormData({ name: "", description: "" });
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Categories List */}
        {loading ? (
          <p>Loading categories...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Description</th>
                  <th className="px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id} className="border-t border-gray-200">
                    <td className="px-6 py-4">{category.name}</td>
                    <td className="px-6 py-4">{category.description}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          setIsEditing(true);
                          setSelectedCategory(category);
                          setFormData({
                            name: category.name,
                            description: category.description,
                          });
                        }}
                        className="text-blue-500 hover:text-blue-700 mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.main>

      <AdminFooter />
    </div>
  );
};

export default CategoryManagement;