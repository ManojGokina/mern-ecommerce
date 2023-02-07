const express = require("express");
const {
  createUser,
  loginUser,
  getAllUser,
  getAUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
} = require("../controllers/userController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/allUsers", getAllUser);
router.get("/refreshToken",handleRefreshToken);
router.get("/logout",logout);
router.get("/:id", authMiddleware, isAdmin, getAUser);
router.delete("/:id", deleteUser);
router.put("/updateUser", authMiddleware, updateUser);
router.put("/blockUser/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblockUser/:id", authMiddleware, isAdmin, unblockUser);


module.exports = router;
