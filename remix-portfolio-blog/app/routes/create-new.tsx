import { Form, Link, useActionData } from "@remix-run/react";
import { ActionFunction, json, redirect, Response } from "@remix-run/node";
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

  const errors = {
    articleTitle: articleTitle ? null : 'Article Title is required',
    articleSlug: articleSlug ? null : 'Article Slug is required',
    markdown: markdown ? null : 'Markdown is required',
    author: author ? null : 'Author Name is required',
    authorSlug: authorSlug ? null : 'Author Slug is required',
  };

  const hasErrors = Object.values(errors).some(errorMessage => errorMessage);
  if (hasErrors) {
    return json(errors);
  }

  await createPost({articleTitle, articleSlug, markdown, author, authorSlug});

  return redirect('/');
};

export default function Index() {
  const errors = useActionData();
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
                  <label className="label">Article Title: {errors?.articleTitle ? (
                    <em className="has-text-danger">{errors.articleTitle}</em>
                  ) : null}</label>

                  <div className="control">
                    <input className="input" type="text" id="articleTitle" name="articleTitle" placeholder="Text input" />
                  </div>
                </div>

                <div className="field">
                  <label className="label" id="articleSlug">Article Slug: {errors?.articleSlug ? (
                    <em className="has-text-danger">{errors.articleSlug}</em>
                  ) : null}</label>
                  <div className="control">
                    <input className="input" type="text" id="articleSlug" name="articleSlug" placeholder="Text input" />
                  </div>
                </div>

                {/* TO DO: REGISTER THAT A USER IS SIGNED IN, THEN AUTOSIGN IT FOR THAT AUTHOR & THAT AUTHOR IS TIED TO A URL */}

                <div className="field">
                  <label className="label">Author: {errors?.author ? (
                    <em className="has-text-danger">{errors.author}</em>
                  ) : null}</label>
                  <div className="control">
                    <input className="input" type="text" id="author" name="author" placeholder="Text input" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Author Slug: {errors?.authorSlug ? (
                    <em className="has-text-danger">{errors.authorSlug}</em>
                  ) : null}</label>
                  <div className="control">
                    <input className="input" type="text" id="authorSlug" name="authorSlug" placeholder="Text input" />
                  </div>
                </div>

                <div className="field">
                  <label className="label" id="markdown">Body of Article: {errors?.markdown ? (
                    <em className="has-text-danger">{errors.markdown}</em>
                  ) : null}</label>
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