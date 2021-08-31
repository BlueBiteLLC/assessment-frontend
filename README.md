# Blue Bite Front-End Assessment

## Overview

This assessment should take ~3 hours. It consists of 3 parts

1. Page One
    * Create Image Component
    * Create Weather Component
    * Render Page

2. Page Two
    * Create Button Component
    * Create Condition Component
    * Setup Variables

3. Page Three
    * Test previous work against a more complex page
    * Fix any issues

A base React project is included. TypeScript is recommended but you can alternatively use straight \
JavaScript. CSS modules are supported using the `.module.css` extension alternatively you can \
use the styling tooling/library of your choice. Feel free to add other dependencies if you see \
necessary.

This project also includes a mock API. It needs to be started seperately with the `start-server` \
script.

## Setup

1. Clone repo
2. Create branch `test-run`
3. Install Node version specified in `.nvmrc`
4. Use Yarn or NPM to install dependencies
5. Use 2 terminal sessions to start both the development server and the mock API via:
    a. `yarn run start` OR `npm run start`
    b. `yarn run start-server` OR `npm run start-server`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start-server`

Runs mock API by default this is hosted at http://localhost:3030

### `yarn test` (Usage optional)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Server Endpoints

By default the server base is at http://localhost:3030

All responses return either a `data` component containing the contents or an `error` component in
case of failure.

### GET /page/:id

    Returns a description of the page. Contains several parts:
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

### GET /integrations/weather?lat=<lat>&lon=<lon>

    Returns the weather information for specific coordinates used in pages.

## Instructions

### Page One
