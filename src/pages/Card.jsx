// Card.jsx
import React from 'react';
import MyLayout from '../Layout/MyLayout';
import { useSelector, useDispatch } from 'react-redux';
import { remove, update } from '../store/cardSlice';

function Card() {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  const handleUpdateCount = (item, newCount) => {
    dispatch(update({ ...item, count: newCount }));
  };

  return (
    <div>
      <MyLayout />
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cart</h3>
      {card.length === 0 ? (
        <p className="text-gray-600"></p>
      ) : (
        <div className="space-y-4">
          {card.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center">
                <img src={item.product.attributes.image} alt={item.product.attributes.title} className="w-16 h-16 object-cover rounded-lg" />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">{item.product.attributes.title}</h4>
                  <p className="text-gray-600">Color: {item.color}</p>
                  <p className="text-gray-600">Price: ${item.product.attributes.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={item.count}
                  onChange={(e) => handleUpdateCount(item, Number(e.target.value))}
                  className="w-16 p-2 border rounded-md"
                  min="1"
                />
                <button onClick={() => handleRemove(item)} className="text-red-600 hover:text-red-800">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
