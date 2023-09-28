const {    getSkirtsWomen,
    getTrousersMen,
    getTrousersWomen,
    getSuitsMen,
    getSuitsWomen,
    getScentsMen,
    getScentsWomen,
    getShoesMen,
    getShoesWomen,
    getShirtsMen,
    getBlousesWomen,} = require('../../models/shop/shop.model');

async function httpGetTrousersMen(req,res) {
    return res.status(200).json(await getTrousersMen());
}
async function httpGetTrousersWomen(req,res) {
    return res.status(200).json(await getTrousersWomen());
}
async function httpGetSkirtsWomen(req,res) {
    return res.status(200).json(await getSkirtsWomen());
}

async function httpGetShoesMen(req,res) {
    return res.status(200).json(await getShoesMen());
}
async function httpGetShoesWomen(req,res) {
    return res.status(200).json(await getShoesWomen());
}

async function httpGetBlousesWomen(req,res) {
    return res.status(200).json(await getBlousesWomen());
}

async function httpGetShirtsMen(req,res) {
    return res.status(200).json(await getShirtsMen());
}


async function httpGetSuitsMen(req,res) {
    return res.status(200).json(await getSuitsMen())
};
async function httpGetSuitsWomen(req,res) {
    return res.status(200).json(await getSuitsWomen())
};
async function httpGetScentsMen(req,res) {
    return res.status(200).json(await getScentsMen());
}
async function httpGetScentsWomen(req,res) {
    return res.status(200).json(await getScentsWomen());
}


module.exports = {
httpGetBlousesWomen,
httpGetScentsMen,
httpGetScentsWomen,
httpGetShirtsMen,
httpGetShoesMen,
httpGetShoesWomen,
httpGetSkirtsWomen,
httpGetSuitsMen,
httpGetSuitsWomen,
httpGetTrousersMen,
httpGetTrousersWomen,
}