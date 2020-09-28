const countCat = require("./src/count-cats"),
  dreamTeam = require("./src/dream-team.js");

const scripts = [countCat, dreamTeam];

const currentScriptIndex = process.argv[2];

scripts[currentScriptIndex - 1]();
