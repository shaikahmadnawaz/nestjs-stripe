import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentPage from "./components/PaymentPage";
import { Toaster } from "react-hot-toast";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const App = () => {
  return (
    <>
      <div>
        <Toaster position="top-center"></Toaster>
      </div>
      <div className="mx-auto">
        <Elements stripe={stripePromise}>
          <PaymentPage />
        </Elements>
      </div>
    </>
  );
};

export default App;
