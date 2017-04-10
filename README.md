How to run this solution:

1. Clone this repo
2. From within the project, run `npm install`
3. Run `npm start` to start the server (will start on localhost:3000)
4. Make a post request to localhost:3000 with indicating that content type is json and with the matrix in the request body (example using curl):
`curl -X POST -H "Content-Type: application/json" -d "[[3,1,4],[1,5,9],[2,6,5]]" http://localhost:3000/; echo`

(If you want to run the tests I wrote for the minimum weight path functionality, run `npm test`)
