import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import Footer from "./footer";
import NavBar from "./navbar";
import { json, LoaderFunction } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>
}

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();
  return json(posts);
};

export default function Index() {
  const user = useOptionalUser();
  const posts = useLoaderData();// as LoaderData;
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
        <section className="section is-medium">
          <div className="container">
              <h1 className="title">The Blogroll</h1>
              <h2 className="subtitle">
                Read our new articles
              </h2>
                
              <div className="columns is-multiline">

                  {/* TO DO: CHANGE THE DIRECTION SO MOST RECENT POST POSTS AT THE TOP & LAST POST AT THE BOTTOM */}
                  {posts.map((post) => (
                    <div className="column is-one-third">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img src='https://bulma.io/images/placeholders/1280x960.png' alt="Placeholder image" />
                          </figure>
                        </div>
                        
                      
                      <div className="card-content">
                        <div className="media">
                          <div className="media-left">
                            <figure className="image is-48x48">
                              <img src='https://bulma.io/images/placeholders/96x96.png' alt="Placeholder image" />
                            </figure>
                          </div>
                          <div className="media-content">
                            <div key={post.articleSlug} className="title is-4">
                              <Link to={post.articleSlug} prefetch="intent">
                                {post.articleTitle}
                              </Link>
                            </div>
                            <div key={post.authorSlug} className="subtitle is-6">
                              <Link to={post.authorSlug}>
                                {post.author}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">{post.markdown}
                          <br />
                          <time>{post.createdAt}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </section>

        {/*FOOTER SECTION*/}
        
        <Footer />
  
    </body>
  );
}
