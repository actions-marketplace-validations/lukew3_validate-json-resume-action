var fs = require("fs");
var resumeSchema = require("resume-schema");
const resumePath = process.argv[2];
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
