var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "https://dynamodb.us-west-2.amazonaws.com",
  accessKeyId: "AKIAI5HCDUERQ6VUWIFQ",
  secretAccessKey: "VN/eJcJ8Dj4UHXI4Lqs+c+JIn+RJ+6+SKUAhIT9F"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "honda-sample2",
  ProjectionExpression: "GPS Lat, GPS Lon, GPS Alt"
};

// If desired to use attribute names
//
// var params = {
//   TableName: "honda-sample2",
//   ProjectionExpression: "#lat, #lon, #alt",
//   ExpressionAttributeNames: {
//     "#lat": "GPS Lat",
//     "#lon": "GPS Lon",
//     "#alt": "GPS Alt"
//   }
// };

console.log("Scanning Table.");

docClient.scan(params, (err, data) => {
  if (err) {
    console.error("Error processing request:", JSON.stringify(err, null, 2));
  } else {
    console.log("Received Data:", JSON.stringify(data, null, 2));
  }
});
