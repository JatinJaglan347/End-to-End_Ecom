import React, { useState, useEffect , createContext } from 'react';
import axios from 'axios';


export const RandomproductsContext = createContext();

const categories = [
  "beauty", "fragrances", "furniture", "groceries", "home-decoration",
  "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "mens-watches",
  "mobile-accessories", "motorcycle", "skin-care", "smartphones", "sports-accessories",
  "sunglasses", "tablets", "tops", "vehicle", "womens-bags", "womens-dresses",
  "womens-jewellery", "womens-shoes", "womens-watches"
];

const RandomproductsContextProvider = ({children}) => {
    const [imageUrl, setImageUrl] = useState('');
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');

    useEffect(() => {
      const interval = setInterval(() => {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        axios.get(`https://dummyjson.com/products/category/${randomCategory}`)
          .then(response => {
            const products = response.data.products;
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            setImageUrl(randomProduct.thumbnail);
            setTitle(randomProduct.title);
            setId(randomProduct.id);
            setDescription(randomProduct.description);
            setCategory(randomProduct.category);
            setPrice(randomProduct.price);
            setDiscountPercentage(randomProduct.discountPercentage);
            setRating(randomProduct.rating);
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      // <div >
      //   {imageUrl ? (
      //     <img src={imageUrl} alt={productName} className=" bg-slate-100 rounded-lg shadow-lg object-cover " />
      //   ) : (
      //     <p>Loading...</p>
      //   )}
      // </div>
      <RandomproductsContext.Provider value={{id, title, description, category, price, discountPercentage, rating ,imageUrl}}>
        {children}
      </RandomproductsContext.Provider>
    );
  };
  
export default RandomproductsContextProvider ;
