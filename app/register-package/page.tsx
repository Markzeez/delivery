"use client";

import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";

type RegisterFormData = {
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
};

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
  "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT",
];

const lgas: Record<string, string[]> = {
  "Lagos": ["Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Lagos Island", "Lekki", "Mushin", "Surulere"],
  "Abuja": ["Abuja Municipal", "Bwari", "Gwagwalada", "Kuje", "Kwali"],
  // Add more LGAs as needed - this is a simplified version
};

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [senderState, setSenderState] = useState("");
  const [receiverState, setReceiverState] = useState("");
  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<RegisterFormData>({
    defaultValues: {
      weight: 1,
      fee: 0,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/packages", data);
      
      toast.success(`Package registered! Code: ${response.data.trackingCode}`);
      reset();
      setSenderState("");
      setReceiverState("");
    } catch (error) {
      toast.error("Failed to register package. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const weight = watch("weight");

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/30">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
              Register delivery
            </p>
            <h1 className="text-3xl font-semibold text-slate-900">New package</h1>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">
              Fill in the details for the sender, receiver, and package. You will receive a tracking code upon submission.
            </p>
          </div>
        </section>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/30">
            <h2 className="mb-6 text-xl font-semibold text-slate-900">Sender information</h2>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full name *</label>
                  <Input
                    {...register("senderName", { required: "Sender name is required" })}
                    placeholder="Enter sender's full name"
                    disabled={isLoading}
                  />
                  {errors.senderName && <p className="mt-1 text-xs text-destructive">{errors.senderName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                  <Input
                    {...register("senderPhone", { required: "Sender phone is required" })}
                    placeholder="+234 800 000 0000"
                    disabled={isLoading}
                  />
                  {errors.senderPhone && <p className="mt-1 text-xs text-destructive">{errors.senderPhone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Address *</label>
                <Input
                  {...register("senderAddress", { required: "Sender address is required" })}
                  placeholder="Enter detailed address"
                  disabled={isLoading}
                />
                {errors.senderAddress && <p className="mt-1 text-xs text-destructive">{errors.senderAddress.message}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">State *</label>
                  <Select value={senderState} onValueChange={(value) => {
                    if (value !== null) {
                      setSenderState(value);
                      setValue("senderState", value);
                    }
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {nigerianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" {...register("senderState", { required: "State is required" })} />
                  {errors.senderState && <p className="mt-1 text-xs text-destructive">{errors.senderState.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">LGA *</label>
                  <Input
                    {...register("senderLga", { required: "Sender LGA is required" })}
                    placeholder="Enter Local Government Area"
                    disabled={isLoading}
                  />
                  {errors.senderLga && <p className="mt-1 text-xs text-destructive">{errors.senderLga.message}</p>}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/30">
            <h2 className="mb-6 text-xl font-semibold text-slate-900">Receiver information</h2>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full name *</label>
                  <Input
                    {...register("receiverName", { required: "Receiver name is required" })}
                    placeholder="Enter receiver's full name"
                    disabled={isLoading}
                  />
                  {errors.receiverName && <p className="mt-1 text-xs text-destructive">{errors.receiverName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                  <Input
                    {...register("receiverPhone", { required: "Receiver phone is required" })}
                    placeholder="+234 800 000 0000"
                    disabled={isLoading}
                  />
                  {errors.receiverPhone && <p className="mt-1 text-xs text-destructive">{errors.receiverPhone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Address *</label>
                <Input
                  {...register("receiverAddress", { required: "Receiver address is required" })}
                  placeholder="Enter detailed address"
                  disabled={isLoading}
                />
                {errors.receiverAddress && <p className="mt-1 text-xs text-destructive">{errors.receiverAddress.message}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">State *</label>
                  <Select value={receiverState} onValueChange={(value) => {
                    if (value !== null) {
                      setReceiverState(value);
                      setValue("receiverState", value);
                    }
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {nigerianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" {...register("receiverState", { required: "State is required" })} />
                  {errors.receiverState && <p className="mt-1 text-xs text-destructive">{errors.receiverState.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">LGA *</label>
                  <Input
                    {...register("receiverLga", { required: "Receiver LGA is required" })}
                    placeholder="Enter Local Government Area"
                    disabled={isLoading}
                  />
                  {errors.receiverLga && <p className="mt-1 text-xs text-destructive">{errors.receiverLga.message}</p>}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/30">
            <h2 className="mb-6 text-xl font-semibold text-slate-900">Package details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description *</label>
                <Textarea
                  {...register("description", { required: "Package description is required" })}
                  placeholder="Describe the contents of the package (e.g., books, clothing, electronics)"
                  disabled={isLoading}
                />
                {errors.description && <p className="mt-1 text-xs text-destructive">{errors.description.message}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Weight (kg) *</label>
                  <Input
                    type="number"
                    step="0.1"
                    min="0"
                    {...register("weight", {
                      required: "Weight is required",
                      valueAsNumber: true,
                      min: { value: 0.1, message: "Weight must be at least 0.1 kg" },
                    })}
                    placeholder="0.0"
                    disabled={isLoading}
                  />
                  {errors.weight && <p className="mt-1 text-xs text-destructive">{errors.weight.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Delivery fee (₦) *</label>
                  <Input
                    type="number"
                    step="100"
                    min="0"
                    {...register("fee", {
                      required: "Delivery fee is required",
                      valueAsNumber: true,
                      min: { value: 0, message: "Fee cannot be negative" },
                    })}
                    placeholder="0"
                    disabled={isLoading}
                  />
                  {errors.fee && <p className="mt-1 text-xs text-destructive">{errors.fee.message}</p>}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">Package weight:</span> {weight?.toFixed(1) || "0.0"} kg
                </p>
              </div>
            </div>
          </section>

          <section className="flex gap-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? "Registering..." : "Register package"}
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={isLoading}
              onClick={() => {
                reset();
                setSenderState("");
                setReceiverState("");
              }}
            >
              Clear
            </Button>
          </section>
        </form>
      </div>
    </main>
  );
}
