import mongoose from "mongoose";

const MesasSchema = new mongoose.Schema(
  {
    mesas: {
      type:[
        {
          numero: {type: Number, required: true},
          estado: {type: Boolean, default: true},
        }
      ]
    }
  },
  { timestamps: true }
);

export default mongoose.models.Mesas || mongoose.model("Mesas", MesasSchema);
