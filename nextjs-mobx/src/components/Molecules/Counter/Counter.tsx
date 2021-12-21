import React, { useEffect } from 'react';
import Button from '../../Atoms/Button';
import { useCounterStore } from '../../../providers/RootStoreProvider';
import { observer } from 'mobx-react-lite';

export default observer(function Counter() {
    const store = useCounterStore();

    useEffect(() => {
        console.log('store.counter: ' + store.counter);
    }, [store.counter]);

    const onClickPlus = () => {
        store.plus();
    };

    return (
        <>
            <div>{`counter: ${store.counter}`}</div>
            <Button label={'+'} onClick={() => onClickPlus()} />
        </>
    );
});
