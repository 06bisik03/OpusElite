const mongoose = require('mongoose');
const parse = require('csv-parser')
const path = require('path');
const fs = require('fs');

const Skirts = require('./skirts.mongo');

function passOnSkirtsWomen() {
   return new Promise((resolve,reject) => {
    fs.createReadStream(path.join(__dirname, '..', '..','..','..','data', 'skirts.csv')).pipe(parse({
        separator: ";"
    })).
    on('data', async (data) => {
        try{
            await Skirts.updateOne({
                skirt_name: data.skirt_name
            }, {
                skirt_name: data.skirt_name,
                skirt_price: data.skirt_price,
                skirt_color: data.skirt_color,
                skirt_origin: data.skirt_origin,
                skirt_sex: "women",
                skirt_image1: data.skirt_image1,
                skirt_image2: data.skirt_image2,
                skirt_image3: data.skirt_image3

            }, {
                upsert:true
            })
        } catch(err){
            console.log(`Error occured while passing on the skirts : ${err}`)
        }
}
).on('error', (error) => {
    reject(error)
}).on('end', () => {
    resolve();
})
   })
}
async function getSkirtsDataWomen() {
    try {
      const skirtsData = await Skirts.find();
      return skirtsData;
    } catch (error) {
      console.error('Error fetching skirts data:', error);
      return [];
    }
  }

module.exports = {passOnSkirtsWomen, getSkirtsDataWomen}

