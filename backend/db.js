const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/db_foodapp'
const mongoDB= async()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log("Connected successfully");
        //now it has been connected and we now want to fetch the data 
        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray()
        // console.log(fetched_data)
        const fetched_data2 = await mongoose.connection.db.collection("food_category").find({}).toArray()
       
        
        global.food_items = fetched_data;
        // console.log(global.food_items)
        global.food_category = fetched_data2;
        // console.log("Fetched food_items:", fetched_data);
        // console.log("Fetched food_category:", fetched_data2);
    }
    catch(err){
        console.error("Error connecting or fetching data:", err);
    }
    
    
    

};

module.exports= mongoDB;
