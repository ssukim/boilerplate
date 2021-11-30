import { CounterHydration, CounterStore } from "./CounterStore";

export type RootStoreHydration = {
  hydrationData?: CounterHydration;
};
export class RootStore {
  counterStore: CounterStore;

  constructor() {
    this.counterStore = new CounterStore(this);
  }

  hydrate(data: RootStoreHydration) {
    console.log("🚀 ~ file: RootStore.ts ~ line 14 ~ RootStore ~ hydrate ~ data", data)
    if (data) {
      this.counterStore.hydrate(data as CounterHydration);
    }
  }
}