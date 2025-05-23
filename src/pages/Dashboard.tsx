import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import DashboardLayout from '../components/custom/dashboard/DashboardLayout';
import {
  Package,
  Users,
  Tag,
  TrendingUp,
  User,
  MapPin,
  Globe,
  Mail,
  Phone
} from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory: string;
}

interface Category {
  id: string;
  name: string;
}

interface SubCategory {
  id: string;
  name: string;
  category_name: string;
}

interface UserProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  region: string;
  language: string;
  phone?: string;
}

const Dashboard = () => {
  const { user, token } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !token) {
      navigate('/login', { state: { from: '/dashboard' } });
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);

        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        if (user?.role === 'customer') {
          const profileRes = await axios.get(
            'http://localhost:4001/api/v1/profile/get',
            config
          );
          setUserProfile(profileRes.data.data);
        } else {
          const [productsRes, categoriesRes, subCategoriesRes] =
            await Promise.all([
              axios.get('http://localhost:4001/api/v1/product/getAll', config),
              axios.get(
                'http://localhost:4001/api/v1/categories/AllCategory',
                config
              ),
              axios.get(
                'http://localhost:4001/api/v1/subcategories/AllSubcategories',
                config
              )
            ]);

          setProducts(productsRes.data.products || []);
          setCategories(categoriesRes.data.categories || []);
          setSubCategories(subCategoriesRes.data.subcategories || []);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);

        if (axios.isAxiosError(error) && error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login', { state: { from: '/dashboard' } });
        }

        if (user?.role !== 'customer') {
          setProducts([]);
          setCategories([]);
          setSubCategories([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, token, navigate]);

  const totalValue = products.reduce((sum, product) => sum + (product.price || 0), 0);

  const stats = [
    {
      title: 'Total Products',
      value: products.length.toString(),
      icon: <Package className="w-6 h-6" />,
      change: '+12%',
      color: 'bg-blue-500'
    },
    {
      title: 'Total Categories',
      value: categories.length.toString(),
      icon: <Tag className="w-6 h-6" />,
      change: '+4%',
      color: 'bg-purple-500'
    },
    {
      title: 'Total Subcategories',
      value: subCategories.length.toString(),
      icon: <Tag className="w-6 h-6" />,
      change: '+8%',
      color: 'bg-green-500'
    },
    {
      title: 'Total Value',
      value: `$${totalValue.toLocaleString()}`,
      icon: <TrendingUp className="w-6 h-6" />,
      change: '+15%',
      color: 'bg-yellow-500'
    }
  ];

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </DashboardLayout>
    );
  }

  if (user?.role === 'customer') {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 p-6 text-white">
              <h2 className="text-2xl font-bold">My Profile</h2>
              <p className="text-blue-100">Manage your account information</p>
            </div>

            <div className="p-6">
              {userProfile ? (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blue-100 rounded-full p-6 text-blue-600">
                      <User size={48} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {userProfile.first_name} {userProfile.last_name}
                      </h3>
                      <p className="text-gray-500">{user.role}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-center gap-3">
                      <Mail className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{userProfile.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Region</p>
                        <p className="font-medium">{userProfile.region || 'Not specified'}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Globe className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Language</p>
                        <p className="font-medium">{userProfile.language || 'Not specified'}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{userProfile.phone || 'Not specified'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      onClick={() => window.location.href = '/profile/edit'}
                    >
                      Edit Profile
                    </button>
                    <button
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                      onClick={() => window.location.href = '/orders'}
                    >
                      View Orders
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>Unable to load profile information</p>
                  <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    onClick={() => window.location.reload()}
                  >
                    Retry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // Admin Dashboard
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                {stat.icon}
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-500 text-sm">{stat.change}</span>
              <span className="text-gray-600 text-sm ml-2">from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Products</h2>
          <div className="space-y-4">
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-xs text-gray-500">
                    ${product.price} - {product.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => window.location.href = '/dashboard/products'}
              className="p-4 bg-blue-50 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors"
            >
              Add New Product
            </button>
            <button
              onClick={() => window.location.href = '/dashboard/categories'}
              className="p-4 bg-green-50 rounded-lg text-green-600 hover:bg-green-100 transition-colors"
            >
              Create Category
            </button>
            <button
              onClick={() => window.location.href = '/dashboard/subcategories'}
              className="p-4 bg-purple-50 rounded-lg text-purple-600 hover:bg-purple-100 transition-colors"
            >
              Add Subcategory
            </button>
            {user?.role === 'admin' && (
              <button
                onClick={() => window.location.href = '/dashboard/users'}
                className="p-4 bg-yellow-50 rounded-lg text-yellow-600 hover:bg-yellow-100 transition-colors"
              >
                Manage Users
              </button>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
