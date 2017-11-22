//declaring module
var elasticsearch = require('elasticsearch');
//instantiating elastic search client
exports.connectToES = async function(){
var client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
  });
}
