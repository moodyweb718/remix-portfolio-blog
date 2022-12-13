import { Link } from "@remix-run/react";


export default function NavBar() {
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="index.html">
              <img src={require('~/img/generic-logo.png')} />
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
                
              <Link className="navbar-item" to="/">Blog</Link>

              {/*<a className="navbar-item" href="#">Audio</a>*/}
                
              {/*<a className="navbar-item" href="#">Video</a>*/}

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="#">Categories</a>

                <div className="navbar-dropdown">
                    
                    <Link className="navbar-item" to="#">News</Link>
                    <Link className="navbar-item" to="#">Events</Link>
                    <hr className="navbar-divider" />
                    <Link className="navbar-item" to="#">Contact</Link>
                  
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/signup">
                    <button className="button is-link m-2">
                      <strong>Sign up</strong>
                    </button>
                  </Link>
                  <Link to="/log-in">
                    <button className="button is-light m-2">
                      Log in
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
    );
}