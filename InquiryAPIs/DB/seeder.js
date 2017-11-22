/*
* function to create index
*/
createIndex=function(indexName,typeName){
  return new Promise(function(resolve,reject){
      esClient.indices.create({
        index:indexName,
        type:typeName,
        id:1
      },function(err,resp){
        if(err){
          console.log(err);
        }
          console.log(resp);
          resolve("success");
          reject(err);
      });
  });
}

