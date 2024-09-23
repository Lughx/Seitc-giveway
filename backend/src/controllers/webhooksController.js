import "dotenv/config";
import { handleError } from "../utils/handleError.js";
import Stripe from "stripe"
import IntentGivewayModel from "../models/IntentGiveway.js";
import GivewayModel from "../models/Giveway.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const postWebhookStripe = async (req, res) => {
    try {
        const sig = req.headers['stripe-signature'];

        let event;

        try {
            event = stripe.webhooks.constructEvent(req.body, sig, `${process.env.ENDPOINT_SECRET}`);
        } catch (err) {
            console.log(err)
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        // Handle the event
        const data = event.data.object;
        switch (event.type) {
            case "payment_intent.succeeded":
                const intent = await IntentGivewayModel.findOne({ intent: data.id })
                const intents = await IntentGivewayModel.find({ number: intent.number })

                const intentDb = await IntentGivewayModel.findOneAndUpdate({ intent: data.id }, { status: 1 })
                
                if (intents.length > 1) {
                    for (let i = 0; i < intents.length; i++) {
                        if (intents[i].intent != data.id) {
                            console.log(intent)
                            await IntentGivewayModel.findByIdAndDelete(intents[i].id)
                        }
                    }
                }

                const giveway = await GivewayModel.findById(intentDb.giveway)
                let tickets = giveway.tickets.numbers
                let temporalNumbers = []
                for (let i = 0; i < tickets.length; i++) {
                    if (tickets[i].number == intentDb.number) {
                        temporalNumbers.push({ number: tickets[i].number, available: false })
                    } else {
                        temporalNumbers.push(tickets[i])
                    }

                }

                await GivewayModel.findByIdAndUpdate(intentDb.giveway, {
                    tickets: {
                        total: giveway.tickets.total,
                        numbers: temporalNumbers
                    }
                })

                console.log(`${intentDb.name} pago su boleto`)
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        return res.json(true)

    } catch (error) {
        handleError(res, "ERROR_STRIPE_WEBHOOK", error);
    }
}