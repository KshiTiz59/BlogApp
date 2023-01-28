
import React, { useEffect, useState } from 'react'
import "./comment.css"
const Comment = ({ comment } ) => {
  var dat = parseInt(comment.date); 
  var ndate = new Date(dat) ; 
  var d = ndate.toLocaleString() ;
  console.log(d) ;

  const [date, setDate] = useState("") ; 
   const [nam ,setnam] = useState("");
   const [com ,setcom ] =useState("") ;
useEffect(()=>{
setDate(d) ;
setnam(comment.name) ;
setcom(comment.comm) ;
}, [comment])

  return (
    <div className='cc'>
      <div className='con'>
     <span> <p className='aut'> Author : {nam}</p>
      <p className='da'>Date : {d}</p>
      </span>
      <p className='co'>Comment : {com}</p>
      </div>
      
      
    </div>
  )
}

export default Comment
