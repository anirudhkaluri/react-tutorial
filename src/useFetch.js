import { useEffect, useState } from "react";
const useFetch=(url)=>{ //this is the custom hook which we created
    const[data,setData]=useState(null);   //we changed [blogs,setBlogs] in Home2.js to [data,setData] so that it is more generalised
    const[isLoading,setisLoading]=useState(true); //isLoading is used to check if we got the data or not
    const[error,setError]=useState(null); 
    //custom hooks must start with use. else it wont work
    useEffect(()=>{ 
       
        setTimeout(()=>fetch(url) //setTimeout will execute this callback function after 1000 milliseconds
        .then((res)=> {
            if(!res.ok) 
                throw Error('Couldnt fetch data from the resource'); 
            return res.json();
        })
        .then((data)=>{
            setError(null); //if we get the data dont show error
            setData(data); 
            setisLoading(false);  //if we get the data dont show loading
        })
        .catch((err)=>{
            setisLoading(false); //if we got the error dont show loading
            setError(err.message); //show the error
        }),1000); 
      
    },[url]); //whenever url changes, it is going to execute the function and get the data from that endpoint
    return {data,isLoading,error}; //we will return these values as an object
}

export default useFetch;
