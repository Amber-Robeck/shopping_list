import './App.css'
import AddItem from './components/AddItem/AddItem';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import { useState } from 'react'
import DummyData from './components/DummyData';

function App() {
  const [items, setItems] = useState(DummyData);
  const [newItem, setNewItem] = useState('');


  const localSave = (data) => {
    setItems(data);
    localStorage.setItem('shoppinglist', JSON.stringify(data));
  };

  const handleCompleted = (id) => {
    const itemsList = items.map((item) => item.id === id ? { ...item, completed: !item.completed } : item);
    console.log("itemsList", itemsList);
    localSave(itemsList);
  };

  const handleDelete = (id) => {
    const itemsList = items.filter((item) => item.id !== id);
    console.log('deletedlist', itemsList);
    localSave(itemsList);
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, completed: false, item };
    const itemsList = [...items, myNewItem];
    localSave(itemsList);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItem);
    addItem(newItem);
  };
  return (
    <div className="App">
      <Header />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <ItemList items={items} handleCompleted={handleCompleted} handleDelete={handleDelete} />
    </div>
  );
}

export default App;