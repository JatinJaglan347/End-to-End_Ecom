import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 1,
        name: 'Sports & Vehicles',
        subcategories: [
          { id: 101, name: 'Sports accessories', categoryname: 'sports-accessories', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8UzDTHRSYwKJdhpYcIrkDi6WB5tVZRBhFQ&s' },
          { id: 102, name: 'Motorcycle', categoryname: 'motorcycle', image: 'https://img.freepik.com/premium-photo/ducati-panigale-v4-superleggera-nocompromise-superbike-wi-motorbike-white-background-clean_655090-680287.jpg' },
          { id: 103, name: 'Vehicle', categoryname: 'vehicle', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0NLKfcY_9Lbm09zg92-bOY2pBY-jr1VJ8Q&s' },
        ]
    },
    {
        id: 2,
        name: 'Electronics',
        subcategories: [
          { id: 201, name: 'Laptops', categoryname: 'laptops', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwfpGfS0knB3d9BikykO7ucGbFFZkQ1GG8g&s' },
          { id: 202, name: 'Mobile Accessories', categoryname: 'mobile-accessories', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwOp9MAkudILqV2AxwGcwSXkYNC5NUN-Uxg&s' },
          { id: 203, name: 'Smartphones', categoryname: 'smartphones', image: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/08/Best-smartphone-2.jpg' },
          { id: 204, name: 'Tablets', categoryname: 'tablets', image: 'https://m.media-amazon.com/images/I/41ADE8dExML._SL500_.jpg' },
        ]
    },
    {
        id: 3,
        name: 'Home & Kitchen',
        subcategories: [
          { id: 301, name: 'Furniture', categoryname: 'furniture', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SPxNbFDLHu-VZL_K-7dAoc3aoJOUcHTBRQ&s' },
          { id: 302, name: 'Home Decoration', categoryname: 'home-decoration', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugKLn1zaeIyeyinOIaKSimkKg-X3dNOxvbQ&s' },
          { id: 303, name: 'Kitchen Accessories', categoryname: 'kitchen-accessories', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5d8G74WvFwikHUwlbsnGpwcjhzdUMY0nFg&s' },
          { id: 304, name: 'Groceries', categoryname: 'groceries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QfRpKFxCqVDCJST6y61nXPj-f8SwSyiFSA&s' },
        ]
    },
  {
    id: 4,
    name: 'Personal Care',
    subcategories: [
      { id: 401, name: 'Beauty', categoryname: 'beauty', image: 'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-products-photography1.jpg' },
      { id: 402, name: 'Fragrances', categoryname: 'fragrances', image: 'https://media.allure.com/photos/635ab64ef19df33cb4d97cc9/1:1/w_1124,h_1124,c_limit/FRAGRANCE_16x9.png' },
      { id: 403, name: 'Skin Care', categoryname: 'skin-care', image: 'https://cdn.shopify.com/s/files/1/0270/9313/9535/files/aesthetic_self_care_x_480x480.jpg?v=1673604853' },
      { id: 404, name: 'Sunglasses', categoryname: 'sunglasses', image: 'https://i.pinimg.com/564x/fa/0f/29/fa0f29e18b00b3206046237cefdc84a0.jpg' },
    ]
  },
  
  {
    id: 5,
    name: 'Lifestyle Accessories',
    subcategories: [
      { id: 501, name: 'Womens Jewellery', categoryname: 'womens-jewellery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADUb6VJiXqdBYKe0_6akyQzNbt_a1YNIprA&s' },
      { id: 502, name: 'Womens Watches', categoryname: 'womens-watches', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStX9rU6gycqUj_yZfOExQlSRIS4dQJhSS0JA&s' },
      { id: 503, name: 'Mens Watches', categoryname: 'mens-watches', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbDjOff7yAVnLL3fVg4GHWBpz3YAZlAYlPg&s' },
      { id: 504, name: 'Womens Bags', categoryname: 'womens-bags', image: 'https://www.globalbrandsmagazine.com/wp-content/uploads/2023/02/Bag.jpg' },
    ]
  },
  {
    id: 6,
    name: 'Fashion',
    subcategories: [
      { id: 601, name: 'Mens Shirts', categoryname: 'mens-shirts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKBbtlxLY4pq55Q2rZ-4UziJPA0hmPNhKY5MzhBKI1mBg-j5pvn8Qk9RjPER9RPxedUc&usqp=CAU' },
      { id: 602, name: 'Womens Dresses', categoryname: 'womens-dresses', image: 'https://5.imimg.com/data5/PT/JD/MY-5727497/stylish-ladies-dresses-500x500.jpg' },
      { id: 603, name: 'Tops', categoryname: 'tops', image: 'https://i.pinimg.com/564x/ac/54/07/ac54071e43765db654b916132d2333ff.jpg' },
      { id: 604, name: 'Womens Shoes', categoryname: 'womens-shoes', image: 'https://abrosshoes.com/cdn/shop/products/E-11.jpg?v=1677567749&width=1500' },
      { id: 605, name: 'Mens Shoes', categoryname: 'mens-shoes', image: 'https://tiimg.tistatic.com/fp/1/007/747/casual-wear-mens-shoes-with-lace-closure-all-size-available--320.jpg' },
    ]
  },
];


function Landingpage() {
    const filteredCategories1 = categories.filter(category => category.id === 1);
    const filteredCategories = categories.filter(category => category.id !== 1 && category.id !== 6);
    const filteredCategories6 = categories.filter(category => category.id === 6);
  return (
    <>
        <div>
            <div className=' flex flex-col justify-center items-center text-center m-auto w-[80%] '>
                <div className=' grid xl:grid-cols-4  w-[100%]'>
                    <div className=' m-2 xl:col-span-3 md:'>
                        <div className='rounded-2xl p-5    w-full h-full bg-black'></div>
                    </div>


                    <div className='' >
                        {filteredCategories1.map(category => (
                            <div className=' rounded-2xl p-5 m-2 bg-slate-100' key={category.id}>
                            <h2 className=' text-2xl pb-5 pl-3 font-bold'>{category.name}</h2>
                            <div className=' grid grid-rows-1 md:grid-cols-3 md:gap-5 xl:gap-0 xl:grid-cols-1'>
                            
                                {category.subcategories.map(subcategory => (
                                
                                <div className='col-span-1 flex flex-col justify-center items-center' key={subcategory.id} >  
                                    <Link to={`${subcategory.categoryname}`}>
                                        <img className='w-[300px] h-[250px]object-cover rounded-2xl ' src={subcategory.image} alt={subcategory.name} /> 
                                        <h3 className=' pt-2 text-lg pb-6 font-semibold' >{subcategory.name}</h3>  
                                    </Link>
                                </div>
                                
                                ))}
                            
                            </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=' grid lg:grid-cols-4 grid-rows-2 w-[100%] '>
                    {filteredCategories.map(category => (
                        <div className='  rounded-2xl p-5 m-2 col-span-2 bg-slate-100' key={category.id}>
                        <h2 className=' text-2xl pb-5 text-left pl-3 font-bold'>{category.name}</h2>
                        <div className=' grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5'>
                            {category.subcategories.map(subcategory => (
                            <div className='  col-span-1 flex flex-col justify-center items-center' key={subcategory.id} >
                                <Link to={`${subcategory.categoryname}`}>
                                    <img className=' w-[300px] h-[250px] object-cover rounded-2xl ' src={subcategory.image} alt={subcategory.name}  />
                                    <h3 className=' pt-4 text-lg font-semibold'>{subcategory.name}</h3>
                                </Link>
                            </div>
                            ))}
                        </div>
                        </div>
                    ))}
                </div>

                <div  className=' grid lg:grid-cols-4  w-[100%] '>
                {filteredCategories6.map(category => (
                    <div className=' rounded-2xl p-5 m-2 col-span-4 bg-slate-100' key={category.id}>
                    <h2 className=' text-2xl pb-5 pl-3 font-bold'>{category.name}</h2>
                    <div className=' grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
                        {category.subcategories.map(subcategory => (
                        <div className=' col-span-1 flex flex-col justify-center items-center' key={subcategory.id} > 
                            <Link to={`${subcategory.categoryname}`}>
                                <img className='  w-[300px] h-[250px] object-cover rounded-2xl ' src={subcategory.image} alt={subcategory.name} />
                                <h3 className=' pt-4 text-lg font-semibold'>{subcategory.name}</h3>
                            </Link>
                        </div>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
  
            </div>
        </div>
    </>
  );
}

export default Landingpage;
