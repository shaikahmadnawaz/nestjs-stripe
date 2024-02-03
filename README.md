# Stripe Payment Module

This is a sample application implementing a Stripe payment module with React and NestJs.

## Deployment

- **Frontend Deployment:** [https://react-nestjs-stripe.vercel.app](https://react-nestjs-stripe.vercel.app)
- **Backend Deployment:** [https://nestjs-stripe.onrender.com](https://nestjs-stripe.onrender.com)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Stripe account and API keys (Test mode for development)
- Git installed

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/shaikahmadnawaz/react-nestjs-stripe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd client
   ```

3. Install dependencies:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

4. Configure environment variables:

   Create a `.env` file in the `server` directory with the following content:

   ```env
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

   Replace `your_stripe_secret_key` with your actual Stripe secret key.

   Create a `.env` file in the `client` directory with the following content:

   ```env
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
   ```

5. Start the server:

   ```bash
   cd ../server
   npm start
   ```

   The server will run on `http://localhost:3000`.

6. Start the client:

   Open a new terminal window:

   ```bash
   cd ../client
   npm run dev
   ```

   The React app will run on `http://localhost:5173`.

## Usage

Visit `http://localhost:5173` in your browser to access the Stripe payment page.

## View Event Logs

To view event logs, navigate to `http://localhost:5173/event-logs`.

## Issues:

I encountered a specific error related to international payments, in line with Indian regulations. The error states that only registered Indian businesses can accept international payments. I have reviewed my Stripe account settings and ensured compliance with the regulations, but the issue persists.

![image](https://github.com/shaikahmadnawaz/react-nestjs-stripe/assets/96189881/5c8c136f-d39f-40a4-a71f-715472e32e20)

![image](https://github.com/shaikahmadnawaz/react-nestjs-stripe/assets/96189881/77079ac7-6f0d-40bf-8ea2-966f9913a745)


## Additional Information

- Make sure to use test API keys during development.
- Feel free to customize the application based on your requirements.
