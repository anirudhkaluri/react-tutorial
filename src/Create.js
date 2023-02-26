import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle]=useState("Hello type something here"); //to track title
    const [body,setBody]=useState("Hello type your body here");
    const [author,setAuthor]=useState("luigi");
    const history=useHistory();
    const [isPending,setisPending]=useState(false); //to show a loading message when posting
    const handleSubmit=(e)=>{
            e.preventDefault();
            const blog={title,body,author};
            setisPending(true);
            fetch('http://localhost:8000/blogs',{
                method:'POST',
                headers:{"Content-type":"application/json"},
                body: JSON.stringify(blog) //json server will automatically add id property
            })
            .then(()=>{
                setisPending(false);
                //history.go(-1); //go back 1 through history
                //allows us to go back and forward
                history.push('/');
            });

           
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)} 
                />
                {/*to track the changes in title */}
                <label>Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                > </textarea>
                <label>Blog author:</label>
                <select 
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario"> mario</option>
                    <option value="luigi"> luigi</option>
                </select>
               { !isPending && <button>Add blog</button>}
               {isPending && <button disabled>Adding blog</button>}
            </form>
        </div>
     );
}
 
export default Create;