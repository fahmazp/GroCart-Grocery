import express from 'express'
import { checkUser, userLogin, userLogout, userProfile, userSignup } from '../controllers/userController.js';
import { authUser } from '../middlewares/authUser.js';

const router = express.Router()

//signup
router.post("/signup",userSignup)

//login
router.put("/login",userLogin);
  

router.get("/profile",authUser,userProfile);

// //profile-edit
// router.put("/profile-update", authUser, upload.single("profiePic"), userUpdateProfile);

//profile-deactivate
// router.put("/deactivate");

//logout
router.get("/logout",userLogout);

//delete-accnt
// router.delete("/delete-account",authUser);


// forgot-pswd
// router.get("/forgot-pswd",passwordForgot);

//check-user
router.get("/check-user",authUser,checkUser);

export { router as userRouter };