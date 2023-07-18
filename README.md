# macmenuapp

# Background

This project has been made in React Native using Expo and Typescript for run the project

![macmenuapp](https://github.com/LeoReyesDev/macmenuapp/assets/19556132/7a613634-a954-495e-8101-fb1d0a11dacf)

## Install app

```
1- install node_modules with yarn or npm install
2- run application yarn start
```

# Technical Approaches

Usingg Typesscript its good practice because, we can prevent several errors for type in variables

# Technical Design

## Consuming rest API based in Javascript

Consuming rest API based in Javascript

```
usseEffect()
fetch and Promises
useEffect(() => {
fetch(myEndPoint)
.then((resp) => resp.json())
.then((data) => setMenu(data.menus))
.catch((error) => {
console.error("There was an error!", error);
});
}, []);
```

I created diferent components for consuming this data the modal and menu items has been made
with rendering and nested components using props for pass and inject data from one component to window modal.

Created one navigation component for navigate between screens
