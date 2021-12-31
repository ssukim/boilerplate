import { observer } from 'mobx-react-lite';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useTodoStore } from '../../../providers/RootStoreProvider';
import { TodoHydration } from '../../../stores/TodoStore';
import Button from '../../Atoms/Button';
import Input from '../../Atoms/Input';

function Todo() {
    const store = useTodoStore();
    const [formData, setFormData] = useState<TodoHydration>({
        todoData: {
            title: '',
            description: '',
        },
    });

    console.log(store.todo);

    const onClickSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            store.add(formData);
            console.log('🚀 ~ file: Todo.tsx ~ line 22 ~ onClickSubmit ~ formData', formData);
        },
        [formData, store]
    );

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            const data = { ...formData };
            data.todoData.title = value;

            setFormData(data);
        },
        [formData]
    );

    return (
        <form onSubmit={onClickSubmit}>
            <Wrapper>
                <Input name="title" onChange={onChange} />
                <Button label={'Add'} type={'submit'} />
            </Wrapper>
            <div>
                <div>{store.todo.todoData.title}</div>
            </div>
        </form>
    );
}

const Wrapper = styled.div`
    display: flex;
`;

export default observer(Todo);
