import { existsSync } from "node:fs";
import path from "node:path";

/** Server-only check for a file inside /public. Do not import from client components. */
export function publicFileExists(publicPath: string): boolean {
  const relative = publicPath.replace(/^\/+/, "");
  if (!relative || relative.split(/[/\\]/).includes("..")) return false;
  return existsSync(path.join(process.cwd(), "public", relative));
}
