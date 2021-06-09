import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCART } from '../../Redux/Action/CartAction';
import ProductModel from './ProductModel';

const SingleProduct = ({ product, addToCART }) => {
    const { image, title, price, _id } = product;
    const [open, setOpen] =useState(false)
    return (
        <Card className="product">
            <CardActionArea>
                <a href={"#" + _id} onClick={() =>setOpen(!open)}>
                    <img src={image} alt={title} />
                </a>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <a href={"#" + _id} onClick={() =>setOpen(!open)}>
                            {title}
                        </a>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container spacing={3}>
                    <Grid item md={5}>
                        <p className="product_price">
                            {`$` + price}
                        </p>
                    </Grid>
                    <Grid item md={7}>
                        <Button onClick={() => addToCART(product)} className="button_style">
                            Add to cart
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
            <ProductModel addToCART={addToCART} product={product}  open={open} setOpen={setOpen}/>
        </Card>
    );
};

const mapStateToProps=state =>{
    return {
        cart:state.cart
    }
}

const mapDispatchToProps ={
    addToCART: addToCART
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleProduct);