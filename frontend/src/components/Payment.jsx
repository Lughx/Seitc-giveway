"use client"
import { useEffect, useState } from "react";
import "./formStripe.css"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

function Payment({ data }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [idIntent, setIdIntent] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    }).then(async (result) => {
      console.log("get the payment")
      console.log(data)
      let { clientSecret, idIntent } = await result.json()
      await setIdIntent(idIntent)
      await setClientSecret(clientSecret)
    });
  }, []);

  const options = {
    clientSecret,
    appearance: {
      theme: "flat"
    },
  };

  return (
    <>
      {clientSecret && idIntent && stripePromise && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm idIntent={idIntent} />
        </Elements>
      )}
    </>
  );
}

export default Payment;
