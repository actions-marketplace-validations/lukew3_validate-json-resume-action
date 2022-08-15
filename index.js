const fs = require("fs");
const resumeSchema = require("resume-schema");
const core = require('@actions/core');

const resumePath = core.getInput('resume-path');
var resumeObject = JSON.parse(fs.readFileSync(resumePath, "utf8"));
resumeSchema.validate(
  resumeObject,
  function (err, report) {
    if (err) {
      console.error("The resume was invalid:", err);
      return;
    }
    console.log("Resume validated successfully:", report);
  },
  function (err) {
    console.error("The resume was invalid:", err);
  }
);
