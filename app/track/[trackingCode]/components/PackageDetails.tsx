type PackageDetailsProps = {
  description: string | null;
  weight: number;
  deliveryFee: number;
};

export default function PackageDetails({
  description,
  weight,
  deliveryFee,
}: PackageDetailsProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-semibold text-slate-900">Package details</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-sm font-medium text-slate-500">Description</p>
          <p className="mt-2 text-base text-slate-900">
            {description ?? "—"}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Weight</p>
          <p className="mt-2 text-base text-slate-900">
            {weight.toFixed(2)} kg
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Delivery fee</p>
          <p className="mt-2 text-base text-slate-900">
            ₦{deliveryFee.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
}
