Required
========
MongoDB database

Node to start index.js everytime server restarts


Docs
----
To start API server
```
node index.js
```

Add MongoDB
```
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install mongodb-server
$ sudo service mongod start
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
* SocketIO - Server


To do
-----
Add externally accessible url - NoIP service or similar

Add location, daily, weekly, monthly, yearly results to API?

Add service bus for queuing ability in case of network connection loss (may not be necessary if server is same place as weather station)
