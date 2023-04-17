import { makeImaginaryNextFunction } from "@imaginary-dev/nextjs-util";

/**
 * This function takes in the text from a blog post and returns 5 snappy, exciting, and creative
 * titles for the blog post that will entice a reader to click on them. The titles are different from each
 * other in interesting ways.
 *
 * @param blogPostText - The text of the blog post for which to generate titles
 *
 * @returns an array of strings, each of which is a snappy, descriptive title for the blog post
 *
 * @imaginary
 */
declare function titlesForBlogPost(blogPostText: string): Promise<string[]>;

export const GET = makeImaginaryNextFunction(
  titlesForBlogPost,
  "/api/titlesForBlogPost"
);
