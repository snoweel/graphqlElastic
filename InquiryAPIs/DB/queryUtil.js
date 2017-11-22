
/**
 * defining queries
 *
 * 
 * */
const indexName="LearningPath";
/**
 * 
 * @param {*} text 
 * @param {*} indexName 
 * @param {*} typeName 
 * @param {*} callback 
 */
exports.getUserDetail=function (typename, body) {
   return new Promise(function(resolve,reject){
    esClient.search({
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
exports.getActiveUsers=function (typename, body) {
    return new Promise(function(resolve,reject){
     esClient.search({
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