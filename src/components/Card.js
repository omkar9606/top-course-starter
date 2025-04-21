import React from "react";
import { toast } from "react-toastify";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;

    let setLikedCourses = props.setLikedCourses;
    function clickHandler() {
        if(likedCourses.includes(course.id)) {
            setLikedCourses( (prev)=> prev.filter((cid)=>(cid !==  course.id)));
            toast.warning("liked removed");
        }else{
                //pahle se liked nahi hai to liked kar do
                if(likedCourses.length===0){
                    setLikedCourses([course.id]);
                }else{
                    //non empty pahle se
                    setLikedCourses((prev) => [...prev, course.id]);
                }
                toast.success("liked successfully"); 
        }
    }


    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative ">
                <img src={course.image.url}></img>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" />: <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>

            </div>
          

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">
                    {course.title}
                </p>
                <p className="mt-2 text-white">
                    {
                        course.description.length > 100 ? (course.description.substr(0, 100) )+ "..." : (course.description)

                    }
                    </p>
            </div>
        </div>
    )
}

export default Card;
