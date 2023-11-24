import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

/**
 * 
 * @returns select category
 */
export default function CategoryInput() {
    const [category, setCategory] = React.useState('');
  
    const handleChange = (event) => {
      setCategory(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Product category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="category"
            onChange={handleChange}
          >
            {/* if they came from the database, I would have used a map function to display them */}
            <MenuItem value={"Household"}>Household items</MenuItem>
            <MenuItem value={"Electronics"}>Electronics</MenuItem>
            <MenuItem value={"Stationery"}>Stationery</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }