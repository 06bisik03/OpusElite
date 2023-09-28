const mongoose = require("mongoose");
const parse = require("csv-parser");
const path = require("path");
const fs = require("fs");
const Shirts = require("./shirts.mongo");

function passOnShirtsMen() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "..", "..", "data", "shirts.csv")
    )
      .pipe(
        parse({
          separator: ";",
        })
      )
      .on("data", async (data) => {
        try {
          await Shirts.updateOne(
            {
              shirt_name: data.shirt_name,
            },
            {
              shirt_name: data.shirt_name,
              shirt_price: data.shirt_price,
              shirt_color: data.shirt_color,
              shirt_origin: data.shirt_origin,
              shirt_sex: "men",
              shirt_material: data.shirt_material,
              shirt_image1: data.shirt_image1,
              shirt_image2: data.shirt_image2,
              shirt_image3: data.shirt_image3,
            },
            {
              upsert: true,
            }
          );
        } catch (err) {
          console.log(`Error occured while passing on the shirts : ${err}`);
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
async function getShirtsDataMen() {
  try {
    const shirtsData = await Shirts.find();
    return shirtsData;
  } catch (error) {
    console.error("Error fetching shirts data:", error);
    return [];
  }
}
module.exports = { passOnShirtsMen, getShirtsDataMen };
