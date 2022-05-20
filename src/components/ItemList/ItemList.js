import { useState } from 'react';
import DummyData from '../DummyData';
import { FaTrashAlt } from 'react-icons/fa';
import './itemList.css'

// TODO: ADD ITEMS TO LIST
// TODO: DELETE ITEMS FROM LIST
// TODO: Get items from local storage, right now on refresh using dummb data for state but state 'items' is still currently as user left them
// TODO: Maybe connect to database for longterm storage

const ItemList = () => {
    const [items, setItems] = useState(DummyData);

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

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        // List element for each shopping list item.
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCompleted(item.id)}
                                checked={item.completed} />
                            <label>{item.name}</label>
                            <FaTrashAlt
                                role="button"
                                onClick={() => handleDelete(item.id)}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                // Conditional for if the shopping list is empty.
                <p style={{ marginTop: '1.5rem' }}>Shopping list is empty.</p>
            )}
        </main>
    )
}

export default ItemList