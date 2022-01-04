import { action, makeObservable, observable, runInAction } from 'mobx';
import { RootStore } from './RootStore';

export type TodoHydration = {
    title: string;
    description: string;
};

export class TodoStore {
    root: RootStore;
    todo: TodoHydration[] = [];

    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this, {
            add: action,
            hydrate: action,
            todo: observable,
        });
    }

    add(todo: TodoHydration) {
        this.addTodo(todo);
    }

    protected addTodo(todo: TodoHydration) {
        runInAction(() => {
            this.todo.push(todo);
        });
    }

    hydrate(data?: TodoHydration[]) {
        if (data) {
            console.log('🚀 ~ file: TodoStore.ts ~ line 36 ~ TodoStore ~ hydrate ~ data', data);
            this.todo = data;
        }
    }
}
