
/**
 * defining queries
 *
 * 
 * */
const indexName="assignment01";
// const client=require('../../config/database')
// client.connectToES().then(function(esClient){
   /**
    * 
    * @param {*} text 
    * @param {*} indexName 
    * @param {*} typeName 
    * @param {*} callback 
    */
   exports.getUserDetail=function (context,typename, body) {
       console.log("here")
       return {"fname":"Alex"}
    //   return new Promise(function(resolve,reject){
    //    context.esClient.search({
    //        index: indexName,
    //        type: typeName,
    //        body: body
    //    }).then(function (res) {
    //        var results = res.hits.hits.map(function(hit){
    //          console.log("hit source : "+JSON.stringify(hit._source));
    //            resolve(hit._source)
    //        });
    //    }).catch(function (err) {
    //        console.log("Error",err);
    //        reject(err);
    //      });
    //   })
           
   }
   exports.getActiveUsers=function (context,typename, body) {
       return new Promise(function(resolve,reject){
        context.esClient.search({
            index: indexName,
            type: typeName,
            body: body
        }).then(function (res) {
            var results = res.hits.hits.map(function(hit){
              console.log("hit source : "+JSON.stringify(hit._source));
                resolve(hit._source)
            });
        }).catch(function (err) {
            console.log("Error",err);
            reject(err);
          });
       })
            
    }
// })
