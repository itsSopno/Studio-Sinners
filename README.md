# Creative Store - Next.js E-commerce Project

A modern, responsive e-commerce application built with Next.js, featuring authentication, product listings, and a beautiful UI.

## 🚀 Features

### ✅ Core Requirements Implemented

1. **Landing Page** - Complete with 7 sections:
   - Hero Section with call-to-action
   - Features showcase
   - About section
   - Services overview
   - Statistics display
   - Customer testimonials
   - Call-to-action section

2. **Authentication System**
   - Mock login with hardcoded credentials
   - Cookie-based session management
   - Protected routes with middleware
   - Demo credentials: `admin@creative.com` / `password123`

3. **Item List Page**
   - Publicly accessible product catalog
   - Mock API data with 6+ products
   - Responsive grid layout
   - Product cards with images, descriptions, and prices

4. **Item Details Page**
   - Individual product pages with full details
   - Dynamic routing (`/items/[id]`)
   - Comprehensive product information
   - Features and specifications

5. **Protected Add Item Page**
   - Authentication required
   - Form to add new products
   - Simulated database storage
   - Form validation and success feedback

### 🎨 Additional Features

- **Responsive Design** - Works on all device sizes
- **Modern UI** - Glass morphism effects and gradients
- **Smooth Animations** - Framer Motion animations
- **Loading States** - Proper loading indicators
- **Error Handling** - User-friendly error messages
- **Navigation** - Consistent navbar with active states

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Authentication**: Cookie-based (js-cookie)
- **Icons**: Emoji-based icons
- **Images**: Unsplash API

## 📦 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   ```
   http://localhost:3000
   ```

## 🔐 Authentication

The app uses mock authentication with these credentials:
- **Email**: `admin@creative.com`
- **Password**: `password123`

Authentication is stored in cookies and protected by middleware.

## 📱 Pages & Routes

- `/` - Landing page with 7 sections
- `/items` - Product catalog (public)
- `/items/[id]` - Product details (public)
- `/login` - Authentication page
- `/add-item` - Add new product (protected)
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact form

## 🎯 Key Components

### Landing Page Sections
1. Hero with branding and CTAs
2. Features grid
3. About story
4. Services showcase
5. Statistics counter
6. Customer testimonials
7. Final call-to-action

### Authentication Flow
- Login form with validation
- Cookie-based session storage
- Middleware route protection
- Automatic redirects

### Product Management
- Mock product data
- Dynamic product pages
- Add item form (protected)
- Responsive product cards

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Any Node.js hosting platform

## 📝 Future Enhancements

- Real database integration (MongoDB/PostgreSQL)
- Express.js backend API
- NextAuth.js for social login
- Shopping cart functionality
- Payment integration
- User profiles and order history
- Admin dashboard
- Search and filtering
- Product reviews and ratings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes and demonstration of Next.js capabilities.

---

**Demo Credentials**: admin@creative.com / password123
