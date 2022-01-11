import { ChangeEvent } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

function ChracterCounter() {
  const [text, setText] = useRecoilState(textState);

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
