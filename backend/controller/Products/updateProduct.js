import { pool } from "../../models/pool.js";
import { updateProduct } from "../../models/ProductModels/updateProduct.js";
const poolPromise = pool.promise();
export const updateProductController = async (req, res) => {

    try{
        const { name, description, price, stock_quantity, category_name } = req.body;
        const { product_id } = req.params;
        const categoryIdResult = await poolPromise.query(
            "SELECT category_id FROM Categories WHERE name = ?",
            [category_name]
        );
        if (categoryIdResult[0].length < 1) {
            return res.status(404).json({ error: `${category_name} does not exist` });
        } else {
            let category_id = req.params;
            category_id = category_id[0].category_id;
            const image_url = await handleImageUpload(req, res);
            const imageFile = req.file;
            const productResult = await updateProduct(
                name,
                description,
                parseFloat(price),
                stock_quantity,
                category_id,
                product_id,
                image_url
            );
            res.status(200).json({ message: "Product updated successfully" });
        }
    }
    catch(error){
        res.status(500).json({ error: "Error updating product" });
    }
}