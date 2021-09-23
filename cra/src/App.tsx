import "./App.css";
import Item from "./components/Item";
import React, { useState } from 'react';

// 다수의 컴포넌트 렌더링

const items = [
  {
    id: 1,
    name: "notebook",
    checked: true
  },
  {
    id: 2,
    name: "smartphone",
    checked: false
  },
  {
    id: 3,
    name: "table",
    checked: true
  },
  {
    id: 4,
    name: "pc",
    checked: false
  }
]

const renderItem = (item: any) => <Item key={item.id} item={item.name} checked={item.checked} />

function App() {
  const [stateItems, setItems] = useState(items);
  setTimeout(() => {
    items.push({ id: 6, name: 'babo', checked: false });
    console.log(items);
  }, 1000)

  console.log(stateItems == items);
  return (
    <div className="App">
      {stateItems.map(renderItem
      )}

    </div>
  );
}

export default App;
