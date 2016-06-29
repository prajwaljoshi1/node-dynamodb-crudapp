//Read an item

var AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-west-2',
    endpoint: 'http://localhost:8000'
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = 'Movies';

var year = 2015;

var title = "The Mig New Movie";

var params = {
        TableName: table,
        key:{
            "year":year,
            "title":title
        }
};

docClient.get(params, function(err, data){
     if(err){
        console.log("ERROR", err);
    } else{
        console.log('GET ITEM SUCCEED', JSON.stringify(data, null, 2));
    }
});