import * as Model from "../models/Product.js";

export const getAllProducts = async (req, res) => {
    const { category } = req.query;

    const products = await Model.getAllProducts();
    
    if (category) {
        const productsFiltered = products.filter((item) =>
            item.categories.includes(category)
        );
        
    return res.json(productsFiltered);
    }
    return res.json(products);
};

export const searchProducts = async (req, res) => {
    const { name } = req.query;

    if(!name) {
        return res.status(400).json({ error: "El nombre es requerido" });
    }

    const products = await Model.getAllProducts();
    
    const productsFiltered = products.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
    );

    if (productsFiltered.length == 0) {
      return res.status(404).json({ error: "No se encontraron productos" });  
    }

    return res.json(productsFiltered);
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log('aqui');
    const product = await Model.getProductById(id);
    
    if (!product) {
        return res.status(404).json({error: "No existe el producto"});
    }

    return res.json(product);
};


export const createProduct = async (req, res) => {
    const { name, price, categories, stock } = req.body;

    const product = await Model.createProduct({ name, price, categories, stock });
    
    res.status(201).json(product);
};

export const deleteProduct =async (req, res) => {
    const { id } = req.params;

    const deleted = await Model.deleteProduct(id);

    if(!deleted) {
        return res.status(404).json
({ error: "Producto No Encontrado"});    }

res.status(204).send();
};