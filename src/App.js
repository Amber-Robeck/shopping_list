import './App.css'
import AddItem from './components/AddItem/AddItem';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';


function App() {

  return (
    <div className="App">
      <Header />
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;