const parse = require("csv-parser");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const Custom = require("./custom.mongo");
function passOnCustomShoe() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "..", "data", "customshoes.csv")
    )
      .pipe(
        parse({
          separator: ";",
        })
      )
      .on("data", async (data) => {
        try {
          const uniqueID = uuidv4();
          await Custom.updateOne(
            {
              custom_product_colour: data.custom_shoe_colour,
              custom_product_material: data.custom_shoe_material,
            },
            {
              custom_product_id : uniqueID,
              custom_product_type: data.custom_shoe_type + ' Shoe',
              custom_product_colour: data.custom_shoe_colour,
              custom_product_material: data.custom_shoe_material,
              custom_product_image1: data.custom_shoe_image1,
              custom_product_image2: data.custom_shoe_image2,
              custom_product_image3: data.custom_shoe_image3,
              custom_product_image4: data.custom_shoe_image4,
              custom_product_price: data.custom_shoe_price,
            },
            {
              upsert: true,
            }
          );
        } catch (error) {
          console.error(error);
        }
      })
      .on("error", (error) => {
        reject(error);
      })
      .on("end", () => {
        resolve();
      });
  });
}
async function filterShoes(filterParams) {
  try {
    const query = {
      custom_product_price: { $lt: filterParams.custom_product_max_price} 
    };
    const filteredShoes = await Custom.find(query);
    return filteredShoes;
  } catch (error) {
    console.error('Couldn\'t find items matching the criteria.');
  }
}



module.exports = { passOnCustomShoe, filterShoes};