import { Link, useLoaderData } from "@remix-run/react";
import { LoaderFunction, json } from "@remix-run/node";

import { useOptionalUser } from "~/utils";
import BlogRoll from "./blogroll";
import Footer from "./footer";
import NavBar from "./navbar";
import { getPost } from "~/models/post.server";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({params}) => {
    const {slug} = params;
    invariant(slug, 'slug is required');
    const post = await getPost(slug);
    invariant(post, `post not found ${slug}`);
    return json({post});
}

export default function ArticleTemplate() {
    const {post} = useLoaderData();
  const user = useOptionalUser();
  return (
    <body>
        
        {/* NAVIGATION BAR*/}
        
        <NavBar />
  
        {/*HERO SECTION*/}

        <section className="hero is-large is-link">
            <div className="hero-body has-text-centered">
                <p className="title">{post.articleTitle}</p>
                <p className="subtitle">By {post.author}</p>
            </div>
        </section>
        
        <section className="section is-three-fifths">
            <div className="article">
                <h2 className="title">{post.articleTitle}</h2>
                <p>{post.markdown}</p>

            </div>
        </section>

        {/*FOOTER SECTION*/}
        
        <Footer />
  
    </body>
  );
}