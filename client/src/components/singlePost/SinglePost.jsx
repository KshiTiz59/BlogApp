import axios from "axios";
import {useContext, useEffect, useState} from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
import Comment from "../commentcard/Comment"
export default function SinglePost() {
    const location =useLocation();
    const path=(location.pathname.split("/")[2]);
    const [post,setPost]=useState({});
  const PF="http://localhost:5000/images/";
  const {user}=useContext(Context);
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [updateMode,setUpdateMode]=useState(false)
    const [comment  , setcomment] = useState("") ;
    const [com , setcom] = useState([]) ;
    const [c ,setc ] = useState({}); 
  const [like , setlike] = useState() ;
  const [dislike , setdislike] = useState() ;
const [cc ,setcc] = useState({}) ;

    useEffect(()=>{
const getPost =async ()=>{
    const res= await axios.get("/posts/"+path);
    setPost(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc);
    setcom(res.data.comments);
     setlike(res.data.likes); 
     setdislike(res.data.dislikes); 

};
getPost();
    },[path , c ,cc]);

const handleDelete = async()=>{
    try{
    await axios.delete(`/posts/${post._id}`,{data:{username:user.username},});
    window.location.replace("/");
    }catch(err){}
}
const handleUpdate = async ()=>{
    try{
        await axios.put(`/posts/${post._id}`,{
        username:user.username,
        title,
        desc,
     }
    );
        setUpdateMode(false);
        }catch(err){}
}
const handlecomment =async()=>{
    try
    {
        const cdata = {name:user.username , comm: comment } ; 
        console.log(cdata)
      const data = await axios.patch(`/posts/${post._id}` , {
        name:user.username , comm: comment
       }) 
       console.log(data)
       setc(data) ;
       setcomment("")
    }
    catch(err)
    {
        console.log(err)
    }
}
com.sort((a ,b )=> parseInt(b.date) - parseInt(a.date)); 

const handlelike = async()=>{
    try{
      const data =  await axios.patch(`/likes/${post._id }`, {
        likes:like
       })
       setcc(data) ;
       console.log(data);
    }
    catch(err)
    {
        console.log(err);
    }
}

const handledislike = async()=>{
    try{
      const data =  await axios.patch(`/dislikes/${post._id }`, {
        dislikes:dislike
       })
       setcc(data) ;
       console.log(data);
    }
    catch(err)
    {
        console.log(err);
    }
}
console.log(com);
    return (
        <>
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo &&(
                <img  src={PF+post.photo} alt="" className="singlePostImg" />
                )}
                {
                    updateMode ?
                    (<input type="text" 
                    value={title} 
                    className="singlePostTitleInput"
                    autoFocus
                    onChange={(e)=>setTitle(e.target.value)}
                    />)
                    :(
                <h1 className="singlePostTitle">
                 {title}
                 {post.username===user?.username &&(
                 <div className="singlePostEdit">
                 <i className=" singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                 <i className=" singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                 </div>
                 )}
             </h1>
              )
            }
             <div className="singlePostInfo">
                 <span className="singlePostAuthor">Author: 
                 <Link to={`/?user=${post.username}`} className="link">
                 <b>{post.username}</b>
                 </Link>
                 </span>
                 <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                 </div>
                
                 <div className="llike">
                    <div className="llik">
                    <button className="ll"  onClick={ user && handlelike}>Likes <i class="fa fa-thumbs-up"></i></button> {like}
                    </div>
                    <div className="ldisl">
                    <button className="ll" onClick={ user && handledislike}>Dislikes <i class="fa fa-thumbs-down"></i></button> {dislike}
                    </div>
                 </div>
                 {updateMode ?
                 (
                 <textarea className="singlePostDesInput"
                  value={desc} onChange={(e)=>setDesc(e.target.value)}
                   autoFocus />
                 ):(
                 <p className="singlePostDes">
                    {desc}
                 </p>
             )}
             {updateMode && (
             <button className="singlePostButton" onClick={handleUpdate}>
                 Update
                 </button>
             )}</div>
             {
                user && (
                    <>
               
                    <div className="comment">
                    <div className="comcon">
                     <span><input placeholder="Write a comment..." type="text" value={comment} className="cominput" onChange={(e)=>setcomment(e.target.value)}></input><button className="cb" onClick={handlecomment}>submit</button></span>
                     </div> 
                 </div>
                 <div>
                     <h2 className="all">All Comments :</h2>
                 <div className="comcard">
                     {com.map((p)=>(
                         <Comment comment={p}/>
                     ))}
                 </div>
                 </div>
                 </>
                )
             }
        
        </div>
       
        </>
    );
}
