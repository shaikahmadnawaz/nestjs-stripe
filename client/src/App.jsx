import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentPage from "./components/PaymentPage";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const App = () => {
  return (
    <div>
      <h1>Your Stripe Payment App</h1>
      <Elements stripe={stripePromise}>
        <PaymentPage />
      </Elements>
    </div>
  );
};

export default App;
