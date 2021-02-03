import express from 'express'
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()

// @desc register a new user
// @route POST /api/v1/users
// @access public
// @route GET /api/v1/users
// @access private
router.route('/').post(registerUser).get(protect, admin, getUsers)

// @desc Auth user & get token
// @route POST /api/v1/users/signin
// @access public
router.post('/signin', authUser)

// @desc user profile
// @access private/individual user
router
  .route('/profile')
  .get(protect, getUserProfile) // @route GET /api/v1/users/profile
  .put(protect, updateUserProfile) // @route PUT /api/v1/users/profile

// @desc admin
// @access private/Admin
router
  .route('/:id')
  .delete(protect, admin, deleteUser) // @route DELETE /api/v1/users/:id
  .get(protect, admin, getUserById) // @route GET /api/v1/users/:id
  .put(protect, admin, updateUser) // @route PUT /api/v1/users

export default router
