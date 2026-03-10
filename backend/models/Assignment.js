const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  question: String,
  sampleTables: Array,
  expectedOutput: Object
});

module.exports = mongoose.model("Assignment", AssignmentSchema);