import { Form, Link } from "@remix-run/react";
import { ActionFunction, redirect, Response } from "@remix-run/node";
import { title } from "process";

import { useOptionalUser } from "~/utils";
import BlogRoll from "./blogroll";
import Footer from "./footer";
import NavBar from "./navbar";
import { createPost } from "~/models/post.server";

export const action: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  const articleTitle = formData.get('articleTitle');
  const articleSlug = formData.get('articleSlug');
  const markdown = formData.get('markdown');
  const author = formData.get('author');
  const authorSlug = formData.get('authorSlug');

  await createPost({articleTitle, articleSlug, markdown, author, authorSlug});

  return redirect('/');
};

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
          <Form method="post">
            <div className="column">
                
                <div className="field">
                  <label className="label">Article Title</label>
                  <div className="control">
                    <input className="input" type="text" id="articleTitle" name="articleTitle" placeholder="Text input" />
                  </div>
                </div>

                <div className="field">
                  <label className="label" id="articleSlug">Article Slug</label>
                  <div className="control">
                    <input className="input" type="text" id="articleSlug" name="articleSlug" placeholder="Text input" />
                  </div>
                </div>

                {/* TO DO: REGISTER THAT A USER IS SIGNED IN, THEN AUTOSIGN IT FOR THAT AUTHOR & THAT AUTHOR IS TIED TO A URL */}

                <div className="field">
                  <label className="label">Author</label>
                  <div className="control">
                    <input className="input" type="text" id="author" name="author" placeholder="Text input" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Author Slug</label>
                  <div className="control">
                    <input className="input" type="text" id="authorSlug" name="authorSlug" placeholder="Text input" />
                  </div>
                </div>

                <div className="field">
                  <label className="label" id="markdown">Body of Article</label>
                  <div className="control">
                    <textarea className="textarea" id="markdown" name="markdown" placeholder="Textarea"></textarea>
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
          </Form>

        {/*FOOTER SECTION*/}
        
        <Footer />
  
    </body>
  );
}