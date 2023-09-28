const searchObjectIdAcrossCollections = require('../../models/products/products.model')
async function httpGetProductData(req, res) {
    const productID = req.url.slice(1);

try{
    const ress = await searchObjectIdAcrossCollections(productID)
    if(ress) {
        res.status(200).send(ress);
        return true;
    } else {
        res.status(404).json({message: "Product not found"})
        return null;
    }
} catch(error) {
    console.error(error);
    res.status(500).json({message: "Server problem while searching for product"})
}
    
    
}

module.exports = httpGetProductData;
