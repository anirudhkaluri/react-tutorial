import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home2 = () => {
    const[blogs,setBlogs]=useState(null); //initially
    const[isLoading,setisLoading]=useState(true); //we will use this to show a message before fetch 
    const[error,setError]=useState(null); //we are going to store error in this constant
    useEffect(()=>{ //using useEffect to fetch data
        setTimeout(()=>fetch('http://localhost:8000/blogs')
        .then((res)=> {
            console.log('The response body is:',res);
            if(!res.ok){ //res.ok is a property which is true when the request is successful, else false
                //if its false lets throw an error
                //we are doing this check if there is any error
                throw Error('Couldnt fetch data from the resource');
            }
            return res.json();
        }) //res.json() is another promise
        .then((data)=>{
            console.log('The data is:',data);
            setError(null); //if our future requests are successful then we dont want error message
            setBlogs(data); //this data is javascript array
            setisLoading(false); //there is no need to view Loading text. We got the data. 
        })
        .catch((err)=>{
            setisLoading(false); //we shouldnt see loading message if there is an error
            setError(err.message); //this is the error thrown if !res.ok is true in the first then
        }),1000); //we did set time out to simulate real world lag in fetching data. This 1000 is for setTimeOut
    },[]); //empty dependency array means this function will be fired only once. This[] is for useEffect

    const handleDelete=(id)=>{  //this function is irrelevant because we actually need to delete it in db.json
        //not the blogs state
      const newBlogs=blogs.filter(blog=>blog.id!==id); 
      setBlogs(newBlogs);
    }

    return (

        <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading....</div>}
        {/* isLoading is initially true, so we display Loading on the screen. When we fetch the data,
        we are going to change isLoading state to false. So Loading will not be seen. Only the blogs will be seen */}
         { blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> }     
         {/* why are we doing logical and? logical and will first evaluate the first condition. if blogs is null
         it wont care to evaluate the second condition. Initially when the page renders, blogs is null. It takes a while
         for us to fetch data from the json server. During this time, null is passed to blogsList.js We get an error
         saying "cant map over a null object". So we have to stop rendering the BlogList component until we fetch the data.
         So we use this conditional templating. Until blogs is null, the Bloglist component wont render. Since this is 
         javascript logic we put them in curly braces */ }
        </div>
     );
}
 
export default Home2;