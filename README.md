

#Tesla-clone-with-AIChat-Assistant

A modern web application that replicates Tesla's user experience with additional features. Built with React, TypeScript, and Node.js.

## Features

- **Authentication System**
  - User registration with OTP verification
  - Secure login with JWT
  - Password reset functionality
  - Role-based access control (Customer, Employee, Admin)

- **User Profile Management**
  - Profile creation and updates
  - Region and language preferences
  - Role management (Admin only)

- **Interactive UI Components**
  - Tesla-inspired design
  - Responsive layout
  - Dynamic video carousels
  - Power wall and solar panel showcases

## UI Screenshots

### Home Page UI
![Screenshot 2025-05-23 153716](https://github.com/user-attachments/assets/98d5bd2b-1579-4ff5-be6e-1c1f5da8f431)


### Home Page with AI assistance 
![Screenshot 2025-05-23 153757](https://github.com/user-attachments/assets/f85e0d5f-82c2-427d-b5ca-aa32e2ddb4e9)

### Admin Dashboard
![Screenshot 2025-05-23 153730](https://github.com/user-attachments/assets/c6caddde-09e1-4eb4-bc04-1797d7d88e3f)

*Administrative dashboard showing key metrics and quick actions for managing products, categories, and users*

### User Management
![Screenshot 2025-05-23 153743](https://github.com/user-attachments/assets/f7ea0359-97fd-448a-86ed-ca2d7a71a72f)

*User management interface with role-based access control and regional settings . Admin can also change User role*

### Product Page
![Screenshot 2025-05-23 154528](https://github.com/user-attachments/assets/e69e1d2d-a3e0-439d-ae40-9600a91fa82a)

### AI Chat Assistant
![Screenshot 2025-05-23 153808](https://github.com/user-attachments/assets/4a44a683-10da-44fc-b37c-7e2d25e6a624)

*Dedicated AI chat interface for customer support and vehicle inquiries*

### Help-me Page 
![Screenshot 2025-05-23 154448](https://github.com/user-attachments/assets/df15ee82-6b7c-4e6a-8824-3179e211e0e1)

*Integrate EmailJs to get response of filled Form in email  *

### Shop Interface
![Screenshot 2025-05-23 153823](https://github.com/user-attachments/assets/04ce6fd5-60ae-4bdd-ba7b-c2abf514b4ca)

*E-commerce interface showcasing Tesla accessories and merchandise*

### Razorpay interphase
![Screenshot 2025-05-23 154502](https://github.com/user-attachments/assets/40f7cf51-a1df-44da-910e-5891d41d5ca2)

## Tech Stack & Integrations

### Frontend Technologies
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn-ui components
- Redux Toolkit for state management
- React Router v6 for navigation
- Axios for API requests
- React Query for data fetching
- Framer Motion for animations

### Backend Technologies
- Node.js with Express
- PostgreSQL database
- TypeORM for database management
- JWT for authentication
- Nodemailer for email services
- bcrypt for password hashing
- Express Rate Limit for API protection

### AI & External Integrations
- OpenAI GPT for chat assistant
- Twilio for SMS notifications
- Stripe for payment processing
- AWS S3 for media storage
- Cloudinary for image optimization
- SendGrid for transactional emails

### DevOps & Deployment
- Docker for containerization
- GitHub Actions for CI/CD
- Render for cloud hosting
- PostgreSQL on Render for database hosting
- Nginx for reverse proxy
- PM2 for process management

### Security Features
- CORS protection
- Helmet.js for security headers
- Rate limiting
- Input validation with Zod
- XSS protection
- CSRF protection

### Monitoring & Analytics
- Sentry for error tracking
- Google Analytics for user tracking
- Winston for logging
- Performance monitoring with New Relic


## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn package manager

### Installation

1. Clone the repository:
git clone [repository-url]

2. Install frontend dependencies: 
npm install

3. Install backend dependencies: 
cd server
npm install

4. Set up environment variables:
   Create a .env file in the server directory with the following variables:
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_postgres_connection_string
SMTP_HOST=your_smtp_host
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password


5. Start the development servers:
Frontend:
npm run dev

Backend:
cd server 
npm run dev

## Project Structure
## API Endpoints
### Authentication
- POST /api/auth/signup - User registration
- POST /api/auth/login - User login
- POST /api/auth/sendotp - Send OTP for verification
- POST /api/auth/changepassword - Change password (authenticated)
### Profile
- GET /api/profile/get - Get user profile
- PUT /api/profile/update - Update user profile
### Admin Routes
- PUT /api/users/:id/role - Change user role
- GET /api/users - Get all users
## Contributing
1. Fork the repository
2. Create your feature branch ( git checkout -b feature/AmazingFeature )
3. Commit your changes ( git commit -m 'Add some AmazingFeature' )
4. Push to the branch ( git push origin feature/AmazingFeature )
5. Open a Pull Request
## License
This project is licensed under the ISC License.

## Acknowledgments
- Tesla's design inspiration
- shadcn-ui component library
- Vite build tool
- All contributors and maintainers
