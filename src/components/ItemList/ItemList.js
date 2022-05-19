import { useState } from 'react';
import DummyData from '../DummyData';
import { FaTrashAlt } from 'react-icons/fa';
import './itemList.css'

// const DummyData = [
//     {
//         id: 1,
//         completed: false,
//         name: "Eggs"
//     },
//     {
//         id: 2,
//         completed: false,
//         name: "Milk"
//     },
//     {
//         id: 3,
//         completed: true,
//         name: "Bread"
//     }
// ];


const ItemList = () => {
    const [items, setItems] = useState(DummyData);
    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        // List element for each shopping list item.
                        <li className="item" key={item.id}>
                            <input type="checkbox" />
                            <label>{item.name}</label>
                            <FaTrashAlt role="button" />
                        </li>
                    ))}
                </ul>
            ) : (
                // Conditional for if the shopping list is empty.
                <p style={{ marginTop: '2rem' }}>Shopping list is empty.</p>
            )}
        </main>
    )
}

export default ItemList