import QRCode from "qrcode";

export async function generateQRCode(code: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://tylogistics.ng";
  return await QRCode.toDataURL(`${baseUrl}/track/${code}`);
}
