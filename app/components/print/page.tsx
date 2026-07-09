"use client";

import Image from "next/image";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/app/components/ui/button";

export type PrintSlipProps = {
  trackingCode: string;
  senderName: string;
  senderPhone: string;
  senderAddress: string;
  senderState: string;
  senderLga: string;
  receiverName: string;
  receiverPhone: string;
  receiverAddress: string;
  receiverState: string;
  receiverLga: string;
  description: string;
  weight: number;
  fee: number;
  status?: string;
};

export default function PrintSlip({
  trackingCode,
  senderName,
  senderPhone,
  senderAddress,
  senderState,
  senderLga,
  receiverName,
  receiverPhone,
  receiverAddress,
  receiverState,
  receiverLga,
  description,
  weight,
  fee,
  status,
}: PrintSlipProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Delivery Slip - ${trackingCode}`,
  });

  const trackingUrl = `https://yourdomain.com/track/${encodeURIComponent(trackingCode)}`;
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(trackingUrl)}`;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
            Delivery slip
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">Print package details</h2>
        </div>
        <Button onClick={handlePrint}>Print Slip</Button>
      </div>

      <article
        ref={printRef}
        className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40"
      >
        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-4 text-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src={qrSrc}
                alt="Tracking QR code"
                fill
                sizes="220px"
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-slate-600">Scan to track</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">Tracking code</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{trackingCode}</p>
              {status ? (
                <p className="mt-3 inline-flex rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">
                  {status}
                </p>
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-500">Sender information</p>
                <div className="mt-4 space-y-2 text-slate-700">
                  <p>{senderName}</p>
                  <p>{senderPhone}</p>
                  <p>{senderAddress}</p>
                  <p>
                    {senderLga}, {senderState}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-500">Receiver information</p>
                <div className="mt-4 space-y-2 text-slate-700">
                  <p>{receiverName}</p>
                  <p>{receiverPhone}</p>
                  <p>{receiverAddress}</p>
                  <p>
                    {receiverLga}, {receiverState}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">Package description</p>
            <p className="mt-2 text-base text-slate-900">{description}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">Weight</p>
            <p className="mt-2 text-base text-slate-900">{weight.toFixed(2)} kg</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">Delivery fee</p>
            <p className="mt-2 text-base text-slate-900">₦{fee.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Important information
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Keep this slip with you when collecting or delivering the package. The QR code and tracking code can be used to follow the package status online.
          </p>
        </div>
      </article>
    </div>
  );
}
