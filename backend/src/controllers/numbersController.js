import { handleError } from "../utils/handleError.js"
import GivewayModel from "../models/Giveway.js";
import IntentGivewayModel from "../models/IntentGiveway.js";

export const getIntents = async ({ params }, res) => {
    try {
        const intents = await IntentGivewayModel.find()
        console.log(intents)

        res.json(intents)
    } catch (error) {
        handleError(res, error)
    }
}

export const getIntent = async ({ params }, res) => {
    try {
        const intent = await IntentGivewayModel.findOne({intent: params.id})
        console.log(params.id)

        if (!intent) return handleError(res, "No existe ese intent")

        res.json(intent)
    } catch (error) {
        handleError(res, error)
    }
}


export const getGiveway = async ({ params }, res) => {
    try {
        const giveway = await GivewayModel.findById(params.id)

        if (!giveway) return handleError(res, "No existe ese giveway")

        res.json(giveway)
    } catch (error) {
        handleError(res, error)
    }
}

export const deleteEmptysIntends = async ({ }, res) => {
    try {  
        await IntentGivewayModel.deleteMany({ status: 0})

        res.json({
            "message": "deleted c:"
        })
    } catch (error) {
        handleError(res, error)
    }
}

export const postCreateGiveway = async ({ body }, res) => {
    try {
        const { name, details, total, price } = body

        let numbers = [] 
        for (let i = 1; i < total+1; i++) {
            numbers.push({number: i, available: true})
        } 
        
        const giveway = await GivewayModel()
        giveway.name = name
        giveway.details = details
        giveway.tickets = {total, numbers}
        giveway.price = price

        giveway.save()

        res.json(giveway)
    } catch (error) {
        handleError(res, error)
    }
}