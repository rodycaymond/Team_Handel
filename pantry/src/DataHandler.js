const fetch = require('node-fetch')


/// const dataHandler = new DataHandler
/// dataHandler.getIngredientsByPantry(1)

class DataHandler {
    constructor(dev=true){
        this.dev = dev
    }

    getIngredientsByPantry = async (pantry_id) => {
        await fetch(`http://localhost:8080/pantry${pantry_id}`)
        .then((data) => {return data})
        .catch((err) => {return 'failed to get resource'})
    }
}

export default DataHandler