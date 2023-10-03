import { useClick } from './hooks/click';
import { useInput, useValidatedInput } from './hooks/input';
import useTaps from './hooks/taps';
import { useTitle } from './hooks/title';
import { useConfirm } from './hooks/confirm';
import { usePreventLeave } from './hooks/preventLeave';

const content = [
  {
    tap: 'tap menu 1',
    content: 'This is Section 1',
  },
  {
    tap: 'tap menu 2',
    content: 'This is Section 2',
  },
];

function App() {
  const setHtmlTitle = useTitle('Loading...');
  setTimeout(() => {
    setHtmlTitle('home');
  }, 3000);

  const { enablePrevent, disablePrevent } = usePreventLeave();

  const sayHello = () => console.log('hello~');
  const titleRef = useClick(sayHello);

  const confirmFn = () => console.log('confirm');
  const cancelFn = () => console.log('cancel');
  const confirmAction = useConfirm('confirm message', confirmFn, cancelFn);

  const name = useInput('Mr. ');

  const maxLen = (value) => value.length <= 10;
  const validatedName = useValidatedInput('', maxLen);

  const { currentItem, setItem } = useTaps(0, content);

  return (
    <div>
      <div>
        <button onClick={enablePrevent}>prevent on</button>
        <button onClick={disablePrevent}>prevent off</button>
      </div>
      <h1 ref={titleRef}>Hello Test World!!</h1>
      <button onClick={confirmAction}>confirm test</button>
      <br />
      <input placeholder="Name" {...name} />
      <input placeholder="Name limited 10" {...validatedName} />
      <div>
        {content.map((section, index) => (
          <button onClick={() => setItem(index)}>{section.tap}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
}

export default App;
