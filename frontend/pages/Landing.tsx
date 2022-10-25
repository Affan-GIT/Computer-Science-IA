import React from 'react';
import Categories from '../Components/Categories';
import Featured from '../Components/Featured';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Sales from '../Components/Sales';

type Props = {};

const Landing = (props: Props) => {
  return (
    <div>
      <Header />
      <Categories />
      <Featured />
      <Sales />
      <Footer />
    </div>
  );
};

export default Landing;
