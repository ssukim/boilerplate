import { CounterHydration, CounterStore } from './CounterStore';
import { TodoHydration, TodoStore } from './TodoStore';
export type RootStoreHydration = {
    hydrationData?: CounterHydration;
    todoHydrationData?: TodoHydration[];
};
export class RootStore {
    counterStore: CounterStore;
    todoStore: TodoStore;

    constructor() {
        this.counterStore = new CounterStore(this);
        this.todoStore = new TodoStore(this);
    }

    hydrate(data: RootStoreHydration) {
        if (data) {
            this.todoStore.hydrate(data as TodoHydration[]);
        }
    }
}
