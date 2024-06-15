import React, { useState, useEffect } from 'react';
import axios from 'axios';

const categories = [
  "beauty", "fragrances", "furniture", "groceries", "home-decoration",
  "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "mens-watches",
  "mobile-accessories", "motorcycle", "skin-care", "smartphones", "sports-accessories",
  "sunglasses", "tablets", "tops", "vehicle", "womens-bags", "womens-dresses",
  "womens-jewellery", "womens-shoes", "womens-watches"
];

const Randomproducts = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [productName , setProductName] = useState('')

    useEffect(() => {
      const interval = setInterval(() => {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        axios.get(`https://dummyjson.com/products/category/${randomCategory}`)
          .then(response => {
            const products = response.data.products;
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            setImageUrl(randomProduct.thumbnail);
            setProductName(randomProduct.title);
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex justify-center items-center h-screen">
        {imageUrl ? (
          <img src={imageUrl} alt={productName} className=" bg-slate-100 rounded-lg shadow-lg w-[70%] h-[70%] object-cover m-24" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
export default Randomproducts;
