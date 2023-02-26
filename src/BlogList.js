const BlogList  = ({blogs,title,handleDelete}) => {

    return ( 

        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                    {/* we are using an anonymous function which calles
                    handleDelete function which takes blog.id as an argument.
                    Remember that id is used by react to keep track of elements in the array.
                    But remember that blogs is a prop passed by Home.js 
                    We have to change it in the blogs state in the home.js component. So its
                    not a good idea to define the handleDelete function here. We will define it in home component.
                    Then we will pass that function to this component as a prop */}
                  
                </div>
           ))}
        </div>
     );
}
 
export default BlogList ;