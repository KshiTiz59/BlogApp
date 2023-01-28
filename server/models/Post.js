const mongoose=require("mongoose");

const PostSchema= new mongoose.Schema(
{
    title:{
        type:String,
    required:true,
    unique:true
},
desc:{
        type:String,
    required:true,
    },
    photo:{
        type:String,
        required:false, 
    },
    username:{
        type:String,
    required:true,
    },
    likes:{
        type:Number,
        default:0 
    },
    dislikes:{
        type:Number,
        default:0 
    },
    categories:{
        type:Array,
        required:false
    },
    comments:[
        {
        name:{
            type:String, 
            required:true 
        }, 
        comm:{
            type:String ,
            required:true 
        },
       date :{
        type:String, 
        default:Date.now 
       }
    }
]
},
{timestamps:true}
);


module.exports=mongoose.model("Post",PostSchema);