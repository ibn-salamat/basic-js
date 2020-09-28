const countCat = require("./src/count-cats");

const scripts = [countCat];

const currentScriptIndex = process.argv[2];

scripts[currentScriptIndex - 1]();
