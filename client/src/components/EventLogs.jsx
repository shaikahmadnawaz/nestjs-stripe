import { useEffect, useState } from "react";
import axios from "axios";

const EventLogs = () => {
  const [eventLogs, setEventLogs] = useState([]);

  useEffect(() => {
    const fetchEventLogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/stripe/events");
        setEventLogs(response.data);
      } catch (error) {
        console.error("Error fetching event logs:", error);
      }
    };

    fetchEventLogs();
  }, []);

  return (
    <div className="max-w-[27rem] mx-auto mt-8">
      <h2 className="mb-4 text-3xl font-semibold text-center">Event Logs</h2>
      <div className="grid grid-cols-1 gap-4">
        {eventLogs.map((event, index) => (
          <div
            key={index}
            className="block h-full p-4 border rounded-lg shadow-md"
          >
            <h3 className="mb-2 text-xl font-semibold">Event Details</h3>
            <p>
              <span className="font-bold">Type:</span> {event.type}
            </p>
            <p>
              <span className="font-bold">Amount:</span> {event.amount / 100}{" "}
              {event.currency}
            </p>
            <p>
              <span className="font-bold">PaymentIntent ID:</span>{" "}
              {event.paymentIntentId}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventLogs;
