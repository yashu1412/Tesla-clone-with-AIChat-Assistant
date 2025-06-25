import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { AuthProvider } from './components/custom/Auth/AuthContext';
import { CartProvider } from './components/Shoping/Custom/Cart/CartContext';
// Import ChatbotIcon component
import ChatbotIcon from './components/Chat-bot/ChatbotIcon';

// Page Components
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import TeslaShop from './pages/Tesla-Shop';
import About from './pages/About';
import AllUsers from "./components/custom/dashboard/Admin/User";
import CategoryManagement from "./components/custom/dashboard/Admin/Category";
import Subcategory from "./components/custom/dashboard/Admin/Subcategory";
import ProtectedRoute from "./components/custom/Auth/ProtectedRoute";
import ProfileEdit from './pages/ProfileEdit';
import ProductDetails from "./components/Shoping/Custom/ProductDetails";
import Cart from "./components/Shoping/Custom/Cart";
import CategoryPage from "./components/Shoping/Custom/CategoryPage";
import Product from "./components/custom/dashboard/Admin/Product";
// Import TeslaChatbot component
import TeslaChatbot from "./pages/TeslaChatbot";

// Product Learn More Pages
import Model3LearnMore from "./components/custom/Home/Model3/Model3LearnMore";
import ModelYLearnMore from "./components/custom/Home/modelY/ModelYLearnMore";
import CybertruckLearnMore from "./components/custom/Home/Cybertruck/CybertruckLearnMore";
import ModelXLearnMore from './components/custom/Home/ModalX/ModelXLearnMore';
import ModelSLearnMore from "./components/custom/Home/ModalS/ModelSLearnMore";
import SolarPanelLearnMore from "./components/custom/Home/SolarPanel/SolarPanelLearnMore";
import SolarRoofLearnMore from "./components/custom/Home/SolarRoof/SolarRoofLearnMore";
import PowerWallLearnMore from './components/custom/Home/PawerWall/PowerWallLearnMore';
import Charging from './components/custom/Charging/ChargingLearnMore';
import MegaPack from './components/custom/MegaPack/MegaPackLearnMore';

// Create React Query Client
const queryClient = new QueryClient();

// Import the PaymentSuccess component
import PaymentSuccess from "./components/Shoping/Custom/Cart/PaymentSuccess";
import OrderNowPage from './pages/OrderNowPage';

import SubcategoryPage from "./components/Shoping/Custom/SubcategoryPage";

// Shoping Subcategory Pages
import ShopCharging from "./components/Shoping/Custom/Subcategory/Charging";
import Chargers from "./components/Shoping/Custom/Subcategory/Charging/Chargers";
import Adapters from "./components/Shoping/Custom/Subcategory/Charging/Adapters";
import Parts from "./components/Shoping/Custom/Subcategory/Charging/Parts";

import Apparel from "./components/Shoping/Custom/Subcategory/Apparel";
import Women from "./components/Shoping/Custom/Subcategory/Apparel/Women";
import Men from "./components/Shoping/Custom/Subcategory/Apparel/Men";
import Kids from "./components/Shoping/Custom/Subcategory/Apparel/Kids";


import GiftCard from "./components/Shoping/Custom/Subcategory/Lifestyle/GiftCard";
import Bags from "./components/Shoping/Custom/Subcategory/Lifestyle/Bags";
import Drinkware from "./components/Shoping/Custom/Subcategory/Lifestyle/Drinkware";
import MiniTeslas from "./components/Shoping/Custom/Subcategory/Lifestyle/MiniTeslas";
import OutdoorTech from "./components/Shoping/Custom/Subcategory/Lifestyle/Outdoor&Tech";
import BestSellers from "./components/Shoping/Custom/Subcategory/Lifestyle/BestSellers";

import VehicleAccessories from "./components/Shoping/Custom/Subcategory/VehicleAccessories";
import Cybertruck from "./components/Shoping/Custom/Subcategory/Vehicle Accessories/Cybertruck";
import ModelS from "./components/Shoping/Custom/Subcategory/Vehicle Accessories/ModelS";
import Model3 from "./components/Shoping/Custom/Subcategory/Vehicle Accessories/Model3";
import ModelX from "./components/Shoping/Custom/Subcategory/Vehicle Accessories/ModelX";
import ModelY from "./components/Shoping/Custom/Subcategory/Vehicle Accessories/ModelY";
import Lifestyle from "./components/Shoping/Custom/Subcategory/Lifestyle";
import CybertruckDemoDrive from './components/custom/Home/Cybertruck/CybertruckDemoDrive';


// Import TestDrive page
import TestDrive from "./pages/TestDrive";
import HelpMe from "./pages/HelpMe";

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast Components */}
        <Toaster />
        <Sonner />

        {/* Auth Context Provider */}
        <AuthProvider>
          <CartProvider>

            
            <BrowserRouter>
              <Routes>

                {/* Public Routes */}
                <Route path="/order-now" element={<OrderNowPage />} />
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/test-drive" element={<TestDrive />} />
                <Route path="/about" element={<About />} />
                <Route path="/help-me" element={<HelpMe />} />
                {/* Add Tesla Chatbot route */}
                <Route path="/tesla-chat-bot" element={<TeslaChatbot />} />
                {/* Add alternative route without hyphen */}
                <Route path="/tesla-chatbot" element={<TeslaChatbot />} />

                <Route path="/Tesla-shop" element={<TeslaShop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                
                {/* Add these new category routes */}
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route path="/category/cybertruck-accessories" element={<CategoryPage />} />
                <Route path="/category/model-s-accessories" element={<CategoryPage />} />
                <Route path="/category/model-3-accessories" element={<CategoryPage />} />
                <Route path="/category/model-x-accessories" element={<CategoryPage />} />
                <Route path="/category/model-y-accessories" element={<CategoryPage />} />
                <Route path="/category/charging" element={<CategoryPage />} />
                <Route path="/category/lifestyle" element={<CategoryPage />} />
                <Route path="*" element={<NotFound />} />

                {/* Protected Routes */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile/edit" element={<ProfileEdit />} />
                <Route
                  path="/dashboard/users"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <AllUsers />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/categories"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <CategoryManagement />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/subcategories"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <Subcategory />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard/products"
                  element={
                    <ProtectedRoute requiredRole={["admin"]}>
                      <Product />
                    </ProtectedRoute>
                  }
                />

                {/* Product Learn More Pages */}
                <Route path="/model3" element={<Model3LearnMore />} />

                <Route path="/modely" element={<ModelYLearnMore />} />
                <Route path="/cybertruck" element={<CybertruckLearnMore />} />
                <Route path="/modelx" element={<ModelXLearnMore />} />
                {/* Model S Routes */}
                <Route path="/models" element={<ModelSLearnMore />} />
                <Route path="/models/order-now" element={<OrderNowPage />} />
                <Route path="/models/demo-drive" element={<TestDrive />} />
                <Route path="/solar-panels" element={<SolarPanelLearnMore />} />
                <Route path="/solarroof" element={<SolarRoofLearnMore />} />
                <Route path="/powerwall" element={<PowerWallLearnMore />} />
                <Route path="/charging" element={<Charging />} />
                <Route path="/megapack" element={<MegaPack />} />
                <Route path="/product/${product.id}" element={<ProductDetails />} />
            
                <Route path="/subcategory/:subcategoryName" element={<SubcategoryPage />} />
                {/* Add this route for Subcategory page */}
                {/* Charging */}
                <Route path="/shopcharging" element={<ShopCharging />} />
                <Route path="/charging/chargers" element={<Chargers />} />
                <Route path="/charging/adapters" element={<Adapters />} />
                <Route path="/charging/parts" element={<Parts />} />
                {/* Apparel */}
                <Route path="/apparel" element={<Apparel />} />
                <Route path="/apparel/men" element={<Women />} />
                <Route path="/apparel/women" element={<Men />} />
                <Route path="/apparel/kids" element={<Kids />} />
                {/* LifeStyle */}
                <Route path="/lifestyle" element={<Lifestyle />} />
                <Route path="/lifestyle/best-sellers" element={<BestSellers />} />
                <Route path="/lifestyle/gift-card" element={<GiftCard />} />
                <Route path="/lifestyle/bags" element={<Bags />} />
                <Route path="/lifestyle/drinkware" element={<Drinkware />} />
                <Route path="/lifestyle/mini-teslas" element={<MiniTeslas />} />
                <Route path="/lifestyle/outdoor-tech" element={<OutdoorTech />} />
                {/* Vehicle Accessories */}
                <Route path="/accessories" element={<VehicleAccessories />} />
                <Route path="/accessories/cybertruck" element={<Cybertruck />} />
                <Route path="/accessories/model-s" element={<ModelS  />} />
                <Route path="/accessories/model-3" element={<Model3 />} />
                <Route path="/accessories/model-x" element={<ModelX />} />
                <Route path="/accessories/model-y" element={<ModelY />} />
                <Route path="/cybertruck/demo-drive" element={<CybertruckDemoDrive />} />
              </Routes>
              
              {/* Add ChatbotIcon here to make it available on all pages */}
              <ChatbotIcon />
            </BrowserRouter>
          </CartProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
