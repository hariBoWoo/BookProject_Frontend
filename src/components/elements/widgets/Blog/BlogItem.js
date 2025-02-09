import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


export default function BlogItem(){

    const [ newBlog , setNewBlog] = useState([]);
    let process = require('../../../../db/myProcess.json');

    useEffect(() => {
        fetch(`http://localhost:3005/blog`)
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setNewBlog(data);
        })
    },[]);

    const blogList = newBlog.map(item => (
    
    <div class="col-12 col-md-4 mb-4">
        
        <Link to = {`/productlist` } >
        <div className="blogImg" style ={{backgroundImage : `url(${item.image})`, backgroundSize:"cover"}}></div>     
        </Link>


        <div className="blogTxt">
           <Link to ={`/productlist` } ><p className="blogTitle">{item.title}</p></Link>
            <Link to = {`/productlist`}><p className="blogAuth">{item.author}</p></Link>
        </div>

    </div>
    )).slice(0,3);


    return(
        <div className = "row mt-5">
            {blogList}
        </div>
    );

}