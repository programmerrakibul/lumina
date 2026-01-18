# LUMINA

A modern e-commerce platform built with Next.js, featuring a sleek product
catalog, user authentication, and comprehensive product management capabilities.

## 🚀 Features

### Core Functionality

- **Product Catalog** - Browse and discover products
- **User Authentication** - Secure login system with session management
- **Product Management** - Add product inventory
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### User Experience

- **Interactive UI** - Smooth animations powered by Framer Motion
- **Modern Components** - Clean, accessible interface with Lucide React icons
- **Form Validation** - Robust form handling with React Hook Form
- **Toast Notifications** - Real-time feedback with Sonner
- **Loading States** - Skeleton screens and loading indicators

### Technical Features

- **MongoDB Integration** - Scalable database with Mongoose ODM
- **API Routes** - RESTful endpoints for product operations
- **Image Upload** - Product image management system
- **Cookie Management** - Secure session handling

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+
- MongoDB database
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/programmerrakibul/lumina.git
   cd lumina
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration** Create a `.env.local` file in the root
   directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string_here
   NEXT_PUBLIC_AUTH_TOKEN=your_auth_token_here
   NEXT_PUBLIC_IMAGE_API_KEY=your_image_api_key_here
   NEXT_PUBLIC_DEMO_EMAIL=demo@example.com
   NEXT_PUBLIC_DEMO_PASS=demo_password_here
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
   ```

````

4. **Start the development server**

```bash
npm run dev
````

5. **Open your browser** Navigate to
   [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📍 Route Summary

### Public Routes

- `/` - Homepage with hero section, featured products, and testimonials
- `/products` - Product catalog with grid layout
- `/products/[id]` - Individual product detail pages
- `/login` - User authentication page

### Protected Routes

- `/add-product` - Product creation form (requires authentication)

### API Endpoints

- `GET /api/products` - Retrieve products with pagination and sorting
- `POST /api/products` - Create new products
- `GET /api/products/[id]` - Get specific product details

## 🎯 Implemented Features

### Authentication System

- Secure login with email/password
- Session management with cookies
- Protected route middleware
- Demo credentials for testing

### Product Management

- **Product Creation** - Add products with name, description, price, category
- **Image Handling** - Upload and manage product images
- **Categorization** - Organize products by categories (electronics, clothing,
  books, home, sports, beauty)
- **Inventory Tracking** - Stock management and availability
- **Rating System** - Product ratings and reviews
- **Featured Products** - Highlight special products
- **Tag System** - Flexible product tagging

### User Interface

- **Hero Section** - Engaging landing page with call-to-action
- **Product Cards** - Clean, informative product displays
- **Navigation** - Responsive navbar with authentication state
- **Footer** - Comprehensive site information
- **Loading States** - Skeleton screens for better UX
- **Error Handling** - Graceful error messages and fallbacks

### Technical Implementation

- **Database Models** - Structured MongoDB schemas with validation
- **API Layer** - RESTful endpoints with error handling
- **Form Management** - Validated forms with real-time feedback
- **State Management** - Custom hooks for authentication
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance** - Optimized images and lazy loading

## 🔧 Tech Stack

- **Framework:** Next.js 16.1.3
- **Frontend:** React 19.2.3, Tailwind CSS 4
- **Backend:** Node.js, MongoDB, Mongoose
- **Authentication:** Custom hook-based system
- **Forms:** React Hook Form
- **UI Components:** Lucide React, Framer Motion
- **Notifications:** Sonner
- **Development:** ESLint, PostCSS

## 📱 Demo Credentials

For testing purposes, use these demo credentials:

- **Email:** rakibul@gmail.com
- **Password:** password123
