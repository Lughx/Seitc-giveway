import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: { type: String, required: false, default: "" },
    phone: { type: Number, required: false, default: 0 },
    email: { type: String, required: false, default: "" },
    intent: { type: String, required: false, default: "" },
    giveway: { type: String, required: false, default: "" },
    number: { type: Number, required: false, default: 0 },
    status: { type: Number, required: false, default: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


const IntentGivewayModel = model("IntentGiveway", schema);
export default IntentGivewayModel;