import QRCode from "qrcode";

export async function generateQRCode(code: string) {
  return await QRCode.toDataURL(
    `https://yourdomain.com/track/${code}`
  );
}