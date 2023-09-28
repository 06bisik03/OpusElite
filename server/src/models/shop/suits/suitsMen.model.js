const mongoose = require('mongoose');
const parse = require('csv-parser')
const path = require('path');
const fs = require('fs');
const Suits = require('./suits.mongo')

function passOnSuitsMen() {
    return new Promise((resolve,reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..','..','..','data', 'suits.csv')).pipe(parse({
            separator: ";"
        })).
        on('data',async (data) => {
            if(data.suit_sex === "men") {
                   try{
                await Suits.updateOne({
                    suit_name: data.suit_name,
                    suit_origin: data.suit_origin
                }, {
                    suit_name: data.suit_name,
                    suit_price: data.suit_price,
                    suit_color: data.suit_color,
                    suit_material: data.suit_material,
                    suit_origin: data.suit_origin,
                    suit_sex: data.suit_sex,
                    suit_image1: data.suit_image1,
                    suit_image2: data.suit_image2,
                    suit_image3: data.suit_image3
                }, {
                    upsert:true
                })
            } catch(err){
                console.log(`Error occured while passing on the suits: ${err}`)
            }
            }
         
    }).on('error', (error) => {
        reject(error);
    }).on('end', () => { 
        resolve();
    })
    })

}
async function getSuitsDataMen() {
    try {
      const suitsData = await Suits.find();
      console.log(suitsData)
      const menSuits = suitsData.filter(item => item.suit_sex === "men")
      return menSuits;
    } catch (error) {
      console.error('Error fetching suits data:', error);
      return [];
    }
  }

module.exports = {passOnSuitsMen, getSuitsDataMen}


