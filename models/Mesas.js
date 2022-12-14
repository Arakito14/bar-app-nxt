import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    mesas: {
      type:[
        {
          text: {type: String, required: true},
          status: {type: Boolean, default: 0},
        }
      ]
    }
  },
  { timestamps: true }
);

export default mongoose.models.Mesas || mongoose.model("Order", MesasSchema);
