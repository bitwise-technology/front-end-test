# ![gitHub Search logo](https://github.com/GersonDantas/front-end-GitHub-Search/blob/gerson-dantas/src/assets/images/Logo.svg) gitHub user search

Hey! This is another test I did. It has a dark theme option, as you can see below in the demo:

## [Site Running](https://githubsearch-ax9jdzhgz-front-end-test-gerson-dantas.vercel.app/)

![test ronning](https://github.com/GersonDantas/img/blob/main/SearchGitHub.gif)

 I use NextJS, but implementing the architecture that React uses, (Client Side). You can see the implementation of the React architecture in the "ClientOnly" component:

```bash
  useEffect(() => {
    setHasMounted(true)
  }, [])
```

When using "useEffect", I guarantee that it is on the "client side". Because useEffect only runs on the client side.

I use grapQL with [apolloClient](https://www.apollographql.com/docs/react/get-started/) to integrate with
[gitHub grapQL api](https://docs.github.com/pt/graphql)

And for styling, use the [material-ui](https://material-ui.com/pt/components/material-icons/). Here you will notice a peculiarity, as I like to separate all styles files in the "styles" folder

## Getting Started

Before running the project, create a ".env" file to contain an environment variable responsible for authenticating to gitHub. Because gitHub's grapQL api only accepts requests from applications that [create a personal access token](https://docs.github.com/pt/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). I created an example file (.env.example) that contains the way you should create the variable:

```bash
NEXT_APP_GITHUB_AUTH_TOKEN=GITHUB_0AUTH
```
Replace GITHUB_0AUTH with personal access token

```bash
npm run dev
# or
yarn dev
```

## Technologies used

    - @apollo/client: ^3.4.2;
    - @material-ui/core: ^4.12.3;
    - @material-ui/icons: ^4.11.2;
    - graphql: ^15.5.1;
    - next: 11.0.1;
    - nprogress: ^0.2.0;
    - react: 17.0.2;
    - react-dom: 17.0.2;
    - react-infinite-scroll-component: ^6.1.0;
    - typescript: ^4.3.5;
    - uuid: ^8.3.2 .

