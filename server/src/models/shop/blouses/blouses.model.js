const Blouses = require("./blouses.mongo");

const mongoose = require("mongoose");
const parse = require("csv-parser");
const path = require("path");
const fs = require("fs");

function passOnBlousesWomen() {
  return new Promise((resolve, reject) => {
    const processedData = [];
    fs.createReadStream(
      path.join(__dirname, "..", "..", "..", "..", "data", "blouses.csv")
    )
      .pipe(
        parse({
          separator: ";",
        })
      )
      .on("data", async (data) => {
        try {
          await Blouses.updateOne(
            {
              blouse_name: data.blouse_name,
            },
            {
              blouse_name: data.blouse_name,
              blouse_price: data.blouse_price,
              blouse_color: data.blouse_color,
              blouse_material: data.blouse_material,
              blouse_origin: data.blouse_origin,
              blouse_sex: "women",
              blouse_image1: data.blouse_image1,
              blouse_image2: data.blouse_image2,
              blouse_image3: data.blouse_image3,
              
            },
            {
              upsert: true,
            }
          );
          processedData.push(data);
        } catch (err) {
          console.log(`Error occured while passing on the blouses : ${err}`);
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
async function getBlousesDataWomen() {
  try {
    const blousesData = await Blouses.find();
    return blousesData;
  } catch (error) {
    console.error("Error fetching blouses data:", error);
    return [];
  }
}
module.exports = { passOnBlousesWomen, getBlousesDataWomen };
