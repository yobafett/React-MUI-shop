import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
        fullWidth
        variant='standard'
        label='search'
        type='search'
        value={value}
        onChange={onChange} 
        sx={{mb: '1.5rem'}}/>;
};

export default Search;