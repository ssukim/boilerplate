import { action, makeObservable, observable, runInAction } from 'mobx';
import { RootStore } from './RootStore';

export type TodoHydration = {
    todoData: {
        title: string;
        description: string;
    };
};

export class TodoStore {
    root: RootStore;
    todo: TodoHydration = {
        todoData: {
            title: 'title',
            description: 'description',
        },
    };

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
            this.todo = todo;
        });
    }

    hydrate(data?: TodoHydration) {
        if (data) {
            // this.title = data.title;
        }
    }
}
