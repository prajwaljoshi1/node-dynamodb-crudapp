var AWS = require('aws-sdk');

var docClient = AWS.DynamoDB.DocumentClient();

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var table =  'Movies';

var year =  2015;

var title =  'The Big New Movie';

var params = {
    TableName: table,
    key:{
        "year": year,
        "title": title
    },
    UpdateExpression: "set info.rating = :r, info.plot=:p, info.actors=:a",
    ExpressionAttributeValues:{
        ":r":5.5,
        ":p":"Everything happens all at once.",
        ":a":["Larry", "Moe", "Curly"]
    },
    ReturnValues:"UPDATED_NEW"

}

docClient.update(params, function(err, data){
    if(err){
        console.log("ERROR",err );
    } else{
        console.log("UPDATED SUCCESSFULLY", JSON.stringify(data));
    }
});
