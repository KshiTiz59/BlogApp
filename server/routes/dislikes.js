const express=require("express");
const router=express.Router();
const User=require("../models/User");
const Post=require("../models/Post");


//UPDATE POST LIKES
router.patch("/:id",async(req,res)=>{
    try{
       const dislike= req.body ;
       console.log(dislike.dislikes)
       const updatedlikes =await Post.findByIdAndUpdate(
        req.params.id,{
            $set: {dislikes: dislike.dislikes+1}
        }
    );
    res.status(200).json(updatedlikes);
 }catch(err){
        res.status(500).json(err)
    }   
});








module.exports =router;
