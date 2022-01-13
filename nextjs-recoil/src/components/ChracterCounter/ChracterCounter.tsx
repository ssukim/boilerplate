import { ChangeEvent } from 'react';
import { useRecoilValue } from 'recoil';
import { useTextState, charCountState } from '../../atoms/charCounterState';

function ChracterCounter() {
  const [text, setText] = useTextState();

  const count = useRecoilValue(charCountState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      <div>Character Count: {count}</div>
    </div>
  );
}

export default ChracterCounter;
