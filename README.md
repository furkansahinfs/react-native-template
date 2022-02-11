# DELTA SMART MOBILE REACT NATIVE TYPESCRIPT PROJECT


## Notes
- clone the project and do "yarn install"
- CHANGE THE PACKAGE NAME FOR THE NEW PROJECT
- If icons not showing, link the module : https://github.com/oblador/react-native-vector-icons#installation


## Important

- project is created with yarn. use **yarn**.
- following **eslint rules** is required


## Highlighted Technologies

- typescript
- react
- react-native-elements
- react-native-paper
- react-navigation
- react-native-onesignal
- axios
- redux
- redux-thunk


## Project Folder Hierarchy

    │ 
    └── src
      ├── api               // axios instance, api controllers
      ├── assets            // things like image, icon, font etc
      ├── components        // reusable components
      ├── helpers           // project wide helper functions
      ├── hooks             // project wide react hooks
      ├── locales           // translations
      ├── navigation        // navigation configuration for pages
      ├── pages             // pages to be showed by react-navigation
      ├── providers         // components that initializes libraries
      ├── store             // redux storage, actions, reducers, sagas etc
      ├── types             // project wide typescript types
      ├── validators        // project wide validator functions


## Naming Convention

- `PascalCase` for component name,
- `PascalCase.tsx` for component files,
- `PascalCase.styles.ts` for components styles,
- `camelCase.ts` for other files such as controllers, redux files etc.

## Component creating

Always prefer function component and use hooks.

## Others

Please use -fix -feat prefix for the commit messages
