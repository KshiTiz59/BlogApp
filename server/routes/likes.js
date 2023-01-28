const express=require("express");
const router=express.Router();
const User=require("../models/User");
const Post=require("../models/Post");


//UPDATE POST LIKES
router.patch("/:id",async(req,res)=>{
    try{
       const like= req.body ;
       console.log(like.likes)
       const updatedlikes =await Post.findByIdAndUpdate(
        req.params.id,{
            $set: {likes: like.likes+1}
        }
    );
    res.status(200).json(updatedlikes);
 }catch(err){
        res.status(500).json(err)
    }   
});








module.exports =router;
