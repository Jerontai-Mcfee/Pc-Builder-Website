// BE SURE TO CHECK FILE PATHS ARE 1000% CORRECT - HAS CAUSED SERVER ISSUES WITH PAST HOMEWORKS

import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

// component + its corresponding data
import Component from '../models/component.js.js'
import componentData from './data/components.js'

// user + corresponding userdata
import User from '../models/user.js'
import userData from './data/users.js'

// previously shopped component + its data
import ShoppedComponent from '../models/shoppedComponent.js.js'
import shoppedComponentData from './data/shoppedComponent.js'


const seedDb = async () => {

  try {

    // connects to db via mongoose 
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('db connected via seeds.')

    // drops the db in mongoose similar to DROP DB IF EXISTS in SQL
    await mongoose.connection.db.dropDatabase()
    console.log('db dropped.');

    // creates users from hard-coded users.js file in data folder
    const users = await User.create(userData);
    console.log(users);

    // console.log("FIRST TEST");



    const componentsWithAddedUsers = drinkData.map(drink => {
      return { ...drink, owner: users[0]._id }
    })
    console.log(users.length);


    // uses ComponentData to populate
    const components = await Component.create(componentsWithAddedUsers)
    console.log(`db seeded with ${components.length} number of components.`);

    
 
    const shoppedComponentsWithData = shoppedComponentData.map(component => {
      return { ...component, owner: users[0]._id }
    })


    // creates shoppedComponents
    const shoppedComponents = await ShoppedComponent.create(shoppedComponentsWithData);
    console.log(`db seeded with ${shoppedComponents.length} number of components.`);

    

    // closes connection to mongoose
    await mongoose.connection.close()
    console.log('connection closed.');

  } catch (err) {
    console.log('Error: ', err);
    await mongoose.connection.close()
    console.log('connection failed due to error.');
  }
}

seedDb()