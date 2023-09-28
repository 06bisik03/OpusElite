const parse = require("csv-parser");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const Custom = require("./custom.mongo");
function passOnCustomSuit() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "..", "data", "customsuits.csv")
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
              custom_product_colour: data.custom_suit_colour,
              custom_product_material: data.custom_suit_material,
            },
            {
              custom_product_id: uniqueID,
              custom_product_type: "suit",
              custom_product_colour: data.custom_suit_colour,
              custom_product_material: data.custom_suit_material,
              custom_product_image1: data.custom_suit_image1,
              custom_product_image2: data.custom_suit_image2,
              custom_product_image3: data.custom_suit_image3,
              custom_product_image4: data.custom_suit_image4,
              custom_product_price: data.custom_suit_price,
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

async function filterSuits(filterParams) {
  console.log(filterParams)
  try {

    const query = {
      custom_product_price: { $lt: filterParams.custom_product_max_price} 
    };
    const filteredSuits = await Custom.find(query);
    return filteredSuits;
  } catch (error) {
    console.error('Couldn\'t find items matching the criteria.');
  }
}
async function customSuitRemoval(suitData, userID) {
  try {
    const result = await Custom.deleteOne({ custom_product_colour: suitName });
    
    if (result.deletedCount === 1) {
      console.log(`Custom suit with name "${suitName}" removed successfully.`);
    } else {
      console.log(`No custom suit found with the name "${suitName}".`);
    }
  } catch (error) {
    console.error('Error removing custom suit:', error);
  }
}
module.exports = { passOnCustomSuit,filterSuits};
