# CCC developer documentation

This is the repo for the server for the famous Croatian Crime Court application.

# Prerequisites

* [NodeJS](https://nodejs.org)
* [PostgreSQL](https://www.postgresql.org/)
* 

# Getting started

Start by cloning the repo through a `git clone [repo]` followed by a `npm install` to get all dependencies.

Make sure that PostgreQSL is running and you also need to initialize the database (once) by starting
the postgres command line and run `CREATE DATABASE ccc`.

# Start server

The server is started by running `node index.js`. All postgres models, associations etc. are created and also
seeded with some dummy data. 
