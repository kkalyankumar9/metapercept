import React, { useEffect, useState } from 'react'
import "./SinglePage.css"
import data from "../db.json"
import axios from 'axios';
const SinglePage = () => {
   



  return (
    <>
    <div class='con'>
        <div class="header">
            <h1>Title</h1>
            <p>Learn xMetal for XML based authoring to manage high volume structured content development and management. This training program is meant for the Technical Writers, Technical Authors, and Information Developers, working on high-end documentation for Automobile, Aerospace, Hardware, and Manufacturing business domains.</p>
            <button>Read More</button>

        </div>
        <div class="subHead">
            <h2>Classes</h2>
            <p>Learn xMetal for XML based authoring to manage high volume structured content development and management. </p>
        </div>
        <div class="displaydata">
            {
                data.map((e,i)=>(
                    <div key={e.ID}>
                        <img src="https://img.freepik.com/free-photo/cardboard-box-isolated_125540-652.jpg" alt="" />
                        <h3>{e.Name}</h3>
                        <p >{e.ShortDesc}</p>
                        <button>View</button>
                    </div>
                ))
            }

        </div>
        <div class="bottom">
            <p>Copywrite @ 2021. All Rights Reserved</p>
            <p>Back to Top</p>
        </div>
    </div>
        
    </>
  )
}

export default SinglePage