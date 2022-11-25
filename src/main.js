import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from "./Redux/Actions/actions";



function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);
  console.log("Axios Fetch", users);

  const myfunction = event =>{
    document.getElementById('thamb').style.display ='block';
  }

  return (
    <div className="App">
     <button  className='btn'onClick={() => dispatch(getUsersFetch())}>Get Your Images</button>
     {/* <div>users:{users.map((user=>(<div>url: {user.url} id: {user.id}</div>)))}</div> */}
     <div className='main'>{users.map((user=>(<div>
      <div className='container'>
       <h1>AlbumId {user.id}</h1>
       <p>Title {user.title}</p>
       <p id='thamb' key={user.id.toString()} style={{display:'none'}}>{user.thumbnailUrl}</p>
       <img className="imd"  src={user.url} onClick={myfunction}></img>
      </div>
      </div>)))}</div>
    
    </div>
  );
}

export default App; 
