var AWS = require('aws-sdk');

AWS.config.update({ 
    region: 'us-east-2',
    endPoint: 'http://localhost/8000'
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = 'movies';

var year = 2016;

var title = ' the big new movie';

var params = {
    TableName : table,
    Item:{
        "year" : year, 
        "title" : title,
        "info" : {
            plot: 'nothing happens at all ....',
            ratings: 0
        }
    }
}

console.log("adding a new item");

docClient.put(params, function(err, data){
    if(err){
        console.log(err)
    }else{
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});