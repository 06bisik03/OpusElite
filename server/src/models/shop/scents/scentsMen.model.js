const Scents = require("./scents.mongo");

const mongoose = require("mongoose");
const parse = require("csv-parser");
const path = require("path");
const fs = require("fs");

function passOnScentsMen() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "..", "..", "data", "scents.csv")
    )
      .pipe(
        parse({
          separator: ";",
        })
      )
      .on("data", async (data) => {
        if(data.scent_sex === "men") {
           try {
          await Scents.updateOne(
            {
              scent_name: data.scent_name,
            },
            {
              scent_name: data.scent_name,
              scent_price: data.scent_price,
              scent_story: data.scent_story,
              scent_familia: data.scent_familia,
              scent_image1: data.scent_image1,
              scent_sex: data.scent_sex,
            },
            {
              upsert: true,
            }
          );
        } catch (err) {
          console.log(`Error occured while passing on the scents: ${err}`);
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
async function getScentsDataMen() {
  try {
    const scentsData = await Scents.find();
    const menScents = scentsData.filter(item => item.scent_sex ==="men");
    return menScents;
  } catch (error) {
    console.error("Error fetching scents data:", error);
    return [];
  }
}
module.exports = { passOnScentsMen, getScentsDataMen };
