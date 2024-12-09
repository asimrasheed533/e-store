import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const signUpSchema = new Schema({
  name: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, unique: true, index: true },
  phone: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true, unique: true, index: true },
});

export const SignUp = models.SignUp || model("SignUp", signUpSchema);
