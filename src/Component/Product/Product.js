import { Grid } from '@material-ui/core';
import React from 'react';
import SingleProduct from './SingleProduct';
import './Product.css'
import Fade from 'react-reveal/Fade';
import Filter from '../Filter/Filter';
import { connect } from 'react-redux';
const Product = ({products}) => {
    
    
    //all
    
    
    return (
        <>
            <Filter  />
            <Fade up>
                <Grid container spacing={3}>
                {
                    products.map(product =>
                        <Grid key={product._id} item md={4}>
                            <SingleProduct  product={product} />
                        </Grid>
                    )
                }

            </Grid>
            </Fade>
            
        </>
    );
};


const mapStateToProps=state =>{
    return {
        products: state.products
    }
}

const mapDispatchToProps ={
    // addToCART: addToCART
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);