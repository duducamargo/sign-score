const fs = require("fs");
const data = require("./db.json");

const maxId = Math.max(...data.results.map((item) => item.id), 0);

data.results.forEach((item, index) => {
  item.id = index + 1;
});

fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
