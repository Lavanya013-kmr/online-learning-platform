const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  branch:   { type: String, required: true },
  div:      { type: String, required: true },
  year:     { type: String, required: true },
  rollno:   { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
