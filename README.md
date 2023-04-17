This is a [Next.js](https://nextjs.org/) project demonstrating how to use [`imaginary-dev`](https://imaginary.dev/).

## Getting Started

This is a standard Next.js app. To get up and running, you can clone the repo and install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server, with your OpenAI API key as an environment variable:

```bash
OPENAI_API_KEY=sk-<your api key here> npm run dev
# or
OPENAI_API_KEY=sk-<your api key here> yarn dev
# or
OPENAI_API_KEY=sk-<your api key here> pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see a demo application, which is a blog posting application that uses OpenAI and GPT to provide helpful features for the end user. As you type in the blog input box, every 100 characters or so, the application suggests titles and tags for the post. There are also buttons to add another paragraph to the post or add a concluding paragraph.

To see how these are implemented, check out the files under `src/app/api`. They are all imaginary functions (functions with a declaration and a descriptive comment but no implementation) that are replaced at runtime with call to GPT.

## Learn More

To learn more about `imaginary-dev`, take a look at the following resources:

- [imaginary-dev documentation](https://imaginary.dev/docs) - learn about `imaginary-dev` features and API.
- [imaginary-dev github repo](https://github.com/imaginary-dev/imaginary-dev) - the github repo for the `imaginary-dev` code. Feel free to add issues, feedback, and contributions!
