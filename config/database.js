//declaring module
var elasticsearch = require('elasticsearch');
//instantiating elastic search client
exports.connectToES = function(){
	return new Promise(function(resolve,reject){
		var client = new elasticsearch.Client({
			host: 'localhost:9200',
			log: 'trace'
			});
			if(client) resolve(client)
			else reject ("error")
	})
}
