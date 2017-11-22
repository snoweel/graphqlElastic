
/**
 * declaring required modules
 */
const fs=require('fs')
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

/*
* function to check whether index exists or not
*/
indexExists=function(indexName) {
    // return esClient.indices.exists({index:indexName});
    return new Promise(function(resolve,reject){
      esClient.indices.exists({
        index:indexName
      },function(err,exists){
        if(err) console.log(err);
        if(exists)   resolve(true);
        else reject(false);
      });
    });
}

addDoc=function(indexName,typeName){
    var values=fs.readSync('./userData.json');
    // values={
    //     title:cards[i].title,
    //     text:cards[i].text,
    //     color:cards[i].color,
    //     collaborator:cards[i].collaborator,
    //     cardId:cards[i].cardId,
    //     pinned:cards[i].pinned,
    //     image:cards[i].image
    //   }
        // console.log("adding doc");
        esClient.bulk({
            index: indexName,
            type: typeName,
            body:values
        })
}
var index="assignment",type="user";
if(!indexExists(index)){
    createIndex(index,type).then(function(){
        addDoc(index,type)
    })
}