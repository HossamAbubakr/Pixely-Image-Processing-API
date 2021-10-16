# Pixely, Image Processing API

<p align="center">
  <img src="">
</p>

## Table of Contents

* [Summary](#Summary)

* [Technologies](#Technologies)

* [Usage](#Usage)

* [Testing](#Testing)

* [Structure](#Structure)

* [Usage and Installation](#usage-and-installation)

## Summary

Pixely is an image processing API that I made as part of my Full Stack JavaScript Developer Nanodegree from Udacity.

Currently the functionality is limited to resizing and processing images and setup an image caching system.

It demonstrates my understanding of Typescript, NodeJS, NodeJS Middleware, Express, Express Router, Endpoints, Node File Management, Unit Testing.

## Technologies

NodeJS was used for the runtime.  
Express was used for the backend.   
Jasmine was used for the unit testing.  
Sharp was used for the image processing.  
Typescript was used as the programming language.  

## Usage

Endpoints

| Endpoint | Request | Parameters | Response | Usage
| ------------ | ------------ | ------------ | ------------ | ------------ |
| **/** | **GET** | **N/A** | **200** | **Root Route** |
| **convert** | **GET** | **filename, width, heigh** | **200**| **Resize Images** |

## Testing

A full suite of tests are ready to use that cover all endpoints and helper functions

You can use
```
npm run jasmine
```
To start the unit testing

## Structure 
```
+---assets
|   |   encenadaport.jpg
|   |   fjord.jpg
|   |   icelandwaterfall.jpg
|   |   palmtunnel.jpg
|   |   santamonica.jpg
|   |   test.png
|   |
|   \---thumbnails
|
+---spec
|   \---support
|           jasmine.json
|
\---src
    |   index.ts
    |
    +---middleware
    |       logger.ts
    |
    +---routes
    |   |   index.ts
    |   |
    |   \---api
    |           convert.ts
    |
    +---tests
    |   +---endpointsSpecs
    |   |       convertSpec.ts
    |   |       indexSpec.ts
    |   |
    |   +---helpers
    |   |       reporter.ts
    |   |
    |   \---utilitiesSpecs
    |           fileHandlerSpec.ts
    |
    \---utilities
            fileHandler.ts
            imageHandler.ts
```


## Usage and Installation

You can get the project up and running in simple steps.

```
npm install
```
Then you can use the following endpoint to process your images.

```
http://localhost:5000/convert?filename=fjord&width=100&height=500
```
