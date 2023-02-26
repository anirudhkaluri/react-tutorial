import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const[blogs,setBlogs]=useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const[name,setName]=useState('mario'); //another state added to display useEffect Dependencies

    const handleDelete=(id)=>{ //deletes a blog from the array with a particular id. 
      //this is then passed as a prop to BlogList which renders all the blogs with a delete button
      //when the delete button is clicked, it invokes the handleDelete
      const newBlogs=blogs.filter(blog=>blog.id!==id); //filter returns a new array.
      //we want to delete a blog with id. so we need to filter it out. Return true for those ids which dont match 
      //with the given id. Return false if it matches. False will filter it out.
      //blog.id!==id will be true if the ids dont match.
      //after that we need to set blogs state to this new filtered array.
      setBlogs(newBlogs);
      //when we delete a blog, the component re-renders. Because blogs here is a state
      //Whenever state changes the component re-renders. 
      //but if we refresh we can see all the blogs again. Because when we refresh we are re-running the code
      //the re-running will reset all the states.
    }
    useEffect(()=>{
      console.log('use effect ran');
    },[name]); //we pass as an argument a function. this function runs every time a component loads.
    //fetch data, communicate with authentication services etc are side effects which can be run with useEffect
    //useEffect hook is used to run code on every render. When the component first  renders and then when the component re-renders because of the change in the states.
    //the second argument is a dependency array. Here, it tells that call that function only when the name state changes
    //the name state changes when you click the "change name" button at the bottom  of this component
    return (
        <div className="home">
          <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
          <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs" handleDelete={handleDelete}/>
          {/* .filter method fires a callback for each  item in the array.
          if we return true it keeps in the array. if false filters out the element
          It returns a new array with only the items which we didnt filter
          we are passing
          here we want only those blogs whicha re mario's
          so we wrote a condition blog.author===mario  */}
          <button onClick={()=>setName('Luigi')}>change name</button>
          <p>Name is:{name}</p>
        </div>
     );
}
 
export default Home;