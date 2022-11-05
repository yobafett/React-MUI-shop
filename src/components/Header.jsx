import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header(props) {
    const { handleCart, orderLenght } = props;

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography
                    variant='h6'
                    component='span'
                    sx={{ flexGrow: 1 }}>
                    MUI Shop
                </Typography>
                <IconButton
                    color='inherit'
                    onClick={handleCart}
                >
                    <Badge color='secondary' badgeContent={orderLenght}>
                        <ShoppingBasket />
                    </Badge>

                </IconButton>
            </Toolbar>
        </AppBar >
    )
}

export default Header