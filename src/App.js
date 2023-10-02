import { useInput, useValidatedInput } from './hooks/input';
import useTaps from './hooks/taps';
import { useTitle } from './hooks/title';

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
  const setTitle = useTitle('Loading...');
  setTimeout(() => {
    setTitle('home');
  }, 3000);

  const name = useInput('Mr. ');

  const maxLen = (value) => value.length <= 10;
  const validatedName = useValidatedInput('', maxLen);

  const { currentItem, setItem } = useTaps(0, content);

  return (
    <div>
      <h1>Hello Test World!!</h1>
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
