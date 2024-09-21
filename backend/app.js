import express from "express";
const app = express();
// Replace if using a different env file or config
import env from "dotenv"//.config({ path: "./.env" });
env.config({ path: "./.env" })
import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
import cors from "cors"

app.use(
    cors({
      origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
      credentials: true,
      exposedHeaders: ["set-cookie"],
    })
  );

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    "message": "hola itcitos"
  });
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "MXN",
        amount: 10000,
        automatic_payment_methods: { enabled: true },
      });
  
      // Send publishable key and PaymentIntent details to client
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (e) {
      return res.status(400).send({
        error: {
          message: e.message,
        },
      });
    }
  });

export default app