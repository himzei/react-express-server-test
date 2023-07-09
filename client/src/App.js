// import { useEffect, useState } from "react";
function App() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("/api/items")
  //     .then((res) => res.json())
  //     .then((data) => setItems(data));
  // });
  return (
    <div className="flex flex-col w-full py-32 items-center space-y-16">
      <h1>리액트 + express test</h1>
      {/* <div className="flex flex-col space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col">
            <h3>{item.name}</h3>
            <p>Pirce: {item.price}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
