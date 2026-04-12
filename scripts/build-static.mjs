import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(currentDir, "..");
const sourceRoot = resolve(projectRoot, "src");
const outputRoot = resolve(projectRoot, "dist");

if (!existsSync(sourceRoot)) {
  throw new Error("Missing source directory: src/");
}

rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(outputRoot, { recursive: true });
cpSync(sourceRoot, outputRoot, { recursive: true, force: true });

const platformAssetsDir = resolve(outputRoot, "platform-assets");
const legacyAssetsDir = resolve(outputRoot, "assets");
mkdirSync(platformAssetsDir, { recursive: true });
mkdirSync(legacyAssetsDir, { recursive: true });

// Mirror shared files so both /platform-assets/* and /assets/* URLs work.
cpSync(platformAssetsDir, legacyAssetsDir, { recursive: true, force: true });
