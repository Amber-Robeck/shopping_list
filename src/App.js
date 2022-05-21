import './App.css'
import AddItem from './components/AddItem/AddItem';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import { useState } from 'react'

function App() {
  const [newItem, setNewItem] = useState('');

  return (
    <div className="App">
      <Header />
      <AddItem newItem={newItem} setNewItem={setNewItem} />
      <ItemList />
    </div>
  );
}

export default App;