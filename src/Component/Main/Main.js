import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Product from '../Product/Product';

import { Products } from '../../data';
import Cart from '../Cart/Cart';
import { Box } from '@material-ui/core';


export default function Main() {
  const [data, setData] = useState({
    products: Products,
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    size: '',
    sort: '',
  })
  
   
  return (
    <Box m={3}>
      <Grid container spacing={3}>
        <Grid item md={9}>

          <Product data={data} setData={setData} />
        </Grid>
        <Grid item md={3}>
          <Cart setData={setData} data={data} />
        </Grid>
      </Grid>
    </Box>

  );
}
