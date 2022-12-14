import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    empleado: {
      type: String,
      required: true,
      maxlength: 60,
    },
    total: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    prices: {
      type: Number,
      required: true,
    },
    status: {
      type: [Number],
      required: true,
    },
    mesas: {
      type:[
        {
          text: {type: String, required: true},
          status: {type: Number, required: true},
        }
      ]
    }
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
