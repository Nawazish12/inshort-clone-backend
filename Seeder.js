
const News = require('./models/newsModels')

const data = require('./connections/datas')
require("colors")

const sendData = async () => {
    try {
        await News.deleteMany({})
        await News.insertMany(data);
        console.log("data is imported in database".bgWhite.black)
        
    } catch (error) {
    console.log("error",error.message)
        
    }
}

module.exports=sendData