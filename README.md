# validate-json-resume-action
Github action to validate if a json resume is compliant to the standards provided by jsonresume.org and https://github.com/jsonresume/resume-schema. 

### Usage
Add the following step to your github action:
```
- uses: lukew3/validate-json-resume-action@main
  with:
    resume_path: path/to/resume.json
```
