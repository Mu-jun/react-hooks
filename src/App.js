import useInput from './hooks/input';

function App() {
  const name = useInput('Mr. ');
  return (
    <div>
      <h1>Hello Test World!!</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
