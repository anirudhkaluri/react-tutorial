import { useHistory, useParams } from "react-router-dom";
import useFetch2 from "./useFetch2";

const BlogDetails = () => {
    const {id}=useParams();
    const history=useHistory();
    const{data:blog,isLoading,error}=useFetch2('http://localhost:8000/blogs/'+id);
    const handleClick=(e)=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE'
        })
        .then(()=>{
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div></div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by:{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}

        </div>
      );
}
 
export default BlogDetails;