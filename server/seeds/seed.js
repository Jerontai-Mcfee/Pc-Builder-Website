const db = require('../config/connection');


const partsData = require('./partsData.json');

db.once('open', async () => {
  // await parts.deleteMany({});

  const parts = await part.insertMany(partsData);

  console.log('Parts seeded!');
  process.exit(0);
});
