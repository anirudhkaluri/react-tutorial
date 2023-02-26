import {Link} from 'react-router-dom';
const Navbar2 = () => {
    return ( 
        <nav className="navbar">
            <h1>Anirudhs blog</h1>
            <div className="links">
                <Link to="/" style={{
                    backgroundColor:'#f1356d',
                    color:'white',
                    borderRadius:'8px'
                }}>Home Page</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>Create New Blog </Link>
                {/*Link will prevent request to server. It will look at url. It will match against the routes.It will
                inject whatever server we need. */}
            </div>
        </nav>
     );
}
 
export default Navbar2;