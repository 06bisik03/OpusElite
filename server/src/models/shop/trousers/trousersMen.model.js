const Trousers = require("./trousers.mongo");

const mongoose = require("mongoose");
const parse = require("csv-parser");
const path = require("path");
const fs = require("fs");

function passOnTrousersMen() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "..", "..", "data", "trousers.csv")
    )
      .pipe(
        parse({
          separator: ";",
        })
      )
      .on("data", async (data) => {
        if (data.trousers_sex === "men") {
          try {
            await Trousers.updateOne(
              {
                trousers_name: data.trousers_name,
              },
              {
                trousers_name: data.trousers_name,
                trousers_price: data.trousers_price,
                trousers_color: data.trousers_color,
                trousers_origin: data.trousers_origin,
                trousers_material: data.trousers_material,
                trousers_sex: data.trousers_sex,
                trousers_image1: data.trousers_image1,
                trousers_image2: data.trousers_image2,
                trousers_image3: data.trousers_image3,
              },
              {
                upsert: true,
              }
            );
          } catch (err) {
            console.log(`Error occured while passing on the trousers : ${err}`);
          }
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
async function getTrousersDataMen() {
  try {
    const trousersData = await Trousers.find();
    const menTrousers = trousersData.filter(item => item.trousers_sex === "men")
    return menTrousers;
  } catch (error) {
    console.error("Error fetching trousers data:", error);
    return [];
  }
}
module.exports = { passOnTrousersMen, getTrousersDataMen };
