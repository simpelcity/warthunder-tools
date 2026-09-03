import fs from "node:fs";

const file = "SamMissiles.ts";

const content = fs.readFileSync(file, "utf8");

const result = content.replace(/"([A-Za-z_$][A-Za-z0-9_$]*)"\s*:/g, "$1:");

fs.writeFileSync(file, result);

console.log("Done!");
