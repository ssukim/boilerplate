import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useTodoStore } from '../../../providers/RootStoreProvider';
import { TodoHydration } from '../../../stores/TodoStore';
import Button from '../../Atoms/Button';
import Input from '../../Atoms/Input';

function Todo() {
    const store = useTodoStore();
    const todoData = toJS(store.todo);

    const [formData, setFormData] = useState<TodoHydration>();

    const onClickSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            if (formData) {
                e.preventDefault();
                store.add(formData);
            }
        },
        [formData, store]
    );

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;

            setFormData({
                title: value,
                description: value,
            });

            console.log(formData);
        },
        [formData]
    );

    return (
        <form onSubmit={onClickSubmit}>
            <TopSection>
                <Input name="title" onChange={onChange} />
                <Button label={'Add'} type={'submit'} />
            </TopSection>
            <div>
                <TitleContainer>
                    <h1>title</h1>
                    <h1>description</h1>
                </TitleContainer>
                {todoData &&
                    todoData.map((item, index) => (
                        <Container key={index}>
                            <IndexBox>
                                <h1>{index + 1}</h1>
                            </IndexBox>
                            <ContentBox>{item.title}</ContentBox>
                            <ContentBox>{item.description}</ContentBox>
                        </Container>
                    ))}
            </div>
        </form>
    );
}

const TopSection = styled.div`
    display: flex;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 50px;
    width: 50%;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const IndexBox = styled.div`
    margin-right: 20px;
`;

const ContentBox = styled.div`
    margin-right: 10px;
`;

export default observer(Todo);
