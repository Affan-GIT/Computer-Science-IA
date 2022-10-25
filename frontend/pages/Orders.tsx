import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../Components/UserCard';
import Logo from '../Components/Logo';
import Order from '../Components/Order';

type Props = {};

const Orders = (props: Props) => {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/users/getUser', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
        },
      })
      .then((result) => setUser(result.data));
    axios
      .get('http://localhost:5000/api/v1/users/getOrders', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
        },
      })
      .then((result) => setOrders(result.data));
  }, []);
  return (
    <div className='max-w-[90vw] mx-auto flex h-screen flex-col py-5 px-10'>
      <div className='flex items-center w-1/2'>
        <div className='flex-1'>
          <Logo />
        </div>
        <h1 className='text-7xl'>Orders</h1>
      </div>
      <div className='flex h-full items-center'>
        <div className='flex-1 h-full p-10'>
          <div className='w-full h-[80vh] border-2 border-black rounded-[10px] p-10 overflow-y-scroll'>
            {orders
              ? orders.map((order, id) => <Order key={id} order={order} />)
              : ''}
          </div>
        </div>
        {!!user ? (
          <UserCard
            FirstName={user.FirstName}
            LastName={user.LastName}
            Email={user.Email}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Orders;
