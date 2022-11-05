import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const BasketItem = (props) => {
    const { removeFromOrder, id, name, price, quantity } = props;

    return (
        <ListItem className='list-group-item'>
            <Typography variant="body1">
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                className='btn btn-primary'
                onClick={() => removeFromOrder(id)}>
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;