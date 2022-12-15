import { Response } from "@remix-run/node";
import { Link } from "@remix-run/react";
import postcss from "postcss";
import { arrayBuffer } from "stream/consumers";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
    const posts = [
        /*{
            articleTitle: 'Article #4',
            author: 'Ridley Davies',
            heroImage: 'https://bulma.io/images/placeholders/1280x960.png',
            authorAvatar: 'https://bulma.io/images/placeholders/96x96.png',
            datePublished: 'December 9, 2022',
            articleSlug:'#',
            authorSlug:'#'
        },*/
        {
            articleTitle: 'Article #3',
            author: 'Ridley Davies',
            heroImage: 'https://bulma.io/images/placeholders/1280x960.png',
            authorAvatar: 'https://bulma.io/images/placeholders/96x96.png',
            datePublished: 'December 9, 2022',
            articleSlug:'#',
            authorSlug:'#'
        },
        {
            articleTitle: 'Article #2',
            author: 'Ridley Davies',
            heroImage: 'https://bulma.io/images/placeholders/1280x960.png',
            authorAvatar: 'https://bulma.io/images/placeholders/96x96.png',
            datePublished: 'December 9, 2022',
            articleSlug:'#',
            authorSlug:'#'
        },
        {
            articleTitle: 'Article #1',
            author: 'Ridley Davies',
            heroImage: 'https://bulma.io/images/placeholders/1280x960.png',
            authorAvatar: 'https://bulma.io/images/placeholders/96x96.png',
            datePublished: 'December 9, 2022',
            articleSlug:'#',
            authorSlug:'#'
        },
    ];

    return json({posts});
};

export default function BlogRoll() {
    let posts = useLoaderData();

    //const blogArrayLength = posts.length;

    return(
        <section className="section is-medium">
            
            <div className="container">
                <h1 className="title">The Blogroll</h1>
                <h2 className="subtitle">
                    Read our new articles
                </h2>
                
                <div className="columns">

                <div>
                    <h1>Products</h1>
                    {posts.map((post) => (
                        <div key={post.articleSlug}>{post.articleTitle}</div>
                    ))}
                </div>
                </div>
                </div>
                </section>
                );
                }
                    
                    /* BEGIN LOOPING THRU BLOGPOSTS 
                    {//posts.map((post) => (
                        <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={post.heroImage} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                        <img src={post.authorAvatar} alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <div key={post.articleSlug} className="title is-4">
                                            <Link to="/template">
                                                {post.articleTitle}
                                            </Link>
                                        </div>
                                        <div key={post.authorSlug} className="subtitle is-6">
                                            <Link to={//posts.authorSlug}>
                                                {//</div>post.author}
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="content">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      Phasellus nec iaculis mauris.
                                      <br />
                                      <time>{//posts.datePublished}</time>
                                </div>
                              </div>
                        </div>
                    </div>
                    ))}
                    {/* END LOOPING THRU BLOGPOSTS *///}
                    
                //</div>
                
                //{/* BLOGROLL PAGINATION*/}
                //{/* TO DO: MAKE THE PAGINATION
                            /*1) HIDE IF <3 Blog Posts
                            2) SHOW UP TO 4 PAGES 
                            3) WHEN BLOG POSTS ARE > 4 FULL PAGES HAVE
                                    2 BUTTONS THEN ELLIPSIS THEN 2 BUTTONS*///}
                /*<nav className="pagination is-centered" role="navigation" aria-label="pagination">
                        <a className="pagination-previous">Previous</a>
                        <a className="pagination-next">Next page</a>
                        <ul className="pagination-list">
                            <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                            <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                            <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                            <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                            <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
                        </ul>
                    </nav>
                
                
            </div>
            
        </section>
    );
}*/