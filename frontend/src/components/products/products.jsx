import { useState, useId } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { IoCloudUploadSharp } from "react-icons/io5";
import axios from 'axios';
function Products() {
    const categoryInputId = useId();
    const [productDetails, setProductDetails] = useState({
        name: "",
        description: "",
        price: 0,
        stock_quantity: 0,
        category_name: "",
        image: null,
    })
    /**
     * 
     * @param {Object} event 
     */
    const handleChange = (event) => {
        setProductDetails({
            ...productDetails,
            [event.target.name]: event.target.value,
        })
    }
    /**
     * Handle image upload
     * @param {Object} event 
     */
    const handleFileChange = (event) => {
        setProductDetails({ ...productDetails, image: event.target.files[0] });
    }
    /**
     * Handle form submission
     * @param {Object} event 
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Create a FormData object
       
        let formData = new FormData();
        for (let key in productDetails) {
            formData.append(key, productDetails[key]);
        }
        try {
           console.log("response triggered");
            const response = await axios.post('http://localhost:4345/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
            });
            console.log("response triggered")
            console.log(response.data);
        } catch (error) {
            console.log(error)
            console.log("error triggered")
            
        }
    }


    return (<div className='w-1/2 border-[1px] border-sidebar-grey p-4'>


        <p className='text-center'>Create a product</p>
        <section className='mb-2'>

            <FormControl fullWidth>
                <InputLabel id="categoryInputId">Category</InputLabel>
                <Select
                    labelId="categoryInputId"
                    id="categoryInputId"
                    value={productDetails.category_name}
                    label="category"
                    onChange={handleChange}
                    name="category_name"
                >
                    {/* if they came from the database, I would have used a map function to display them */}
                    <MenuItem value={"Household"}>Household items</MenuItem>
                    <MenuItem value={"Electronics"}>Electronics</MenuItem>
                    <MenuItem value={"Stationery"}>Stationery</MenuItem>
                </Select>
            </FormControl>
        </section>
        <section className='flex items-center justify-between'>
            <p>Product name</p>
            <label className='ml-4'>
                <TextField value={productDetails.name} name="name" onChange={handleChange} placeholder='Product name' maxRows={3} minRows={1} multiline={true}
                    autoFocus={true} variant="outlined"
                />
            </label>
        </section>
        <section className='flex items-center justify-between'>
            <p>Description</p>
            <label className='ml-4 mt-2'>
                <TextField value={productDetails.description} name="description" onChange={handleChange} placeholder='Description' maxRows={3} minRows={1} multiline={true}
                    autoFocus={true} variant="outlined"
                />
            </label>
        </section>
        <section className='flex items-center justify-between'>
            <p>Price</p>
            <label className='ml-4 mt-2'>
                <TextField value={productDetails.price} name="price" onChange={handleChange} placeholder='Price' maxRows={3} minRows={1} multiline={true}
                    autoFocus={true} variant="outlined"
                />
            </label>
        </section>
        <section className='flex items-center justify-between'>
            <p>Stock quantity</p>
            <label className='ml-4 mt-2'>
                <TextField value={productDetails.stock_quantity} name="stock_quantity" onChange={handleChange} placeholder='Stock quantity' maxRows={3} minRows={1} multiline={true}
                    autoFocus={true} variant="outlined"
                />
            </label>
        </section>
        <section className='mb-2'>
            <Button
                variant="contained"
                component="label"
                startIcon={<IoCloudUploadSharp />}
            >
                Upload Image
                <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                />
            </Button>

        </section >
        <section className='flex justify-center'>
            <Button
                variant="contained"
                component="label"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </section>

    </div>);
}

export default Products;