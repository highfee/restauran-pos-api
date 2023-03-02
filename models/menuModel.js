import mongoose from "mongoose";

const menuSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    items: [
      {
        name: String,
        price: Number,
        quantity: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Menu", menuSchema);
