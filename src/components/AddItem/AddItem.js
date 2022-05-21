import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './addItem.css';

// TODO: Need to do prop drilling to get original items list to add to local storage
// TODO: Console log is working for value of newItem
const AddItem = ({ newItem, setNewItem }) => {
    // const [newItem, setNewItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newItem);
    }

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem