import { Link } from "@remix-run/react";
import { title } from "process";

import { useOptionalUser } from "~/utils";
import BlogRoll from "./blogroll";
import Footer from "./footer";
import NavBar from "./navbar";

export default function Index() {
  const user = useOptionalUser();

  const blogTitles = [
    'Title #3',
    'Title #2',
    'Title #1'    
];

  return (
    <body>
        
        {/* NAVIGATION BAR*/}
        
        <NavBar />

        <div className="columns">

            {/* ADMIN SIDE MENU*/}
        
            <div className="column is-one-fifth">
                <aside className="menu">
                  <p className="menu-label">
                    General
                  </p>
                  <ul className="menu-list">
                    <li><a>Dashboard</a></li>
                    <li><a>Customers</a></li>
                    <li><Link to="/create-new">Add New Article</Link></li>
                  </ul>
                  <p className="menu-label">
                    Administration
                  </p>
                  <ul className="menu-list">
                    <li><a>Team Settings</a></li>
                    <li>
                      <a className="is-active">Manage Your Team</a>
                      <ul>
                        <li><a>Members</a></li>
                        <li><a>Plugins</a></li>
                        <li><a>Add a member</a></li>
                      </ul>
                    </li>
                    <li><a>Invitations</a></li>
                    <li><a>Cloud Storage Environment Settings</a></li>
                    <li><a>Authentication</a></li>
                  </ul>
                  <p className="menu-label">
                    Transactions
                  </p>
                  <ul className="menu-list">
                    <li><a>Payments</a></li>
                    <li><a>Transfers</a></li>
                    <li><a>Balance</a></li>
                  </ul>
                </aside>
            </div>
            
            {/* LIST ARTICLES */}

            {/* TO DO: 
            1) PULL FROM ARTICLES ON SERVER
            2) MAKE EDIT BUTTON WORK */}

            <div className="column">
                
                {blogTitles.map((title) => (
                    <div>{title} | Edit</div>
                ))}
                
                        
            </div>
            
        </div>

        {/*FOOTER SECTION*/}
        
        <Footer />
  
    </body>
  );
}