const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "TankShells.ts");
const outputPath = path.join(__dirname, "TankShells_Cleaned.ts");

// 1. Read the file
console.log("Reading file...");
const data = fs.readFileSync(filePath, "utf8");

// 2. Identify and parse the array
// This regex looks for the start of the array assignment (e.g., const tankShells = [ ... ])
const arrayMatch = data.match(/(\[[\s\S]*\])/);

if (!arrayMatch) {
  console.error("Could not find an array brackets [ ] in the file. Is it formatted differently?");
  process.exit(1);
}

try {
  // Use Function evaluator to safely parse TypeScript/JavaScript objects without strict JSON rules
  console.log("Parsing shells...");
  const shellsArray = new Function(`return ${arrayMatch[1]}`)();

  // 3. Deduplicate (Change 'id' or 'name' to whatever unique key your shells use)
  console.log(`Found ${shellsArray.length} items. Deduplicating...`);

  const uniqueMap = new Map();
  for (const shell of shellsArray) {
    // Falls back to name or model if 'id' isn't the primary key
    const uniqueKey = shell.id || shell.name || JSON.stringify(shell);
    uniqueMap.set(uniqueKey, shell);
  }

  const uniqueShells = Array.from(uniqueMap.values());
  console.log(`Deduplicated down to ${uniqueShells.length} items.`);

  // 4. Reconstruct the file text
  // Preserves whatever export/variable assignment prefix you had before the array
  const prefix = data.split(arrayMatch[1])[0];
  const cleanArrayText = JSON.stringify(uniqueShells, null, 2);

  fs.writeFileSync(outputPath, prefix + cleanArrayText + ";\n", "utf8");
  console.log(`Success! Cleaned file saved to: TankShells_Cleaned.ts`);
} catch (error) {
  console.error("Failed to parse the data automatically:", error.message);
}
