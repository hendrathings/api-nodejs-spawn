var spawn = require("child_process").spawn;
var process = spawn("python", ["./quickstart.py"]);
var stringData = "";
process.stdout.on("data", function(data) {
  stringData += data.toString();
});
process.on('close', (code, signal) =>{
  var jsonData = JSON.parse(stringData);
  console.log(JSON.stringify(jsonData, null, 2));
});