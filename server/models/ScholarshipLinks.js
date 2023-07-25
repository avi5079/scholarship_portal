const { Schema, default: mongoose } = require("mongoose");

const ScholarshipLinksSchema = new Schema({
  title: String,
  links: Array,
});

const ScholarshipLinks = mongoose.model(
  "ScholarshipLinks",
  ScholarshipLinksSchema
);

module.exports = ScholarshipLinks;
