# Simple Vite Client Server Template

## Features

- Simple React Nodejs client / server project template
- Client builds into nodejs public folder
- Server deployable to Caprover hosting container
- Separate client and server npm instances to keep server deploy lightweight

## Client

- Vite - built for speed
- Set up with Tailwind CSS and Flowbite
- Nextjs style page router
- Proxy configured for node server during development

## Server

- Nodejs express server
- Router / controller model
- Passthrough for React front-end router

## Project Structure

<pre>
|-- client
|   |-- layout
|   |   |-- Layout.jsx     <== Basic layout component
|   `-- src
|       |-- pages          <== Nextjs style page routing from here
|           |-- index.jsx 
`-- server
    |-- bin
    |   |-- www            <== Starts the express server
    |-- routes
    `-- controllers
</pre>

## Installation

Using npx, simple run:

    $ npx @ataye/client-server-vite-tailwind

then provide the project name and optionally install (runs `npm install` for client, server and in the project root)

If you want to manually run npm install, you'll need to run it it both client and server folders.

## Running the project

After installation, start the project by running

    $ npm run app

to run both client and server.  To run each separately:

    $ npm run client
    $ npm run server

server will run codemon to watch for changes.

## Deployment

Deployment command builds the client vite project and copies build output to /server/public, then packages the node project into a tarball and calls caprover-deploy to deploy to the caprover server for hosting (Caprover hosting not included ;] )

From the root of the project, run:

    $ npm run deploy

If you dont want to deploy with caprover, just build the project and it copies into the server public folder.  You can then deploy from there:

    $ npm run build-client
