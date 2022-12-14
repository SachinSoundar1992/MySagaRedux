import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from "./Redux/Actions/actions";

import ReactPaginate from 'react-paginate';  
import PaginatedItems from './pagenation';




function App() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);
  console.log("Axios Fetch", users);


  return (
    <div className="App">
     <button  className='btn'onClick={() => dispatch(getUsersFetch())}>Get Your Images</button>
     {/* <div>users:{users.map((user=>(<div>url: {user.url} id: {user.id}</div>)))}</div> */}
     <div className='main'>
      {/* {Items({users})} */}
     <PaginatedItems users={users} itemsPerPage={10}></PaginatedItems>
      {/* {users.map((user,index)=>{
        return(
      <div>
      <div className='container'>
       <h1>AlbumId {user.id}</h1>
       <p>Title : {user.title}</p>
       <p id={index} key={user.id.toString()} style={{display:'none'}}>Thumbnail : {user.thumbnailUrl}</p>
       <img className="imd"  src={user.url} onClick={()=>myfunction(index)}></img>
      </div>
      </div>
        )

     } 
      )} */}
      </div>
    
    </div>
  );
}


export default App; 
