const fs = require("fs");
const {
  passOnBlousesWomen,
  getBlousesDataWomen,
} = require("./blouses/blouses.model");
const {
  passOnScentsMen,
  getScentsDataMen,
} = require("./scents/scentsMen.model");
const {
  passOnScentsWomen,
  getScentsDataWomen,
} = require("./scents/scentsWomen.model");
const { passOnShirtsMen, getShirtsDataMen } = require("./shirts/shirts.model");
const { passOnShoesMen, getShoesDataMen } = require("./shoes/shoesMen.model");
const {
  passOnShoesWomen,
  getShoesDataWomen,
} = require("./shoes/shoesWomen.model");
const {
  passOnSkirtsWomen,
  getSkirtsDataWomen,
} = require("./skirts/skirts.model");
const { passOnSuitsMen, getSuitsDataMen } = require("./suits/suitsMen.model");
const {
  passOnSuitsWomen,
  getSuitsDataWomen,
} = require("./suits/suitsWomen.model");
const {
  passOnTrousersMen,
  getTrousersDataMen,
} = require("./trousers/trousersMen.model");
const {
  passOnTrousersWomen,
  getTrousersDataWomen,
} = require("./trousers/trousersWomen.model");

async function getSkirtsWomen() {
  await passOnSkirtsWomen();
  const skirts = await getSkirtsDataWomen();
  return skirts;
}

async function getSuitsMen() {
  await passOnSuitsMen();
  const suits = await getSuitsDataMen();
  return suits;
}

async function getSuitsWomen() {
  await passOnSuitsWomen();
  const suits = await getSuitsDataWomen();
  return suits;
}
async function getShirtsMen() {
  await passOnShirtsMen();
  const shirts = await getShirtsDataMen();
  return shirts;
}
async function getBlousesWomen() {
  await passOnBlousesWomen();
  const blouses = await getBlousesDataWomen();
  return blouses;
}
async function getShoesMen() {
  await passOnShoesMen();
  const shoes = await getShoesDataMen();
  return shoes;
}
async function getShoesWomen() {
  await passOnShoesWomen();
  const shoes = await getShoesDataWomen();
  return shoes;
}
async function getScentsMen() {
  await passOnScentsMen();
  const scents = await getScentsDataMen();
  return scents;
}
async function getScentsWomen() {
  await passOnScentsWomen();
  const scents = await getScentsDataWomen();
  return scents;
}
async function getTrousersMen() {
  await passOnTrousersMen();
  const trousers = await getTrousersDataMen();
  return trousers;
}
async function getTrousersWomen() {
  await passOnTrousersWomen();
  const trousers = await getTrousersDataWomen();
  return trousers;
}

module.exports = {
  getSkirtsWomen,
  getTrousersMen,
  getTrousersWomen,
  getSuitsMen,
  getSuitsWomen,
  getScentsMen,
  getScentsWomen,
  getShoesMen,
  getShoesWomen,
  getShirtsMen,
  getBlousesWomen,
};
