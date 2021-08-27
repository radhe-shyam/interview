const axios = require('axios');
const config = require('config');
const { comments } = require('./../connector/db');

const clearPreviousData = async () => {
    const result = await comments().deleteMany({});
}

const loadData = async () => {
    const url = config.get('startupDataLoaderApi');
    const dataResult = await axios.get(url);
    if (dataResult.data instanceof Array && dataResult.data.length > 0) {
        try {
            await clearPreviousData();
            const result = await comments().insertMany(dataResult.data);
            console.log(`dataLoader has updated the data with ${result.insertedCount} documents`);
        } catch (e) {
            console.log('Error starting the dataLoader ', e);
        }
    } else {
        console.log('No data found in dataLoader');
    }

}

module.exports = {
    loadData
}
