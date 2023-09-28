const UseExtractProductDataForArray = (productData, productType) => {
  const extractedProductData = [];

  const type =
    productType !== "trousers"
      ? productType.slice(0, productType.length - 1)
      : "trousers";
  
  const typeFormatted = type.charAt(0).toUpperCase() + type.slice(1);
  productData.map((item) => {
    const extractName = `${type}_name`;
    const extractPrice = `${type}_price`;
    const extractColor = `${type}_color`;
    const extractOrigin = `${type}_origin`;
    const extractStory = `${type}_story`;
    const extractedSex = `${type}_sex`;
    const extractMaterial = `${type}_price`;
    const firstImage = `${type}_image1`;
    const secondImage = `${type}_image2`;
    const thirdImage = `${type}_image3`;

    const {
      [extractName]: product_name,
      [extractPrice]: product_price,
      [extractOrigin]: product_origin,
      [extractColor]: product_color,
      [extractStory]: product_story,
      [extractMaterial]: product_material,
      [extractedSex]: product_sex,
      [firstImage]: product_firstImage,
      [secondImage]: product_secondImage,
      _id: product_id,
      [thirdImage]: product_thirdImage,
    } = item;

    const formattedSex = product_sex
      ? product_sex.charAt(0).toUpperCase() + product_sex.slice(1)
      : "";

    extractedProductData.push({
      product_name,
      product_price,
      product_origin,
      product_color,
      product_id,
      product_story,
      product_material,
      formattedSex,
      product_firstImage,
      product_secondImage,
      product_thirdImage,
      typeFormatted,
    });
    return item;
  });

  return extractedProductData;
};

export const UseExtractProductDataForObject = (productData, productType) => {
  const extractedProductData = [];
 

  const type =
    productType === "trousers"
      ? "trousers"
      : productType === "blice"
      ? "blouse"
      : productType.slice(0, productType.length - 1);



  const typeFormatted = type.charAt(0).toUpperCase() + type.slice(1);

  const extractName = `${type}_name`;
  const extractPrice = `${type}_price`;
  const extractColor = `${type}_color`;
  const extractOrigin = `${type}_origin`;
  const extractStory = `${type}_story`;
  const extractedSex = `${type}_sex`;
  const extractMaterial = `${type}_material`;
  const firstImage = `${type}_image1`;
  const secondImage = `${type}_image2`;
  const thirdImage = `${type}_image3`;
  const {
    [extractName]: product_name,
    [extractPrice]: product_price,
    [extractOrigin]: product_origin,
    [extractColor]: product_color,
    [extractStory]: product_story,
    [extractMaterial]: product_material,
    [extractedSex]: product_sex,
    [firstImage]: product_firstImage,
    [secondImage]: product_secondImage,
    _id: product_id,
    [thirdImage]: product_thirdImage,
  } = productData;
  const product_images = [
    product_firstImage,
    product_secondImage,
    product_thirdImage,
  ];

  const formattedSex = product_sex
    ? product_sex.charAt(0).toUpperCase() + product_sex.slice(1)
    : "Women";
  extractedProductData.push({
    product_name,
    product_price,
    product_origin,
    product_color,
    product_id,
    product_story,
    product_material,
    formattedSex,
    product_images,
    typeFormatted,
  });

  return extractedProductData;
};
export default UseExtractProductDataForArray;
