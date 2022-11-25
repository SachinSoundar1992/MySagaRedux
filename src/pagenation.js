import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from "./Redux/Actions/actions";

import ReactPaginate from 'react-paginate';  

 

function Items({currentItems}) {
  console.log("All items List", currentItems);

  const myfunction = (id) =>{
    document.getElementById(id).style.display ='block';
  }


  return (
    <>
      {currentItems &&
      currentItems.map((user,index) => (
       <div className='container' key={user.id}>
       <h1>AlbumId {user.id}</h1>
       <p>Title : {user.title}</p>
       <p id={index} key={user.id.toString()} style={{display:'none'}}>Thumbnail : {user.thumbnailUrl}</p>
       <img className="imd"  src={user.url} onClick={()=>myfunction(index)}></img>
      </div>
        ))}
    </>
  );
}


  
  function PaginatedItems({ itemsPerPage,users}) {

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = users.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(users.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      console.log("event.selected",event.selected);
      const newOffset = (event.selected * itemsPerPage) % users.length;
      console.log("newOffset",newOffset);
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <Items currentItems={currentItems} />
        <div className='fullview'>
        <ReactPaginate className='pagination'
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
        </div>
      </>
    );
  }

export default PaginatedItems; 
