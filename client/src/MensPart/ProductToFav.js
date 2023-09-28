import Product from "./Product";
const ProductToFav = ({ extractedProductData, favs}) => {
    if(Array.isArray(favs)) {
         return (
           
                extractedProductData.map(product => {
            let favItem;
            if (favs.find((item) => item.product_id === product.product_id)) {
                favItem = true;
              } else {
                favItem = false;
              }
              return (
                <Product
                  favItem={favItem}
                  item={product}
                  productType={product.productType}
                />
              );
        })
          
         )
    } else {
        extractedProductData.map(product => {
            return <Product favItem={false} item={product} productType={product.productType}/>
        })

    }
   
}
export default ProductToFav;