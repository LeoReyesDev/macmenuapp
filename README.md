# macmenuapp

# Background

This project has been made in React Native using Expo and Typescript

# Technical Approaches

Usingg Typesscript its good practice because, we can prevent several errors for type in variables

# Technical Design

## Consuming rest API based in Javascript

Consuming rest API based in Javascript
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

I created diferent components for consuming this data the modal and menu items has been made
with rendering and nested components using props for pass and inject data from one component to window modal.

Created one navigation component for navigate between screens
