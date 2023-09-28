const Shoes = require('./shoes.mongo');
const mongoose = require('mongoose');
const parse = require('csv-parser')
const path = require('path');
const fs = require('fs');

function passOnShoesWomen() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..','..','..','data', 'shoes.csv')).pipe(parse({
            separator: ';'
        })).
        on('data',async (data) => {
            if(data.shoe_sex === "women") {
                try{
                await Shoes.updateOne({
                    shoe_name: data.shoe_name,

                }, {
                    shoe_name: data.shoe_name,
                    shoe_price: data.shoe_price,
                    shoe_material: data.shoe_material,
                    shoe_color: data.shoe_color,
                    shoe_origin: data.shoe_origin,
                    shoe_image1: data.shoe_image1,
                    shoe_image2: data.shoe_image2,
                    shoe_image3: data.shoe_image3,
                    shoe_sex: data.shoe_sex,
    
                }, {
                    upsert:true
                })
            } catch(err){
                console.log(`Error occured while passing on the shoes: ${err}`)
            } 
            }
           
    }).on('error', (error) => {
        reject(error)
    }).on('end', () => {
        resolve();
    })
    })
 

}
async function getShoesDataWomen() {
    try {
      const shoesData = await Shoes.find();
      const womenShoes = shoesData.filter(item => item.shoe_sex === "women");
      return womenShoes
    } catch (error) {
      console.error('Error fetching shoes data:', error);
      return [];
    }
  }
module.exports = {passOnShoesWomen, getShoesDataWomen}
