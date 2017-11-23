//declaring module
var elasticsearch = require('elasticsearch');
var index="assignment",type="user";
//instantiating elastic search client
exports.connectToES = function(){
	return new Promise(function(resolve,reject){
		var esClient = new elasticsearch.Client({
			host: 'localhost:9200',
			log: 'trace'
			});
			initIndex(index,type,esClient)
			if(esClient) resolve(esClient)
			else reject ("error")
	})
}
/**
 * create index
 */
createIndex=function(indexName,typeName,esClient){
	return new Promise(function(resolve,reject){
		esClient.indices.create({
		  index:indexName,
		  type:typeName,
		  id:1
		},function(err,resp){
		  if(err){
			console.log(err);
			reject(err);
		  }
			else{
				console.log(resp);
				resolve("success");
			}
			
		});
	});
  }
  
  /*
  * function to check whether index exists or not
  */
  indexExists=function(indexName,esClient) {
	  // return esClient.indices.exists({index:indexName});
	  return new Promise(function(resolve,reject){
		esClient.indices.exists({
		  index:indexName
		},function(err,exists){
		  if(err) {
			  console.log(err)
			  reject(err)
		  }
		  console.log("exist",exists);
		  if(exists)   resolve(true);
		});
	  });
  }
  
  addDoc=function(indexName,typeName,esClient){
	  var values=fs.readSync('./userData.json');
		  console.log("adding doc",values);
		  esClient.bulk({
			  index: indexName,
			  type: typeName,
			  body:values
		  })
  }
  initIndex=function(index,type,esClient){
	console.log("initialize")
	if(!indexExists(index,esClient)){
		console.log("creating index")
	  createIndex(index,type,esClient).then(function(){
		  addDoc(index,type,esClient)
	  })
  }
  }