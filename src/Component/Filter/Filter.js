import { Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { filterBySize, filterBySort } from '../../Redux/Action/FilterAction';
import './Filter.css'

const Filter = ({ state, filterBySize, filterBySort }) => {
  console.log()
  return (
    <Grid className="product-filter" container spacing={3}>
      <Grid item md={4}>
        <p className="total_products" m={0}>Total Project {state.products.length}</p>
      </Grid>
      <Grid item md={4}>
        Order
          <select value={state.sort} onChange={filterBySort} name="" id="">
          <option value="Latest">Latest</option>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </Grid>
      <Grid item md={4}>
        Size
          <select value={state.size} onChange={filterBySize} name="" id="">
          <option value="">All</option>
          <option value="XXL">XXL</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </Grid>

    </Grid>
  );
};


const mapStateToProps=state =>{
  return {
      state:state
  }
}

const mapDispatchToProps ={
  filterBySort: filterBySort,
  filterBySize:filterBySize
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);

