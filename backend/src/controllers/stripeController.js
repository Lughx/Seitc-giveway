import "dotenv/config";
import { handleError } from "../utils/handleError.js";
import Stripe from "stripe"
import IntentGivewayModel from "../models/IntentGiveway.js";
import { sanitizerString } from "../utils/sanitizers.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const getConfig = (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
}

export const postPaymentIntent = async ({ body }, res) => {
    try {
        const exist = await IntentGivewayModel.findOne({ number: body.number })
        if (exist) return handleError(res, "Ya no esta disponible este numero", "Numero no disponible")

        const paymentIntent = await stripe.paymentIntents.create({
            currency: "MXN",
            amount: 10000,
            automatic_payment_methods: { enabled: true }, 
        });

        const intent = new IntentGivewayModel()
        intent.name = sanitizerString(body.name)
        intent.phone = sanitizerString(body.phone)
        intent.email = sanitizerString(body.email)
        intent.number = body.number
        intent.intent = paymentIntent.id
        intent.giveway = body.giveway
        await intent.save()

        res.send({
            idIntent: paymentIntent.id,
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        handleError(res, "ERROR_POST_PAYMENT_INTENT", error)
    }
}
