import { Box, Button, Grid, Modal } from '@material-ui/core';
import React from 'react';

const ProductModel = ({ open, setOpen, addToCART, product }) => {
    const { image, title, availableSizes, description, price, } = product;
    const buttonClickHandeler = () => {
        addToCART(product)
        setOpen(!open)
    }
    return (

        <Modal className="model"
            open={open}
            onClose={() => setOpen(!open)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className="model_div">
                <button onClick={() =>setOpen(!open)} className="model_close_btn">X</button>
                <Box m={3}>
                    <Grid container spacing={3}>
                        <Grid item md={5}>
                            <img className="product_model_image" src={image} alt="" />
                        </Grid>
                        <Grid item md={7}>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <div className="mb-5">
                                <h4 className="product-size-title">Size :</h4>
                                <ul className="product-size  " >

                                    {
                                        availableSizes.map((as, index) => <li key={index}>{as}</li>)
                                    }
                                </ul>
                            </div>
                            <Grid container spacing={3}>
                                <Grid item md={5}>
                                    <p className="product_price">
                                        {`$` + price}
                                    </p>
                                </Grid>
                                <Grid item md={7}>
                                    <span></span>
                                    <Button onClick={buttonClickHandeler} className="button_style">
                                        Add to cart
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Modal>


    );
};

export default ProductModel;