# Blue Bite Front-End Assessment

## Overview

This assessment should take ~3 hours. In that time you will build components and use \
them in combination to render 3 pages. Each page builds off the previous one in increasing \
complexity. These pages should be built programmatically based on the corisponding Page entity \
returned by the API. Mockups for for each page are also provided.

A base React project is included. TypeScript is recommended but you can alternatively use straight \
JavaScript. CSS modules are supported using the `.module.css` extension alternatively you can \
use any styling tooling/library you choose. Feel free to add other dependencies if you see \
necessary.

This project also includes an API. It needs to be started seperately with the `start-server` \
script. See the `Available Scripts` section for more details.

## Project Setup

1. Clone repo
2. Create branch `test-run`
3. Install Node version specified in `.nvmrc`
4. Use Yarn or NPM to install dependencies
5. Use 2 terminal sessions to start both the development server and the API via:
    a. `yarn run start` OR `npm run start`
    b. `yarn run start-server` OR `npm run start-server`
6. Follow steps in the `Instruction` section. Commit your work as needed.
7. On completion push up your branch.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start-server`

Runs API by default this is hosted at http://localhost:3030

### `yarn test` (Usage optional)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Server Endpoints

By default the server base is at http://localhost:3030

All responses return either a `data` property containing responses contents in the case of an \
`ok` response. Alternatively it may return an `error` property.

### GET /page/:id

Returns a description of the page. Containing several parts:

```
    {
        lists: Array<{
            id, // ID used to look up the list
            components, // Ordered list of component ids
        }>;
        components: Array<{
            id, // ID used to look up component
            type, // The type of the component (ex: `image`, `weather`)
            options, // An object with options specific to the component type
        }>;
        variables?: Array<{
            name, // Variable name
            type, // Variable type (ex: `string`)
            initialValue, // Value the variable starts at
        }> // optional not used on page-one. Should be page specific.
    }
```

### GET /integrations/weather?lat=<lat>&lon=<lon>

Returns weather information for specific coordinates used in pages.

## Instructions

### Page One
    * Create Image Component
    * Create Weather Component
    * Render Page

### Page Two
    * Create Button Component
    * Create Condition Component
    * Setup Variables

### Page Three
    * Test previous work against a more complex page
    * Fix any issues


### Page One

1. Use the id (found in the pages path) via API to look up the Page entity (See the \
`Server Endpoints` section).
2. Cross referencing the Page entity and the mockups to create the `image` and `weather` \
components. The weather component will also require use of it's own API route described above \
in the `Server Endpoints` section.
3. Using these components and the Page entity to render the page. You can assume the list with \
id 0 will always be the pages root.

### Page Two

This page additionally includes variables, as well as 2 new components: button, and condition. \

* Variables are set to their initial values when the page is loaded.
* Buttons when pressed change a variables current value.
* Conditions are components that render their `children` list when a specific variable is equal \
to the given value.

On completion this page will look like the mockups and the show and hide buttons should function.

### Page Three

This page has show and hide buttons as well as buttons which rotation through the different \
locations. There is no additional functionality but you should check your implementation against \
the more complex page configuration and resolve any issues. Again you can also check your \
implementation against the mockups.
