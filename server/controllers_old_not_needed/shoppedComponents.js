// REMINDER - ONLY ONE EXPORT DEFAULT


// basic imports
import ShoppedComponent from '../models/shoppedComponent.js'
import Component from '../models/component.js'

// console.log("TESTING 1 2 3");

// displays all shopped components
export const getAllShoppedComponents = async (req, res) => {

    // async function to assign components and shopped components to const's
  const components = await ShoppedComponent.find()
  const allComponents = await Component.find()

  const getAllSc = components.map(component => {
    const filtered = allComponents.filter(comp => {
      return comp.id === component.componentId
    })

    if (filtered.length > 0) {
      filtered.push(component)
      return filtered
    }
  })
  
  return res.status(200).json(getAllSc);
}


// gets one component and displays and exports
export const displayShoppedComponent = async (req, res) => {

  try {
    const { id } = req.params
    const singleComponent = await ShoppedComponent.findById(id).populate('owner')

    if (!singleComponent) throw new Error()
    console.log('single component: ', singleComponent);
    return res.status(200).json(singleComponent);

  } catch (err) {
    console.error(err);
    return res.status(404).json({ 'message': 'Cart not found. Error.' });
  }
}


// console.log("TEST 2 2 2 2");


// creates cart to add components to
export const postShoppedComponent = async (req, res) => {

  try {

    const { id } = req.params
    const component = await Component.findById(id);

    if (!component) throw new Error('ERROR! No part found.')
    
    const componentToAdd = { ...req.body }
    const shoppedComponent = await ShoppedComponent.create(componentToAdd);

    console.log(shoppedComponent);
    // console.log("TEST TEST TEST TEST TEST 4");

    return res.status(200).json(shoppedComponent)

  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: err.message });
  }
}

// delete route to remove a component from the cart
export const deleteShoppedComponent =  async (req, res) => {

  try {
    const { id } = req.params
    const componentToDelete = await ShoppedComponent.findById(id);

    if (!componentToDelete) throw new Error();
    await componentToDelete.remove();
    return res.status(200).json('Component deleted.');
    
  } catch (err) {
    console.error(err);
    return res.status(404).json({ 'message': 'Error deleting card. Try again.' });
  }
}

// console.log("FINAL TEST FINAL TEST");