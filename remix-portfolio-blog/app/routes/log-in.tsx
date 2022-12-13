import { Link } from "@remix-run/react";
import Footer from "./footer";
import NavBar from "./navbar";


export default function SignUp() {
    return(
        <body>

            <NavBar />

            {/*LOGIN FORM*/}
            <div className="filled-height">

            <div className="section">
                <div className="columns is-mobile is-centered">
                    <div className="column is-half-desktop is-half-tablet is-full-mobile">

                        <div className="field">
                            <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" placeholder="Enter Your Email Address" />
                                </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                                <div className="control">
                                    <input className="input" type="email" placeholder="Enter Your Password" />
                                </div>
                        </div>
                        
                        <p>Don't have an account? <Link to="/signup">Sign up.</Link></p>

                        <div className="field is-grouped is-grouped-centered">
                              <p className="control">
                                <a className="button is-primary">
                                  Submit
                                </a>
                              </p>
                              <p className="control">
                                <Link to="/">
                                <button className="button is-light">
                                  Cancel
                                </button>
                                </Link>
                              </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>


            <Footer />
        </body>
    );
}