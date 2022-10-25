import { useRouter } from 'next/router';
import DisplayItem from '../../Components/DisplayItem';
import Header from '../../Components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Category = () => {
  const [product, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    setCategory(window.location.pathname.split('/')[2].replace('%20', ' '));
    axios
      .get(`http://localhost:5000/api/v1/items/${category}/items`)
      .then((result) => setProducts(result.data));
  }, [category]);

  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <div className='my-10'>
        <h1 className='text-5xl text-center'>{category}</h1>
      </div>
      <div className='w-full px-5 grid grid-cols-3 justify-items-center'>
        {product.map((product, key) => (
          <DisplayItem key={key} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
