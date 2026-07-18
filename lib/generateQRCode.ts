import QRCode from "qrcode";

export async function generateQRCode(code: string) {
  return await QRCode.toDataURL(
    `https://yourdomain.com/track/${code}`
  );
}

// You pass Date.now() as the sequence, which gives a 13-digit number, then .padStart(5, "0") has no effect (it only pads if shorter than 5 chars). Two packages created in the same millisecond get the same tracking number, and since MongoDB has a unique: true index on trackingNumber, the second insert will throw a duplicate key error. Use uuid (you already have it installed) or a counter.