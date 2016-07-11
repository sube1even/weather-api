Info
====
This is a work in progress to develop my js skills in developing an API with ExpressJS and MongoDB. Currently this is an API to take care of writing to MongoDB from a RaspberryPi with connected sensors. It will also provide a service for displaying results to an Angular2 app in the future.

Repo for RaspberryPi https://github.com/sube1even/weather-rpi

Required
--------
* Install and run MongoDB database service
* NPM install to add all required Node packages
* Node to start index.js everytime server restarts


Docs
----
Add MongoDB
```
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install mongodb-server
$ sudo service mongod start
```

To start API server
```
node index.js
```

GET to /api/rainfall shows all results
```
http://localhost:3000/api/rainfall
```

POST to /api/rainfall creates an entry eg.
`{"amount":"1","date":"Sat Jul 01 2016 00:43:59 GMT+0930 (ACST)"}`


Technologies
------------
* Node
* Express - Route management
* MongoDB - Database storing rainfall data
* SocketIO - (Server) Update SocketIO client to deliver realtime weather to Angular2 frontend


To do
-----
Add externally accessible url ('NoIP' service or similar)

Add location, daily, weekly, monthly, yearly results to API?

Add service bus for queuing ability in case of network connection loss (may not be necessary if server is same place as weather station)
