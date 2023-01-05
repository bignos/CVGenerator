const fs = require("fs");
const carbone = require("carbone");

const data_file = "balandjian_carbone.json";
const template = "TemplateCV.odt";
const output = "balandjian_carbone.odt";

let rawdata = fs.readFileSync(data_file);
let data = JSON.parse(rawdata);

carbone.render(template, data, function (err, result) {
  if (err) {
    return console.log(err);
  }
  fs.writeFileSync(output, result);
});
