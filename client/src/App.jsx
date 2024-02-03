import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentPage from "./components/PaymentPage";
import { Toaster } from "react-hot-toast";
import EventLogs from "./components/EventLogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const App = () => {
  return (
    <>
      <div>
        <Toaster position="top-center"></Toaster>
      </div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Elements stripe={stripePromise}>
                <PaymentPage />
              </Elements>
            }
          />
          <Route path="/event-logs" element={<EventLogs />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
