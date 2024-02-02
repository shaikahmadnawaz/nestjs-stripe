// PaymentPage.jsx
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentPage = () => {
  const [amount, setAmount] = useState(0);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await axios.post("http://localhost:3000/stripe", {
      amount,
      currency: "inr",
    });

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

    if (result.error) {
      console.error(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        console.log("Payment successful!");
      }
    }
  };

  return (
    <div>
      <h2>Stripe Payment Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Card details:
          <CardElement />
        </label>
        <br />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentPage;
