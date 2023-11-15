import { useState } from "react";
import Card from "./Card";

function Cards(prop){
    let courses=prop.courses;
    let category=prop.category;

    const [likedCourses,setLikedCourses]=useState([]);

    function getAllCourses(){
        let allCourses=[];
        if(category==="All"){
            Object.values(courses).forEach((array) => {
                array.forEach(Element=>(allCourses.push(Element)))
            });
            return allCourses;
        }
        else{
            return allCourses=courses[category];
        }
    }
    getAllCourses();


    return(
        <div className="card-container">
            {
                getAllCourses().map((data)=>{
                    return(<Card key={data.index} data={data} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />)
                })
            }
        </div>
    )
}

export default Cards;