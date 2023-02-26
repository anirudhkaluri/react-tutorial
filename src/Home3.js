import { useState,useEffect } from "react";
import BlogList2 from "./BlogList2";
import BlogList3 from "./BlogList3";
import useFetch from "./useFetch";
import useFetch2 from "./useFetch2";

const Home3 = () => {
    /*const[blogs,setBlogs]=useState(null); 
    const[isLoading,setisLoading]=useState(true); 
    const[error,setError]=useState(null); 
    These states will go to useFetch.js
    */

    const {data:blogs,isLoading,error}=useFetch2('http://localhost:8000/blogs');  
    //data:blogs means we are getting data but we are calling them blogs in this components

   /* const handleDelete=(id)=>{  
      const newBlogs=blogs.filter(blog=>blog.id!==id); 
      setBlogs(newBlogs);
    }
    This function is no longer valid as delete button should mean deleting in the database. this doesnt do that
    So we will remove the handle delete being passed as a prop to BlogList2.js
    */

    return (

        <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading....</div>}
        { blogs && <BlogList3 blogs={blogs} title="All Blogs"/> }     
        </div>
     );
}
 
export default Home3;