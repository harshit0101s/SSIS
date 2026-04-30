# Steel Singer Info Services

A premium, dynamic, and responsive website built for **Steel Singer Info Services**, one of the largest integrated steel service providers based in Chennai.

## Overview

This project highlights the company's core services, including:
- **Market Intelligence**: Daily steel prices based on Pan India demand and supply.
- **Digital Marketing**: Strategic branding and digital presence.
- **Manpower Management**: Consultation for managing and optimizing organizational workforce.
- **Procurement Consulting**: Expert guidance on raw material and finished steel procurement.
- **Pan India Trading**: Buying and selling platform for Mild Steel.
- **Pre-Engineering Building (PEB)**: Complete PEB solutions from drawings to erection.

## Tech Stack

- **Framework**: [React](https://react.dev/) via [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [Web3Forms](https://web3forms.com/)

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory.
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The built files will be output to the `dist/` directory, ready to be deployed.

## Contact Form Setup

The contact form is configured to send emails using **Web3Forms**. 
To start receiving emails:
1. Go to [Web3Forms](https://web3forms.com/) and generate a free access key.
2. Open `src/components/Contact.jsx` and replace `"YOUR_WEB3FORMS_ACCESS_KEY_HERE"` with your actual access key.
