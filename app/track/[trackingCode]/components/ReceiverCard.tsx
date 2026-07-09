type ReceiverCardProps = {
  name: string;
  phone: string;
  address: string;
  lga: string;
  state: string;
};

export default function ReceiverCard({
  name,
  phone,
  address,
  lga,
  state,
}: ReceiverCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-semibold text-slate-900">Receiver details</h3>
      <dl className="mt-4 space-y-3 text-slate-700">
        <div>
          <dt className="text-sm font-medium text-slate-500">Name</dt>
          <dd className="mt-1 text-base">{name}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-slate-500">Phone</dt>
          <dd className="mt-1 text-base">{phone}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-slate-500">Location</dt>
          <dd className="mt-1 text-base">
            {address}, {lga}, {state}
          </dd>
        </div>
      </dl>
    </div>
  );
}
