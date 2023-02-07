const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const { generateRefreshToken } = require("../config/refreshToken");
const validateMongodbId = require("../utils/validateMongoose");
const jwt = require("jsonwebtoken");
const { response } = require("express");

//  Create new user
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });

  //create a new user
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});

// login a user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  // check if user exists or not
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?._id);

    const updUser = await User.findByIdAndUpdate(
      findUser?._id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser?._id,
      firstName: findUser?.firstName,
      lastName: findUser?.lastName,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// Handle refresh token
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error("No Refresh Token available");
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token ");
    }
    const accessToken = generateToken(user?._id);
    res.json({ accessToken });
  });
});

//Get all users
const getAllUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

//get a single user
const getAUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getUser = await User.findById(id);
    res.json(getUser);
  } catch (error) {
    throw new Error(error);
  }
});

// Update a User
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongodbId(id);
  try {
    const updateAUser = await User.findByIdAndUpdate(id, {
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      mobile: req?.body?.mobile,
    });

    res.json(updateAUser);
  } catch (error) {
    throw new Error(error);
  }
});

//Delete a user
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteAUser = await User.findByIdAndDelete(id);
    res.json(deleteAUser);
  } catch (error) {
    throw new Error(error);
  }
});

// Block User
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const blockAUser = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User Blocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

// Unblock  User
const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const unBlockAUser = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User Unblocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});


// Logout User

const logout = asyncHandler(async(req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if(!user){
    res.clearCookie('refreshToken', {
      httpOnly:true,
      secure:true
    });
    return response.sendStatus(204); // forbidden
  };

  await User.findOneAndUpdate(refreshToken, {
    refreshToken: ""
  });
  res.clearCookie('refreshToken', {
    httpOnly:true,
    secure:true
  });
  response.sendStatus(204); // forbidden
});


module.exports = {
  createUser,
  loginUser,
  getAllUser,
  getAUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout
};
