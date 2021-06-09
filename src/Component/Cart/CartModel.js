import { Box, Grid, Modal, Table } from '@material-ui/core';
import React from 'react';

const CartModel = ({ open, setOpen, userData, cartItems }) => {
    console.log(userData, cartItems);
    return (

        <Modal className="model cart-model"
            open={open}
            onClose={() => setOpen(!open)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div align="center" className="model_div cart_model_div">
                <button onClick={() => setOpen(!open)} className="model_close_btn">X</button>
                <Box m={3}>
                    <Grid container spacing={3}>
                        <Grid item md={3}></Grid>
                        <Grid item md={6}>
                            <div className="cartModelBox">
                                <h2 className="OrderMessage">Your order has been placed.</h2>
                                <h2 className="orderNo">Order number 14562</h2>
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Name :</td>
                                            <td>{userData.Name}</td>
                                        </tr>
                                        <tr>
                                            <td>Email : </td>
                                            <td>{userData.Email}</td>
                                        </tr>
                                        <tr>
                                            <td>Address :</td>
                                            <td>{userData.Address}</td>
                                        </tr>
                                        <tr>
                                            <td>Total Amount :</td>
                                            <td>${(cartItems.reduce((a, c) => a + c.price * c.count, 0)).toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>Ordered Items :</td>
                                            <td>
                                                {
                                                    cartItems.map(ci => <li key={ci._id}>{ci.count} X {ci.title}</li>)
                                                }
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                                
                            </div>

                        </Grid>
                        <Grid item md={3}></Grid>
                    </Grid>
                </Box>
            </div>

        </Modal>

    );
};

export default CartModel;