const mongoose = require('mongoose')



async function searchObjectIdAcrossCollections(objectId) {

    const currentCollections= mongoose.connection.db.listCollections();
    const collectionNames = await currentCollections.toArray();
    let result;
    for (const collectionInfo of collectionNames) {
        const collectionName = collectionInfo.name;
        const dbCollection = mongoose.connection.db.collection(collectionName);
        const document = await dbCollection.findOne({ _id: new mongoose.Types.ObjectId(objectId)})
        if(document) {
            result = {document,collectionName}
        }
    }   
    return result || "No match";
}   


module.exports = searchObjectIdAcrossCollections;
