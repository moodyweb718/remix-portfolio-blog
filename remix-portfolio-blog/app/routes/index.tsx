import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import BlogRoll from "./blogroll";
import Footer from "./footer";
import NavBar from "./navbar";

export default function Index() {
  const user = useOptionalUser();
  return (
    <body>
        
        {/* NAVIGATION BAR*/}
        
        <NavBar />
  
        {/*HERO SECTION*/}
        
        <section className="hero is-medium is-link">
            <div className="hero-body">
                <p className="title">Blog Portfolio App</p>
                <p className="subtitle">Where Blogging Begins</p>
            </div>
        </section>
        
        {/*BLOGROLL SECTION*/}
        
        <BlogRoll />

        {/*FOOTER SECTION*/}
        
        <Footer />
  
    </body>
  );
}
