import faker from 'faker';

const _getTodoItem = () => {
    return {
        id: faker.datatype.uuid(),
        title: faker.lorem.sentence(5),
        description: faker.lorem.paragraph(2),
    };
};

export const getTodoList = (num: number) => {
    const items = [];

    for (let i = 0; i < num; i++) {
        items.push(_getTodoItem());
    }

    return {
        items,
    };
};
