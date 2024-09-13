<p align="center">
  <img src="public/assets/qik-serve-logo.svg" width="456px" height="120px"/>
</p>


<p align="center">
  <strong>
    Qik Server: The easy way to order food
  </strong>
</p>

> [!IMPORTANT]
> 👉🏻 Access: [https://qik-serve-web.vercel.app/](https://qik-serve-web.vercel.app/).

<p>&nbsp;</p>

<p align="center">
  <img src="public/assets/qik-serve.gif" width="80%" height="80%" max-width="100%" style="border-radius:8px" />
</p>

<p>&nbsp;</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/belapferreira/qik-serve-web">

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26">

  <img alt="GitHub stars" src="https://img.shields.io/github/stars/belapferreira/qik-serve-web?style=social">
</p>

<p align="center">
  <a href="#computer-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-settings">Settings</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_down_small-cloning-the-repository">Cloning the repository</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#beginner-starting-the-application">Starting the application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-techs--tools--resources">Techs | Tools | Resources</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

### :pushpin: Context

As a requirement of the **Qik Serve** technical assessment instructions, the library used in this project was React using the Next.js framework. Currently, the React's team recommends choosing one of the frameworks popular in the community:

> If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community.

**Major assumptions or design choices**

1) I've used TypeScript because you can save time by avoiding bugs due to typos and other errors, it offers faster performance and the IntelliSense works better, generating a superior developer experience.

2) I've chosen the Radix UI because of its optimization related to accessibility.

3) I've used Redux Toolkit to state management.

4) Tailwind CSS was chosen because we can use pre-built CSS classes for styling, which saves time and effort of writing custom CSS from scratch.

5) And finally, for the application deployment, I've picked the Vercel platform because I find it simple to use and also they can generate a preview version of the app for each commit done.


### :computer: Features

**Done**

- [x] List of sections available in the restaurant;
- [x] List of products per section;
- [x] Ability to add a product to the basket;
- [x] Ability to increase and decrease the product amount;
- [x] Responsive page.

**Todo**

- [ ] Searching.

### :gear: Settings

The settings to execute the application on your computer are listed below.

- [Git](https://git-scm.com);
- [Node](https://nodejs.org/);
- [Yarn](https://yarnpkg.com/).

### :arrow_down_small: Cloning the repository

1. Through the terminal, go to the directory where you want to have the repository cloned and run the following command:

```bash
# cloning the repository
git clone https://github.com/belapferreira/qik-serve-web
```

### :beginner: Starting the application

1. Open the code of the repo cloned, create a `.env.local` file and add a new variable called `NEXT_PUBLIC_API_URL` with the API base path (this should seem like `${baseUrl}/challenge/`).

2. Through the terminal, go to the directory where the repository was cloned and run the following command:

```bash
# installing dependencies
yarn install

# starting application
yarn dev
```

### :wrench: Techs | Tools | Resources

This project was developed using the following resources:

[Eslint](https://eslint.org/) | [React Icons](https://react-icons.github.io/react-icons/) | [Next.js](https://nextjs.org/) | [Prettier](https://prettier.io/) | [Radix UI](https://www.radix-ui.com/) | [Tailwindcss](https://tailwindcss.com/) | [TypeScript](https://www.typescriptlang.org/)


### :memo: License

This project is under MIT license. See [LICENSE](https://github.com/belapferreira/dhis2-dashboard/blob/master/LICENSE) for more information.

---

Developed by Bela Ferreira :blue_heart: Contact: https://www.linkedin.com/in/belapferreira :blush:
