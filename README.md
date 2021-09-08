# Blue Bite Assessment

## Introduction

Imagine you are provided an API where you need to programatically render components on a page that an end user can view or interact with it. Each page will have a corresponding API building off of the previous one in increasing complexity to render the content. Within those pages you will need to build and use components to match the provided mockups ([Figma](https://www.figma.com/proto/9NtrKC7KAudIqARPU4OzfL/Front-End-Assessment?page-id=0%3A1&node-id=40%3A16&viewport=241%2C48%2C0.73&scaling=scale-down&starting-point-node-id=40%3A16&show-proto-sidebar=1)).

To get started a react project is included. TypeScript is recommended but you can alternatively use straight JavaScript. CSS modules are supported using the `.module.css` extension alternatively you can use any styling tooling/library you choose. Feel free to add other dependencies as
necessary.

### API

All responses return either a `data` property containing responses contents in the case of an `ok` response. Alternatively it may return an `error` property.

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

## Requirements

### Part 1
* Create image component
* Create weather component
* Render components on page

#### Notes
* Use the id (found in the pages path) via API to look up the Page entity mentioned in introduction.
* Cross referencing the Page entity and the mockups to create the `image` and `weather` components. The weather component will also require use of it's own API route described above in the introduction section.
* Using these components and the Page entity to render the page. You can assume the list with id 0 will always be the pages root.

#### Mockups
* [Part 1](https://app.zeplin.io/project/610d6d9d1936aa12f64a3a22/screen/612d1250e46281108433cf51)

### Part 2
* Create Button Component
* Create Condition Component
* Setup Variables

#### Notes
This page additionally includes variables, as well as 2 new components: button, and condition.

* Variables are set to their initial values when the page is loaded.
* Buttons when pressed change a variables current value.
* Conditions are components that render their `children` list when a specific variable is equal to the given value.

On completion this page will look like the mockups and the show and hide buttons should function.

#### Mockups
* [Part 2](https://app.zeplin.io/project/610d6d9d1936aa12f64a3a22/screen/612d1250a7910b16428c423f)

### Part 3
* Test previous work against a more complex page
* Fix any issues


#### Notes

This page has show and hide buttons as well as buttons which rotation through the different \
locations. There is no additional functionality but you should check your implementation against \
the more complex page configuration and resolve any issues. Again you can also check your \
implementation against the mockups.

#### Mockups
* [Part 3](https://app.zeplin.io/project/610d6d9d1936aa12f64a3a22/screen/612d1250690879161563f338)
* [Part 3 - NYC](https://app.zeplin.io/project/610d6d9d1936aa12f64a3a22/screen/612d125010adfb126b0a2b3a)
* [Part 3 - SF](https://app.zeplin.io/project/610d6d9d1936aa12f64a3a22/screen/612d12505c510a15d11d2359)
* [Part 3 - CH](https://app.zeplin.io/project/610d6d9d1936aa12f64a3a22/screen/612d125043099410f15afeb8)


## Submission
Upon completion of the assessment, please email your point of contact at Blue Bite a link to the repository.


## Local Setup

1. Clone repository into your GitHub account
2. Install Node version specified in `.nvmrc`
3. Use Yarn or NPM to install dependencies
4. Use 2 terminal sessions to start both the development server and the API via:
    a. `yarn run start` OR `npm run start`
    b. `yarn run start-server` OR `npm run start-server`
5. Follow steps in the `Requirements` section. Commit your work as needed.

### Available Scripts

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

