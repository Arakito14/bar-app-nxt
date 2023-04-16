import mongoose from "mongoose";

const MesasSchema = new mongoose.Schema(
  {
    numero:{
      type: Number,
      required: true,
      min: 1,
      max: 4
    },
    estado:{
      type: Number,
      default: 1,
      min: 0,
      max: 1,
    },
    flagged:{
      type: Number,
      default: 0,
      min: 0,
      max: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Mesas || mongoose.model("Mesas", MesasSchema);
