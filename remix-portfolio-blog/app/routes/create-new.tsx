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

        {/* CREATE NEW FORM
        
        TO DO: MAKE NESTED ROUTE

        */}

            <div className="column">
                
                <div className="field">
                  <label className="label">Article Title</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Body of Article</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Textarea"></textarea>
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Publish</button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                  </div>
                </div>
                
                        
            </div>

        {/*FOOTER SECTION*/}
        
        <Footer />
  
    </body>
  );
}