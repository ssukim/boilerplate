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

    const [formData, setFormData] = useState<TodoHydration>({
        title: '',
        description: '',
    });

    const onClickSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (formData) {
                store.add(formData);
                setFormData({
                    title: '',
                    description: '',
                });
            }
        },
        [formData, store]
    );

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (formData) {
                const { value } = e.target;

                const name = e.target.id;

                setFormData({
                    ...formData,
                    [name]: value,
                });
            } else {
                setFormData({
                    title: '',
                    description: '',
                });
            }
        },
        [formData]
    );

    return (
        <form onSubmit={onClickSubmit}>
            <Wrapper>
                <TopSection>
                    <Input name="title" value={formData.title} onChange={onChange} />

                    <Input name="description" value={formData.description} onChange={onChange} />

                    <Button label={'Add'} type={'submit'} />
                </TopSection>
                <BottomSection>
                    <TitleContainer>
                        <h1>title</h1>
                        <h1>description</h1>
                    </TitleContainer>
                    {todoData &&
                        todoData.map((item, index) => (
                            <Container key={index}>
                                <IndexBox>
                                    <h2>{index + 1}</h2>
                                </IndexBox>
                                <TitleBox>{item.title}</TitleBox>
                                <DescriptionBox>{item.description}</DescriptionBox>
                            </Container>
                        ))}
                </BottomSection>
            </Wrapper>
        </form>
    );
}

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TopSection = styled.div`
    display: flex;

    Input {
        margin-right: 10px;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const BottomSection = styled.div`
    max-width: 800px;
`;

const IndexBox = styled.span`
    width: 5%;
`;

const TitleBox = styled.span`
    width: 40%;
    margin-right: 30px;
`;

const DescriptionBox = styled.span`
    width: 55%;
`;

export default observer(Todo);
