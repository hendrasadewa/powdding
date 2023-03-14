import { create } from "zustand";
import { persist } from "zustand/middleware";

const dashboardStores = create(
  persist(
    (set) => ({
      // event
      events: [],
      setEvents: (params : any) => set({ events: params }),
    }),
    {
      name: "dashboard-stores",
    }
  )
);

export default dashboardStores;
