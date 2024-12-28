import React, { useState, useEffect } from 'react'
import MyLayout from '../Layout/MyLayout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("https://strapi-store-server.onrender.com/api/products")
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data?.data)
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const navigate = useNavigate()
  function handlRedirect(product) {
    if (product.id) {
      navigate(`/details/${product.id}`)
    }
  }

  return (
    <div>
      <MyLayout />

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 && products.map((product, index) => {
            return (
              <div key={index} onClick={() => handlRedirect(product)} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={product.attributes.image}
                  alt={product.attributes.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{product.attributes.title}</h3>
                <h3 className="text-lg text-gray-600 mt-2">${product.attributes.price}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products
