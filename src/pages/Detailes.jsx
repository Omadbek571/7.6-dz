import React, { useEffect, useState } from 'react';
import MyLayout from '../Layout/MyLayout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../store/cardSlice';


function Detailes() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("");

  const [count, setCount] = useState(1)

  const dispatch = useDispatch()

  useEffect(() => {
    if (id) {
      axios
        .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setProduct(res.data.data);
            if (res.data?.data?.attributes?.colors[0]) {
              setSelectedColor(res.data.data.attributes.colors[0]);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  function handlAddCard() {
    let data = {
      id: product.id,
      count: count,
      color: selectedColor,
      product: product
    }

    dispatch(add(data))
  }

  return (
    <div>
      <MyLayout />
      {product.id && (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2">
              <img
                src={product.attributes.image}
                alt={product.attributes.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.attributes.title}
              </h1>
              <h2 className="text-lg text-gray-600 mb-2">
                Company:{' '}
                <span className="font-medium">{product.attributes.company}</span>
              </h2>
              <h3 className="text-2xl font-semibold text-blue-500 mb-4">
                ${product.attributes.price}
              </h3>
              <p className="text-gray-700 mb-6">{product.attributes.description}</p>
              <div className="flex items-center gap-2 mb-6">
                {product.attributes?.colors?.length &&
                  product.attributes.colors.map((color, index) => {
                    return (
                      <span
                        key={index}
                        className={`cursor-pointer w-6 h-6 inline-block rounded-full border ${selectedColor === color ? "border-black border-2" : "border-gray-300"
                          }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      ></span>
                    );
                  })}
              </div>

              <div>
                <select value={count} onChange={(e) => {setCount(e.target.value)}}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <button onClick={handlAddCard} className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detailes;
