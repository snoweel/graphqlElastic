
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
exports.getUserDetail=function (root, args,ctx,info) {
   return new Promise(function(resolve,reject){
    const typeName="users"
    esClient.search({
        index: indexName,
        type: typeName,
        body: {
          query: {
            match:{
                query:args.userId,
                field:id
            }
          }
        }
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