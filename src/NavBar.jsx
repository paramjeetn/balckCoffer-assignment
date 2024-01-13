import './NavBar.css';

const NavBar = () => {

    return(
        <>
     <nav className="navbar bg-body-tertiary nav">
        <div className="container nv-in">
          <div className='a-nav'>
            <a className="navbar-brand" href="#" style={{ display: 'inline-block' }}>
              <img src="/envato.png" alt="Logo" width="35rem" height="35rem" className="d-inline-block align-text-top" />
            </a>

            <div style={{ fontWeight: '700', fontSize: '2rem', marginLeft: '10px'}}>
               <p className='nav-txt' style={{opacity : '0.85'}}>Metric Master</p>
            </div>
          </div>
        </div>
      </nav>
        </>
    );
}

export default NavBar;