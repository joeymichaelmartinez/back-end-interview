# Nutrien Take Home Assignment Information

## Overview
This Solution to Nutrien's backend take home assignment was created by Joey Martinez. This Readme will explain how the application works as well as how to build and run the application using Docker.

## Technology used

This application is written in TypeScript, and uses Express.js to handle the majority of the API service. Chart.js was used to generate the graph used to describe the data in the generated histogram. CSV-Parser and strip bom stream were used to properly parse the CSV data so that it could be to generate the histogram programmatically.

## Setup
### Necessary Installed Items
- Node.js
- TypeScript

## Instructions on How to Run the Application

### Run using Docker

    docker-compose build 
    docker-compose up

### Run Locally
	npm install
    npx tsx src/app.ts
    
## How to Access the Service

Application runs at http://localhost:3000/. The root of the application will explain how to generate the histograms. A histogram can be generated from any of the columns in the projections2021.csv file.
Example URL:

    http://localhost:3000/Commodity/histogram


