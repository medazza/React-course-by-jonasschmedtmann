export default function App() {}

function Logo() {
  return <h1>🌴 Far Away Logo 👜</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>what do you need for your 😍 trip?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">List</div>;
}

function Stats() {
  return (
    <footer>
      <em>👜you have x items on your list, and you have packed x (x%)</em>
    </footer>
  );
}
