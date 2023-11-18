import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    id: 1,
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters."],
    maxLength: [50, "Name must be lesser than 50 characters."],
  },

  email: {
    id: 2,
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address."],
  },

  message: {
    id: 3,
    type: String,
    required: [true, "Message is required."],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
