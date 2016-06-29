var AWS = require('aws-sdk');

AWS.config.update({

    region:'us-west-1',
    endpoint:'http://localhost:8000'

});

var dynamoDb = new AWS.DynamoDB();

var params = {
    TableName: "Movies",
    KeySchema: [
        {
            AttributeName: "year",
            KeyType :'HASH'
        },
        {
            AttributeName:'title',
            KeyType : "RANGE"
        }
    ],
      AttributeDefinitions: [       
        { AttributeName: "year", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" }
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 10
    }
};

dynamoDb.createTable(params,function(err, data){
    if(err){
        console.log("ERROR", err);
    } else{
        console.log("TABLE CREATED");
    }
})