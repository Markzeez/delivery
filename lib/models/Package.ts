import mongoose, { Schema, Document, Model } from "mongoose";

export type PackageStatus =
  | "PENDING"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "DELIVERED"
  | "CANCELLED";

export interface ITrackingUpdate {
  _id?: mongoose.Types.ObjectId;
  status: string;
  note?: string;
  state?: string;
  lga?: string;
  createdAt: Date;
}

export interface IPackage extends Document {
  _id: mongoose.Types.ObjectId;
  trackingNumber: string;
  itemName: string;
  description?: string;
  weight: number;
  deliveryFee: number;
  status: PackageStatus;

  // Sender
  senderName: string;
  senderPhone: string;
  senderAddress: string;
  senderLga: string;
  senderState: string;

  // Receiver
  receiverName: string;
  receiverPhone: string;
  receiverAddress: string;
  receiverLga: string;
  receiverState: string;

  // Current location
  currentLga?: string;
  currentState?: string;

  // References (stored as string IDs for flexibility)
  senderId?: string;
  receiverId?: string;

  // Rider assigned
  riderId?: string;

  // Payment
  paymentStatus: "PENDING" | "PAID";

  updates: ITrackingUpdate[];

  createdAt: Date;
  updatedAt: Date;
}

const TrackingUpdateSchema = new Schema<ITrackingUpdate>(
  {
    status: { type: String, required: true },
    note: { type: String },
    state: { type: String },
    lga: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const PackageSchema = new Schema<IPackage>(
  {
    trackingNumber: { type: String, required: true, unique: true, index: true },
    itemName: { type: String, required: true },
    description: { type: String },
    weight: { type: Number, required: true, min: 0 },
    deliveryFee: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["PENDING", "PICKED_UP", "IN_TRANSIT", "DELIVERED", "CANCELLED"],
      default: "PENDING",
    },

    // Sender
    senderName: { type: String, required: true },
    senderPhone: { type: String, required: true },
    senderAddress: { type: String, required: true },
    senderLga: { type: String, required: true },
    senderState: { type: String, required: true },

    // Receiver
    receiverName: { type: String, required: true },
    receiverPhone: { type: String, required: true },
    receiverAddress: { type: String, required: true },
    receiverLga: { type: String, required: true },
    receiverState: { type: String, required: true },

    // Location
    currentLga: { type: String },
    currentState: { type: String },

    // References
    senderId: { type: String },
    receiverId: { type: String },
    riderId: { type: String },

    // Payment
    paymentStatus: {
      type: String,
      enum: ["PENDING", "PAID"],
      default: "PENDING",
    },

    updates: { type: [TrackingUpdateSchema], default: [] },
  },
  { timestamps: true }
);

const Package: Model<IPackage> =
  mongoose.models.Package ?? mongoose.model<IPackage>("Package", PackageSchema);

export default Package;
