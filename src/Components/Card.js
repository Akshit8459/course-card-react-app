import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Card({data,likedCourses,setLikedCourses}){
    
    function clickHandler(){
        if(likedCourses.includes(data.id)){
            setLikedCourses((prev)=>prev.filter((cid)=>cid!==data.id));
            toast.error("Removed from Favourites!",{position:"bottom-right",theme:"dark"});
        }
        else{
            if(likedCourses.length===0){
                setLikedCourses([data.id]);
            }
            else{
                setLikedCourses((prev)=> [...prev,data.id]);
            }
            toast.success("Added To Favourite!",{position:"bottom-right",theme:"dark"});


        }
    }
    return(
        <div className="card">
            <div className='img-container'> 
                <img src={data.image.url} alt={data.image.alt} className="img"></img>
                <button className="like" onClick={clickHandler}>
                    {likedCourses.includes(data.id)?<FcLike fontSize="1.1rem"/>:<FcLikePlaceholder fontSize="1.1rem" fontWeight="bolder"/>}
                </button>
            </div>
            <div className="info-container">
                <p className="title-container">{data.title}</p>
                <p className="description-container">{data.description.length>100?data.description.substring(0,100)+"...":data.description}</p>
            </div>

        </div>
    )
}

export default Card;
