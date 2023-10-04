import { useClick } from './hooks/click';
import { useInput, useValidatedInput } from './hooks/input';
import useTaps from './hooks/taps';
import { useTitle } from './hooks/title';
import { useConfirm } from './hooks/confirm';
import { usePreventLeave } from './hooks/preventLeave';
import { useScroll } from './hooks/scroll';
import { useNotification } from './hooks/notification';

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

  const { scrollY } = useScroll();

  const confirmFn = () => console.log('confirm');
  const cancelFn = () => console.log('cancel');
  const confirmAction = useConfirm('confirm message', confirmFn, cancelFn);

  const name = useInput('Mr. ');

  const maxLen = (value) => value.length <= 10;
  const validatedName = useValidatedInput('', maxLen);

  const { currentItem, setItem } = useTaps(0, content);

  const triggerNotif = useNotification('Hey~~');

  return (
    <div style={{ height: '1000vh' }}>
      <div>
        <button onClick={enablePrevent}>prevent on</button>
        <button onClick={disablePrevent}>prevent off</button>
      </div>

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
      <button onClick={triggerNotif}>Notif</button>
      <h1
        ref={titleRef}
        style={{ position: 'fixed', color: scrollY > 100 ? 'red' : 'black' }}
      >
        Hello Test World!!
      </h1>
    </div>
  );
}

export default App;
