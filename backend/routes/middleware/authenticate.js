const jwt=require("jsonwebtoken")
const UserModel=require("../user")
const Key=require('../Key')

const authenticate=async(req,res,next)=>{
   try{
    const token=req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: "Authorization token is missing" });
  }
    const verifytoken=jwt.verify(token,Key)
    console.log(verifytoken)
    const rootUser = await UserModel.findById(verifytoken._id);
    console.log(rootUser)
   }catch(error){
      console.error("Authentication error:", error);
      return res.status(401).json({ error: "Authentication failed" });
   }
}

module.exports=authenticate