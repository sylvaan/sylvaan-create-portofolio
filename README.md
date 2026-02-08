# Portfolio Project - Meta Front-End Developer Capstone

This project is a submission for the **Meta Front-End Developer Professional Certificate** (specifically the _Advanced React_ course). It demonstrates the implementation of a portfolio website using React, Chakra UI, and form management libraries.

> **Note**: This is not a personal portfolio but a project created for educational and assessment purposes. The content (bio, projects) is placeholder data as per the project requirements.

## Features

- **Header**: Responsive navigation bar with smooth scrolling and social links.
- **Landing Section**: Introduction component with avatar and greeting.
- **Projects Section**: Grid layout displaying project cards.
- **Contact Me Section**: Fully functional form with validation using **Formik** and **Yup**.
- **Alert System**: Custom **Context API** implementation to manage global alert states.
- **Responsive Design**: Adapts to various screen sizes.

## Technologies Used

- **Framework**: [React](https://reactjs.org/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Library**: [Chakra UI](https://chakra-ui.com/) (v2)
- **Form Handling**: [Formik](https://formik.org/)
- **Validation**: [Yup](https://github.com/jquense/yup)
- **Icons**: [FontAwesome](https://fontawesome.com/)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd sylvaan-create-portofolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/       # UI Components (Header, Landing, Projects, Contact, etc.)
├── context/          # AlertContext for managing application state
├── hooks/            # Custom hooks (useSubmit, useAlertContext)
├── App.tsx           # Main application layout
├── main.tsx          # Entry point with ChakraProvider
└── ...
```

## License

This project is licensed under the MIT License.
