// will import from other files later

// imports express
import express from 'express'

import { getAllComponents, createComponent, displayComponent, editComponent, deleteComponent, addComment, deleteComment } from '../controllers/components.js'

import { registerUser, loginUser } from '../controllers/auth.js'
import { getUserProfile } from '../controllers/users.js'
import { secureRoute } from './secureRoute.js'

import { getAllShoppedComponents, displayShoppedComponent, postShoppedComponent, deleteShoppedComponent } from '../controllers/shoppedComponents.js'

// imports router for express
const router = express.Router()


// routes for already shopped components
router.route('/shopped-components')
  .get(getAllShoppedComponents)

router.route('/shopped-components/:id')
  .get(displayShoppedComponent)
  .delete(deleteShoppedComponent)
  .post(postShoppedComponent)


// handles creating, editing, and deletion of components
router.route('/components')
  .get(getAllComponents)
  .post(secureRoute, createComponent)

router.route('/components/:id')
  .get(displayComponent)
  .put(secureRoute, editComponent)
  .delete(secureRoute, deleteComponent)



// handles adding and deleting comments
router.route('/components/:id/comments')
  .post(secureRoute, addComment)

router.route('/components/:id/comments/:commentId')
  .delete(secureRoute, deleteComment)



// handles user profile registering & logging in
router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile/:id')
  .get(secureRoute, getUserProfile)

router.route('/profile')
  .get(secureRoute, getUserProfile)



export default router