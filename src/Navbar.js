const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Anirudhs blog</h1>
            <div className="links">
                <a href="/" style={{
                    backgroundColor:'#f1356d',
                    color:'white',
                    borderRadius:'8px'
                }}>Home Page</a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>Create New Blog </a>
                {/*These a tags will contact the server which it shouldnt.
                In React Routers we learn that react will intercept raquests to server.
                For that to happen we have to use special react links. */}
            </div>
        </nav>
     );
}
 
export default Navbar;