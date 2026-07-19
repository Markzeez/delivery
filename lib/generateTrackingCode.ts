import { v4 as uuidv4 } from "uuid";

export function generateTrackingCode(stateCode: string) {
  const year = new Date().getFullYear();
  const suffix = uuidv4().split("-")[0].toUpperCase(); // 8-char hex
  return `NG-${stateCode.toUpperCase()}-${year}-${suffix}`;
}
