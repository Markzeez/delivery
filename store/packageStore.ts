import { create } from "zustand";

interface PackageState {
  packages: any[];

  setPackages: (packages: any[]) => void;
}

export const usePackageStore = create<PackageState>((set) => ({
  packages: [],

  setPackages: (packages) =>
    set({
      packages,
    }),
}));