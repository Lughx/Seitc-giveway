import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: { type: String, required: false, default: "" },
    details: { type: String, required: false, default: "" },
    price: { type: Number, required: false, default: 0 },
    tickets: {
      total: { type: Number, required: false, default: 0 },
      numbers: { type: [Object], default: [] }
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/* {
    giveway: "",
    name: "",
    details: "",
    numbers: {
        {1: ""}
    }
}

{
    name:"", 
    phone: "", 
    email: "", 
    intent: ""
} */

const GivewayModel = model("Giveway", schema);
export default GivewayModel;