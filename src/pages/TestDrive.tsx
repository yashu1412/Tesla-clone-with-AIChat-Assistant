import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../components/common/Navbar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TestDriveBooking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedVehicleType, setSelectedVehicleType] = useState<string | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [showTypeSelector, setShowTypeSelector] = useState(false);

  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep((prev) => prev + 1);
  };

  const previousStep = () => {
    if (showTypeSelector) {
      setShowTypeSelector(false);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedVehicleType(null);
    setSelectedVehicle(null);
    setShowTypeSelector(false);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const renderStep = () => {
    if (showTypeSelector) {
      return (
        <VehicleTypeSelector
          selectedType={selectedVehicleType}
          onSelect={setSelectedVehicleType}
          onNext={() => {
            setShowTypeSelector(false);
            nextStep();
          }}
          onBack={previousStep}
        />
      );
    }

    switch (step) {
      case 1:
        return (
          <VehicleModelSelector
            selectedVehicle={selectedVehicle}
            onSelect={setSelectedVehicle}
            onNext={nextStep}
            onHelpMeChoose={() => setShowTypeSelector(true)}
          />
        );
      case 2:
        return <LocationSelector onNext={nextStep} onBack={previousStep} />;
      case 3:
        return <ContactForm onSubmit={nextStep} onBack={previousStep} />;
      case 4:
        return (
          <BookingSummary
            vehicleType={selectedVehicleType || ''}
            selectedVehicle={selectedVehicle || ''}
            onDone={resetBooking}
            onBack={previousStep}
          />
        );
      default:
        return null;
    }
  };

  const direction = step > 1 ? 1 : -1;

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="container mx-auto px-4 pt-16 pb-16 max-w-6xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// VehicleModelSelector Component
const VehicleModelSelector: React.FC<{
  selectedVehicle: string | null;
  onSelect: (vehicle: string) => void;
  onNext: () => void;
  onHelpMeChoose: () => void;
}> = ({ selectedVehicle, onSelect, onNext, onHelpMeChoose }) => {
  const vehicles = [
    { 
      id: 'model_y', 
      title: 'Model Y', 
      description: 'Midsize SUV for families, road trips and extra cargo space',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Main-Hero-Desktop-Global.jpg'
    },
    { 
      id: 'model_3', 
      title: 'Model 3', 
      description: 'Sports sedan for families, commuting and road trips',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-LHD.jpg'
    },
    { 
      id: 'model_x', 
      title: 'Model X', 
      description: 'Luxury SUV for comfort, storage and maximum tech',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Main-Hero-Desktop-LHD.jpg'
    },
    { 
      id: 'model_s', 
      title: 'Model S', 
      description: 'Luxury sedan for range, quick acceleration and comfort',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.jpg'
    },
    { 
      id: 'cybertruck', 
      title: 'Cybertruck', 
      description: 'More utility than a truck with more performance than a sports car',
      image: 'https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Selector-Cybertruck-Desktop.png'
    }
  ];

  // Find the selected vehicle object
  const selectedVehicleObj = selectedVehicle 
    ? vehicles.find(v => v.title === selectedVehicle) 
    : null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-medium mb-2">Schedule a Drive</h1>
        <p className="text-gray-600 text-sm">Experience Tesla Technology, Full Self-Driving and get all your questions answered</p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          {vehicles.map((vehicle) => (
            <VehicleOption
              key={vehicle.id}
              title={vehicle.title}
              description={vehicle.description}
              isSelected={selectedVehicle === vehicle.title}
              onClick={() => onSelect(vehicle.title)}
            />
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 space-y-3"
          >
            <Button 
              onClick={onNext}
              disabled={!selectedVehicle}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition-all duration-300 disabled:opacity-50"
            >
              Next
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden lg:block"
        >
          <AnimatePresence mode="wait">
            {selectedVehicleObj ? (
              <motion.div 
                key={selectedVehicleObj.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px] overflow-hidden rounded-md"
              >
                <img
                  src={selectedVehicleObj.image}
                  alt={`Tesla ${selectedVehicleObj.title}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-[400px] overflow-hidden rounded-md bg-gray-100 flex items-center justify-center"
              >
                <img
                  src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-LHD.jpg"
                  alt="Tesla Default"
                  className="w-full h-full object-cover opacity-50"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

// VehicleOption Component
const VehicleOption: React.FC<{
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ title, description, isSelected, onClick }) => {
  return (
    <motion.div 
      onClick={onClick}
      className={`
        p-4 transition-all duration-300 cursor-pointer rounded-md
        ${isSelected ? 'bg-gray-100' : 'hover:bg-gray-50'}
      `}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { 
            type: "spring",
            stiffness: 100
          }
        }
      }}
    >
      <div className="flex items-start">
        <div className="flex-grow">
          <h3 className="text-lg font-medium mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        {isSelected && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center"
          >
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// VehicleTypeSelector Component
const VehicleTypeSelector: React.FC<{
  onSelect: (type: string) => void;
  onNext: () => void;
  onBack: () => void;
  selectedType: string | null;
}> = ({ onSelect, onNext, onBack, selectedType }) => {
  return (
    <div className="max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6"
      >
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>
      </motion.div>
      
      <h2 className="text-2xl font-medium mb-8">What style of vehicle are you looking for?</h2>
      
      <div className="space-y-3">
        <TypeButton 
          type="Sedan" 
          isSelected={selectedType === "Sedan"} 
          onClick={() => onSelect("Sedan")}
        />
        <TypeButton 
          type="SUV or Truck" 
          isSelected={selectedType === "SUV or Truck"} 
          onClick={() => onSelect("SUV or Truck")}
        />
        <TypeButton 
          type="I'm Flexible" 
          isSelected={selectedType === "I'm Flexible"} 
          onClick={() => onSelect("I'm Flexible")}
        />
      </div>
      
      <Button
        onClick={onNext}
        disabled={!selectedType}
        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition-all duration-300 disabled:opacity-50"
      >
        Next
      </Button>
    </div>
  );
};

// TypeButton Component for VehicleTypeSelector
const TypeButton: React.FC<{ 
  type: string; 
  isSelected: boolean; 
  onClick: () => void 
}> = ({ type, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full py-4 px-6 text-center border border-gray-300 rounded-md transition-all duration-300
        ${isSelected 
          ? 'bg-gray-800 text-white border-gray-800' 
          : 'bg-white text-gray-800 hover:bg-gray-100'}
      `}
    >
      {type}
    </button>
  );
};

// LocationSelector Component
const LocationSelector: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => {
  const [searchValue, setSearchValue] = useState('');
  
  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6"
      >
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-medium mb-12 text-center"
      >
        Select Appointment
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-xl mx-auto"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          
          <Input
            type="text"
            placeholder="Enter Address"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full pl-10 py-6 h-14 bg-gray-100 rounded-md border-none transition-all duration-300 focus-visible:ring-0 focus-visible:border-gray-300 text-base"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <Button 
            onClick={onNext}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded py-6 h-auto px-16"
            disabled={!searchValue}
          >
            Next
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};



// BookingSummary Component
const BookingSummary: React.FC<{
  vehicleType: string;
  selectedVehicle: string;
  onDone: () => void;
  onBack: () => void;
}> = ({ vehicleType, selectedVehicle, onDone, onBack }) => {
  const { toast } = useToast();
  
  const handleConfirm = () => {
    toast({
      title: "Test Drive Scheduled",
      description: "Your test drive has been successfully scheduled. You'll receive an email with all the details.",
    });
    onDone();
  };

  return (
    <div className="max-w-lg mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-semibold mb-2">Your Test Drive is Confirmed!</h2>
        <p className="text-gray-600 mb-6">We're looking forward to showing you the {selectedVehicle}.</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-gray-50 rounded-lg p-6 mb-8"
      >
        <div className="flex justify-between border-b border-gray-200 pb-4 mb-4">
          <span className="text-gray-500">Vehicle:</span>
          <span className="font-medium">{selectedVehicle}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-500">Appointment:</span>
          <span className="font-medium">To be confirmed</span>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={onBack}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-16 py-4 h-auto rounded"
          >
            Back
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handleConfirm}
            className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-4 h-auto rounded"
          >
            Done
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TestDriveBooking;// ContactForm Component
const ContactForm: React.FC<{ 
  onSubmit: () => void;
  onBack: () => void;  // Add onBack prop
}> = ({ onSubmit, onBack }) => {  // Add onBack to destructuring
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [learnEnergy, setLearnEnergy] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const isFormValid = () => {
    return formData.firstName && formData.lastName && formData.email && formData.phone;
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-medium mb-12 text-center"
      >
        Driver's Details
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="space-y-2"
        >
          <Label htmlFor="firstName" className="text-sm text-gray-600">First Name</Label>
          <Input 
            id="firstName" 
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="h-12 bg-gray-100 border-none focus-visible:ring-0"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-2"
        >
          <Label htmlFor="lastName" className="text-sm text-gray-600">Last Name</Label>
          <Input 
            id="lastName" 
            placeholder="Last Name" 
            value={formData.lastName}
            onChange={handleChange}
            className="h-12 bg-gray-100 border-none focus-visible:ring-0"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-2"
        >
          <Label htmlFor="email" className="text-sm text-gray-600">Email Address</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Email Address" 
            value={formData.email}
            onChange={handleChange}
            className="h-12 bg-gray-100 border-none focus-visible:ring-0"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-2"
        >
          <Label htmlFor="phone" className="text-sm text-gray-600">Phone Number</Label>
          <Input 
            id="phone" 
            placeholder="(___) ___-____" 
            value={formData.phone}
            onChange={handleChange}
            className="h-12 bg-gray-100 border-none focus-visible:ring-0"
          />
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex items-center space-x-2 mt-6 max-w-3xl mx-auto"
      >
        <Checkbox 
          id="marketing" 
          checked={learnEnergy}
          onCheckedChange={(checked) => setLearnEnergy(!!checked)}
        />
        <Label 
          htmlFor="marketing" 
          className="text-sm text-gray-600"
        >
          Learn about Energy Products
        </Label>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-xs text-gray-500 mt-6 max-w-3xl mx-auto"
      >
        By selecting "Submit" I agree to the{" "}
        <a href="#" className="text-tesla-darkgray underline hover:text-tesla-red transition-colors duration-200">
          terms and conditions
        </a>{" "}
        and allow Tesla to contact me.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8 flex justify-center space-x-4"
      >
        <Button 
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded py-4 px-16 h-auto min-w-[200px]"
        >
          Back
        </Button>
        <Button 
          onClick={onSubmit} 
          disabled={!isFormValid()}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded py-4 px-16 h-auto min-w-[200px]"
        >
          Submit
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-16 flex justify-center items-center"
      >
        <img 
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-LHD.jpg" 
          alt="Tesla Model" 
          className="max-w-lg w-full rounded-lg opacity-90 hidden md:block"
        />
      </motion.div>
    </div>
  );
};