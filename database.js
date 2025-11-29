require("dotenv").config()
const { MongoClient } = require('mongodb');
console.log(process.env.DATABASE_KEY,"databaseKey")
async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = process.env.DATABASE_KEY;
  const client = new MongoClient(uri);
  try {
    const database = client.db('RealXstate');
    const myColl = database.collection("user");
    // Queries for a movie that has a title value of 'Back to the Future'
    const docs = [
        {  "name": "test",
          "mail": "test_realxstate@gmail.com",
         "contact_no": "82354534",
          "type": "test"},
          {  "name": "leijoe",
            "mail": "leijoe_realxstate@gmail.com",
           "contact_no": "986756745",
            "type": "guest"}
     ];

     const insertManyresult = await myColl.insertMany(docs);
     let ids = insertManyresult.insertedIds;
    console.log(ids);
    const docsFind = await myColl.find( { tags: { $type: [ [ "land", "guest" ] ] } } )
    console.log(docsFind)
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);