export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start to adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentPacked === 100 ? (
        <h3>You're packing all the items! Ready to go ✈️</h3>
      ) : (
        <em>
          👜you have {numItems} items on your list, and you have packed{" "}
          {numPacked} ({percentPacked}%)
        </em>
      )}
    </footer>
  );
}
