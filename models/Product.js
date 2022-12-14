import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    prices: {
      type: Number,
      required: true,
    },
    status:{
      type: Number,
      default: 0,
    },
    statusm: {
      type: [Boolean],
      required: true,
    },
    mesas: {
      type:[
        {
          text: {type: String, required: true},
          statusm: {type: Boolean, required: true},
        }
      ]
    }
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
