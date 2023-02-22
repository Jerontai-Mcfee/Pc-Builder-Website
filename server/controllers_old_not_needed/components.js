// creates controller routes for components that have not yet been added to cart or shopped

import Component from '../models/component.js'


// displays all components
export const getAllDrinks = async (_req, res) => {
  const components = await Component.find()
  return res.status(200).json(components);
}


// console.log("TESTING TESTING TESTING 1");

// creates the individual component (will add to pre-added components) - MAY DELETE THIS LATER
export const createComponent = async (req, res) => {

  try {
    const componentWithOwner = { ...req.body, owner: req.currentUser._id }
    console.log(componentWithOwner);
    const componentToAdd = await Component.create(componentWithOwner);
    console.log('Component to add: ', componentToAdd);
    return res.status(201).json(componentToAdd);

  } catch (err) {
    console.error(err);
    return res.status(422).json(err);
    // console.log("ERROR!");
  }
}



// gets single component and displays it
export const displayComponent =  async (req, res) => {
  try {
    const { id } = req.params
    const singleComponent = await Component.findById(id).populate('owner').populate('comments.owner');

    if (!singleComponent) throw new Error()

    console.log('single component: ', singleComponent);
    return res.status(200).json(singleComponent);

  } catch (err) {
    console.error(err);
    return res.status(404).json({ 'message': 'Error. Component not found.' });
  }
}



// maybe try running through INSOMNIA


// deletes a component by ID
export const deleteComponent =  async (req, res) => {

  try {
    const { id } = req.params
    const componentToDelete = await Component.findById(id);

    if (!componentToDelete) throw new Error()
    
    if (!componentToDelete.owner.equals(req.currentUser._id)) throw new Error('Error. Unauthorized user.');

    // async function for deletion
    await componentToDelete.remove()

    return res.sendStatus(204);

  } catch (err) {
    console.error(err);
    return res.status(404).json({ 'message': 'Error. Component not found.' });
  }
}

// edit a component - similar to PUT route.  MAY DELETE LATER
// MAY DELETE THIS LATER - easy to add functionality for now but may not need
export const editComponent =  async (req, res) => {

  const { id } = req.params

  try {
    const componentToUpdate = await Component.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });

    if (!componentToUpdate) throw new Error()
    return res.status(200).json(componentToUpdate);

  } catch (err) {
    console.error(err);
    return res.status(404).json({ 'message': 'Error. Component not found.' });
  }
}




// creates comment
export const addComment = async (req, res) => {

  try {
    const { id } = req.params
    const component = await Component.findById(id)

    if (!component) throw new Error('Error. No component found.')
    const commentToAdd = { ...req.body, owner: req.currentUser._id }

    console.log(commentToAdd);


    // console.log("TESTING ON ADD COMMENT");

    component.comments.push(commentToAdd);
    await component.save()

    return res.status(200).json(component);

  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: err.message });

    // console.log("error.");

  }
}


// console.log("TESTING AFTER COMMENT ADDITION BUT BEFORE COMMENT DELETION");

// deletes comment
export const deleteComment = async (req, res) => {

  try {
    const { id, commentId } = req.params
    const component = await Component.findById(id);

    if (!component) throw new Error('Error. No component found.');
    const commentToDelete = component.comments.id(commentId);
    if (!commentToDelete) throw new Error('Error. No Comment found.');


    // more async functions
    await commentToDelete.remove()
    await component.save()
    return res.sendStatus(204);

  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: 'Error deleting comment. Try again.' });
  }
}