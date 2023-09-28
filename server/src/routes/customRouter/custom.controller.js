const {
  passOnCustomSuit,
  filterSuits,
} = require("../../models/custom/custom.model");
const {
  passOnCustomShoe,
  filterShoes,
} = require("../../models/custom/customshoe.modal");

async function passOnCustomSuitsData() {
  const customSuits = await passOnCustomSuit();
  if (customSuits) {
    return customSuits;
  } else {
    return null;
  }
}
async function passOnCustomShoesData() {
  const customShoes = await passOnCustomShoe();
  if (customShoes) {
    return customShoes;
  } else {
    return null;
  }
}
async function filterCustomSuits(newSuitData) {
  const filterParams = {
    custom_product_type: "suit",
    custom_product_colour: newSuitData.custom_suit_colour,
    custom_product_material: newSuitData.custom_suit_material,
    custom_product_max_price: newSuitData.custom_suit_max_price,
  };
  const ress = await filterSuits(filterParams);
  if (ress) {
    return ress;
  } else {
    return null;
  }
}
async function filterCustomShoes(newShoesData) {
  const filterParams = {
    custom_product_type: `${newShoesData.custom_shoe_type} Shoe`,
    custom_product_colour: newShoesData.custom_shoe_colour,
    custom_product_material: newShoesData.custom_shoe_material,
    custom_product_max_price: newShoesData.custom_shoe_max_price,
  };
  const ress = await filterShoes(filterParams);
  if (ress) {
    return ress;
  } else {
    return null;
  }
}
async function removeCustomSuit(suitData, userID) {

}

module.exports = {
  passOnCustomSuitsData,
  passOnCustomShoesData,
  filterCustomSuits,
  filterCustomShoes,
};
