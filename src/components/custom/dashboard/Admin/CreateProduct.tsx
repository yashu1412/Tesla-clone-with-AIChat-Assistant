import React from 'react';
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slide,
  Grow,
  Fade,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CreateProductProps {
  open: boolean;
  onClose: () => void;
  formData: {
    name: string;
    price: number;
    description: string;
    includes: string;
    category: string;
    subcategory: string;
    image: string;
  };
  editMode: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Transition = React.forwardRef(function Transition(
  props: {
    children: React.ReactElement;
    direction?: "left" | "right" | "up" | "down";
    in?: boolean;
    timeout?: number | { enter?: number; exit?: number };
  }, 
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateProduct: React.FC<CreateProductProps> = ({
  open,
  onClose,
  formData,
  editMode,
  handleInputChange,
  handleSubmit,
}) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grow in>
            <Accordion defaultExpanded sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#F3F4F6' }} />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Step 1: Classification</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" flexDirection="column" gap={3}>
                  <TextField
                    fullWidth
                    label="Category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    sx={teslaInputStyle}
                  />
                  <TextField
                    fullWidth
                    label="Subcategory"
                    name="subcategory"
                    required
                    value={formData.subcategory}
                    onChange={handleInputChange}
                    sx={teslaInputStyle}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grow>
        );
      case 1:
        return (
          <Grow in>
            <Accordion defaultExpanded sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#F3F4F6' }} />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Step 2: Basic Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" flexDirection="column" gap={3}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    sx={teslaInputStyle}
                  />
                  <TextField
                    fullWidth
                    label="Price"
                    name="price"
                    type="number"
                    required
                    value={formData.price}
                    onChange={handleInputChange}
                    sx={teslaInputStyle}
                  />
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    multiline
                    rows={3}
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    sx={teslaInputStyle}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grow>
        );
      case 2:
        return (
          <Grow in>
            <Accordion defaultExpanded sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#F3F4F6' }} />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Step 3: Additional Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" flexDirection="column" gap={3}>
                  <TextField
                    fullWidth
                    label="Includes"
                    name="includes"
                    multiline
                    rows={2}
                    required
                    value={formData.includes}
                    onChange={handleInputChange}
                    sx={teslaInputStyle}
                  />
                  <TextField
                    fullWidth
                    label="Image URL"
                    name="image"
                    required
                    value={formData.image}
                    onChange={handleInputChange}
                    sx={teslaInputStyle}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grow>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          bgcolor: '#121212',
          color: '#F3F4F6',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.7)',
        },
      }}
    >
      <DialogTitle
        sx={{
          borderBottom: '1px solid #1F2937',
          fontSize: '22px',
          fontWeight: 600,
        }}
      >
        {editMode ? 'Edit Product' : 'Add New Product'} - Step {activeStep + 1} of 3
      </DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ pt: 3 }}>
          {renderStepContent(activeStep)}
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3, borderTop: '1px solid #1F2937' }}>
        <Button
          onClick={onClose}
          sx={{
            color: '#F3F4F6',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          Cancel
        </Button>
        {activeStep > 0 && (
          <Button
            onClick={handleBack}
            sx={{
              color: '#F3F4F6',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Back
          </Button>
        )}
        {activeStep < 2 ? (
          <Button
            onClick={handleNext}
            variant="contained"
            sx={{
              backgroundColor: '#3B82F6',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#2563EB',
              },
              textTransform: 'none',
              px: 4,
              py: 1,
            }}
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: '#3B82F6',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#2563EB',
              },
              textTransform: 'none',
              px: 4,
              py: 1,
            }}
          >
            {editMode ? 'Update' : 'Create'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

const accordionStyle = {
  backgroundColor: '#0A0A0A',
  color: '#F3F4F6',
  borderRadius: '8px',
  boxShadow: '0 1px 4px rgba(255,255,255,0.05)',
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    borderBottom: '1px solid #1F2937',
  },
};

const teslaInputStyle = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#111111',
    color: '#F3F4F6',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#374151',
    },
    '&:hover fieldset': {
      borderColor: '#6B7280',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3B82F6',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#9CA3AF',
    '&.Mui-focused': {
      color: '#3B82F6',
    },
  },
};

export default CreateProduct;