import { useEffect, useState } from "react";
const useFetch2=(url)=>{ //this is the custom hook which we created
    const[data,setData]=useState(null);   //we changed [blogs,setBlogs] in Home2.js to [data,setData] so that it is more generalised
    const[isLoading,setisLoading]=useState(true); //isLoading is used to check if we got the data or not
    const[error,setError]=useState(null); 
    //custom hooks must start with use. else it wont work
    useEffect(()=>{ 
        const abortCont=new AbortController(); //we associate it with a fetch request.
        //we can then use the abort controller to stop the fetch. 
        //we add it as a second argument to fetch. 
        //we associated abort controller to the fetch
        setTimeout(()=>fetch(url,{signal:abortCont.signal}) //setTimeout will execute this callback function after 1000 milliseconds
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
            if(err.name==='AbortError') //aborting will throw an error
            //catch the error here. //if it is abort error then dont update the state. cuz updating state means 
            //we are still updating it despite home3.js not being mounted.
                console.log('fetch aborted');
            else{
                setisLoading(false); //if we got the error dont show loading
                setError(err.message); //show the error
            }         
        }),1000); 
        return ()=>abortCont.abort(); //this w
    },[url]); //whenever url changes, it is going to execute the function and get the data from that endpoint
    return {data,isLoading,error}; //we will return these values as an object
}

export default useFetch2;
