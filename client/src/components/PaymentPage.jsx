import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
        margin: "10px 0",
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      toast.error("Invalid amount. Please enter a valid positive number.");
      return;
    }

    setLoading(true);

    const currency = "inr";
    const response = await axios.post(
      "https://nestjs-stripe.onrender.com/stripe",
      {
        amount,
        currency,
      }
    );

    const result = await stripe.confirmCardPayment(
      response.data.client_secret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "New User",
          },
        },
      }
    );

    setLoading(false);

    if (result.error) {
      toast.error(result.error.message);
      console.error(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
        console.log("Payment successful!");

        setAmount("");
        elements.clear();
      }
    }
  };

  return (
    <div className="max-w-sm mx-auto my-4 md:my-6">
      <div className="p-4 overflow-hidden shadow-md rounded-xl">
        <h2 className="text-xl font-bold text-gray-900">
          Stripe Payment Details
        </h2>
        <form onSubmit={handleSubmit} className="w-full mt-4">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Amount:
            <input
              className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border rounded-md border-black/30 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <br />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Card details:
            <CardElement
              className="w-full p-2 border"
              options={cardElementOptions}
            />
          </label>
          <br />

          <div className="flex items-center justify-between gap-x-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-2 py-3 space-x-1 text-xs font-semibold text-center text-white bg-black rounded-sm shadow-md"
              disabled={loading}
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Pay"}
            </button>
            <Link
              to="/event-logs"
              className="inline-flex items-center justify-center w-full px-2 py-3 space-x-1 text-xs font-semibold text-center text-white bg-black rounded-sm shadow-md"
            >
              View Event Logs
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
