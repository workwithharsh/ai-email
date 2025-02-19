import mongoose from "mongoose";

// Email schema model
const draftSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Draft = mongoose.model("Draft", draftSchema);
