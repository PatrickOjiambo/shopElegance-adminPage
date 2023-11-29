import {pool} from "../../models/pool.js";
import {deleteProduct} from "../../models/ProductModels/deleteProduct.js";
/**
 * For deleting a product
 * @param {*} req 
 * @param {*} res 
 */
export const deleteProductController = async (req, res) => {
    try{
        const {product_id} = req.params;
        const result = await deleteProduct(product_id);
        res.status(200).json({message: "Product deleted successfully"});
    
    }
    catch(error){
        res.status(500).json({error: "Error deleting product"});
    }
}