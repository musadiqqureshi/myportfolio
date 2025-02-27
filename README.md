# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a dark theme and smooth animations.

## Quick Start

1. Download the project:
   - [Download Portfolio Project (ZIP)](./portfolio.zip)

2. Extract the ZIP file and navigate to the project directory:
```bash
unzip portfolio.zip
cd portfolio-website
```

3. Install dependencies:
```bash
npm install
```

4. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Run the development server:
```bash
npm run dev
```

## Features
- Modern, responsive design
- Dark theme with green accents
- Interactive project showcase
- Contact form with EmailJS integration
- Smooth page transitions and animations
- Project filtering and categorization

## Tech Stack
- React.js
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- Shadcn UI

## Project Structure
```
client/
  ├── src/
  │   ├── components/    # React components
  │   │   ├── ui/       # UI components from shadcn
  │   │   └── ...       # Custom components
  │   ├── lib/          # Utility functions
  │   ├── hooks/        # Custom React hooks
  │   └── App.tsx       # Main application component
  ├── index.html
  └── vite.config.ts    # Vite configuration
```

## Deployment
The project is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Add the required environment variables in Netlify:
   - VITE_EMAILJS_SERVICE_ID
   - VITE_EMAILJS_TEMPLATE_ID
   - VITE_EMAILJS_PUBLIC_KEY
3. Deploy! Netlify will automatically build and deploy your site

## EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Get your credentials (Service ID, Template ID, Public Key)
4. Add them to your environment variables

## License
MIT License

## Author
Muhammad Mussaddiq Ahmed Qureshi