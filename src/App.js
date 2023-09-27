import { useInput, useValidatedInput } from './hooks/input';

function App() {
  const name = useInput('Mr. ');

  const maxLen = (value) => value.length <= 10;
  const validatedName = useValidatedInput('', maxLen);

  return (
    <div>
      <h1>Hello Test World!!</h1>
      <input placeholder="Name" {...name} />
      <input placeholder="Name limited 10" {...validatedName} />
    </div>
  );
}

export default App;
