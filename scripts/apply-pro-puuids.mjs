import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT_DIR = process.cwd();

const PRO_DATA_DIR = path.join(
  ROOT_DIR,
  "src",
  "data",
  "pro",
);

const MAP_FILE = path.join(
  ROOT_DIR,
  "scripts",
  "pro-puuid-map.json",
);

function escapeRegExp(value) {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );
}

function getAllTypeScriptFiles(directory) {
  const results = [];

  const entries = fs.readdirSync(
    directory,
    {
      withFileTypes: true,
    },
  );

  for (const entry of entries) {
    const fullPath = path.join(
      directory,
      entry.name,
    );

    if (entry.isDirectory()) {
      results.push(
        ...getAllTypeScriptFiles(
          fullPath,
        ),
      );

      continue;
    }

    if (
      entry.isFile() &&
      entry.name.endsWith(".ts")
    ) {
      results.push(fullPath);
    }
  }

  return results;
}

function splitRiotId(riotId) {
  const hashIndex =
    riotId.lastIndexOf("#");

  if (hashIndex === -1) {
    return null;
  }

  return {
    name: riotId.slice(
      0,
      hashIndex,
    ),
    tag: riotId.slice(
      hashIndex + 1,
    ),
  };
}

function hasPuuidNearby(
  source,
  matchIndex,
) {
  const start = Math.max(
    0,
    matchIndex - 150,
  );

  const end = Math.min(
    source.length,
    matchIndex + 350,
  );

  const nearby = source.slice(
    start,
    end,
  );

  return /puuid\s*:/.test(
    nearby,
  );
}

if (
  !fs.existsSync(MAP_FILE)
) {
  console.error(
    `PUUID 데이터 파일을 찾을 수 없습니다:\n${MAP_FILE}`,
  );

  process.exit(1);
}

if (
  !fs.existsSync(PRO_DATA_DIR)
) {
  console.error(
    `프로 선수 데이터 폴더를 찾을 수 없습니다:\n${PRO_DATA_DIR}`,
  );

  process.exit(1);
}

const rawMap = fs.readFileSync(
  MAP_FILE,
  "utf8",
);

let puuidData;

try {
  puuidData =
    JSON.parse(rawMap);
} catch (error) {
  console.error(
    "pro-puuid-map.json이 올바른 JSON 형식이 아닙니다.",
  );

  console.error(error);

  process.exit(1);
}

if (!Array.isArray(puuidData)) {
  console.error(
    "pro-puuid-map.json의 최상위 값은 배열이어야 합니다.",
  );

  process.exit(1);
}

const typeScriptFiles =
  getAllTypeScriptFiles(
    PRO_DATA_DIR,
  );

let updatedAccountCount = 0;
let updatedFileCount = 0;

const notFound = [];
const alreadyExists = [];
const invalidEntries = [];

for (const item of puuidData) {
  if (
    !item ||
    typeof item !== "object" ||
    typeof item.storedRiotId !==
      "string" ||
    typeof item.puuid !== "string" ||
    !item.puuid
  ) {
    invalidEntries.push(item);

    continue;
  }

  const riotId = splitRiotId(
    item.storedRiotId,
  );

  if (!riotId) {
    invalidEntries.push(item);

    continue;
  }

  const escapedName =
    escapeRegExp(riotId.name);

  const escapedTag =
    escapeRegExp(riotId.tag);

  let found = false;

  for (const filePath of typeScriptFiles) {
    let source = fs.readFileSync(
      filePath,
      "utf8",
    );

    /*
     * 다음 형태를 찾는다.
     *
     * {
     *   name: "...",
     *   tag: "...",
     *   verification: ...
     * }
     *
     * name/tag가 같은 계정에
     * puuid 줄을 tag 바로 아래 삽입한다.
     */
    const pattern = new RegExp(
      `^([\\t ]*)name\\s*:\\s*["']${escapedName}["']\\s*,\\s*\\r?\\n\\1tag\\s*:\\s*["']${escapedTag}["']\\s*,`,
      "m",
    );

    const match =
      pattern.exec(source);

    if (!match) {
      continue;
    }

    found = true;

    if (
      hasPuuidNearby(
        source,
        match.index,
      )
    ) {
      alreadyExists.push({
        nickname:
          item.nickname ?? null,
        riotId:
          item.storedRiotId,
        file: path.relative(
          ROOT_DIR,
          filePath,
        ),
      });

      break;
    }

    const indentation =
      match[1];

    const replacement =
      `${match[0]}\n` +
      `${indentation}puuid: "${item.puuid}",`;

    source =
      source.slice(
        0,
        match.index,
      ) +
      replacement +
      source.slice(
        match.index +
          match[0].length,
      );

    fs.writeFileSync(
      filePath,
      source,
      "utf8",
    );

    updatedAccountCount += 1;
    updatedFileCount += 1;

    console.log(
      `✓ ${
        item.nickname ??
        item.playerSlug ??
        "Unknown"
      } · ${item.storedRiotId}`,
    );

    console.log(
      `  → ${path.relative(
        ROOT_DIR,
        filePath,
      )}`,
    );

    break;
  }

  if (!found) {
    notFound.push({
      nickname:
        item.nickname ?? null,
      playerSlug:
        item.playerSlug ?? null,
      riotId:
        item.storedRiotId,
      puuid: item.puuid,
    });
  }
}

console.log("");
console.log(
  "===== PUUID APPLY SUMMARY =====",
);

console.log(
  `입력 데이터: ${puuidData.length}`,
);

console.log(
  `PUUID 추가: ${updatedAccountCount}`,
);

console.log(
  `이미 존재: ${alreadyExists.length}`,
);

console.log(
  `계정 위치 못 찾음: ${notFound.length}`,
);

console.log(
  `잘못된 데이터: ${invalidEntries.length}`,
);

console.log(
  `수정된 항목 수: ${updatedFileCount}`,
);

if (notFound.length > 0) {
  console.log("");
  console.log(
    "===== SOURCE NOT FOUND =====",
  );

  console.table(notFound);
}

if (
  alreadyExists.length > 0
) {
  console.log("");
  console.log(
    "===== ALREADY HAS PUUID =====",
  );

  console.table(alreadyExists);
}

if (
  invalidEntries.length > 0
) {
  console.log("");
  console.log(
    "===== INVALID DATA =====",
  );

  console.table(invalidEntries);
}