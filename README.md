# Travel Booking Platform

A modern and user-friendly travel booking platform that helps travelers rent cars, browse services, and easily plan their trips.

## 📋 Features

- 🚗 **Car Rental Service** - Rent cars from various brands
- 📍 **Home Page** - Attractive and informative landing page
- 🛎️ **Services** - Information about various travel services
- 📧 **Contact List** - Easy way for users to get in touch
- ℹ️ **About Us** - Company information and background
- 🏢 **Brand Logos** - Major car rental brands
- 📱 **Responsive Design** - Looks perfect on all devices

## 🛠️ Technologies

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** CSS3
- **Linting:** ESLint

## 📦 Installation

```bash
# Install dependencies
npm install

# Navigate to frontend directory
cd frontend
npm install
```

## 🚀 Run Development Server

```bash
npm run dev
```

The development server will run on `http://localhost:5173`. The page will automatically reload when you make changes to the code.

## 🏗️ Production Build

```bash
npm run build
```

This will create optimized production files in the `dist/` folder.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── About.jsx          # About Us section
│   │   ├── Box.jsx            # Reusable Box component
│   │   ├── Contactlist.jsx    # Contact list
│   │   ├── Footer.jsx         # Footer
│   │   ├── MainPage.jsx       # Main page
│   │   ├── Services.jsx       # Services
│   │   ├── MainpageContainer.jsx
│   │   └── rental/
│   │       ├── Home.jsx       # Rental Home page
│   │       ├── BrandLogo.jsx  # Brand logos
│   │       └── RentalContainer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
├── public/
├── vite.config.js
├── eslint.config.js
└── package.json
```

## 🎯 Main Components

### MainPage

Landing page that displays all main sections of the application.

### Rental

Provides car rental functionality with brand options and rental details.

### Services

Displays various travel-related services offered by the platform.

### About

Company information, mission, and background details.

### ContactList

Contact form for users to reach out for inquiries and support.

## 🔧 ESLint Configuration

The project is configured with ESLint for code quality. To check code quality:

```bash
npm run lint
```

## 📝 License

This project is licensed under the MIT License.

## 👥 Contributing

If you would like to contribute to this project, please create a Pull Request with your changes.

## 📞 Support

For any issues or questions, please create an Issue or contact us directly.
