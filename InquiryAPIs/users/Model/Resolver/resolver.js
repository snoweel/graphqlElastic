
/**
 * declaring required modules
 */
const queryUtil = require('../../../DB/queryUtil.js')
/**
 * defining resolver functions 
 */
const resolvers = {
    Query: {
    /**
     * retrieve user data from db
     * @param {*} root 
     * @param {*} args 
     * @param {*} ctx 
     * @param {*} info 
     */
    getUserDetails(_, args,context){
       return {
        "id":"1",
        "fname":"Alex",
        "lname":"Galllio",
        "email":"dfdgf@hhj.com",
        "isActive":true,
        "birthDate":"12/12/1990",
        "pinCode":12133
    }
        //  if(args.userId){
        //     body={
        //         "query": {
        //           "match":{
        //               "query":args.userId,
        //               "field": id
        //           }
        //         }
        //       }
        //     return queryUtil.getUserDetails(context,'user',body)
        //  }
            
      },
    /**
     * find all active users
     * @param {*} root 
     * @param {*} args 
     * @param {*} ctx 
     * @param {*} info 
     */
    getActiveUsers(_,args,context){
      return [{
        "id":"1",
        "fname":"Alex",
        "lname":"Galllio",
        "email":"dfdgf@hhj.com",
        "isActive":true,
        "birthDate":"12/12/1990",
        "pinCode":12133
    }]
      // console.log("here")
      //   body={
      //       "query": {
      //         "match":{
      //             "query":true,
      //             "field": "isActive"
      //         }
      //       }
      //     }
      //     return queryUtil.getUserDetails(context,'user',body)
    }
  
    //,
    // /**
    //  * retrieves all todos of a particular user
    //  * @param {*} root 
    //  * @param {*} args 
    //  * @param {*} ctx 
    //  * @param {*} info 
    //  */
    // getToDos(root,args,ctx,info){
    //     if(args.userId)
    //         return query.getToDos(root,args,ctx,info)
    // },
    // /**
    //  * retrieves all active todos of a particular user
    //  * @param {*} root 
    //  * @param {*} args 
    //  * @param {*} ctx 
    //  * @param {*} info 
    //  */
    // getActiveToDos(root,args,ctx,info){
    //     if(args.userId)
    //         return query.getToDos(root,args,ctx,info)
    // }
     },
     User:{
      todos(userId){
        return {    
          id:"5",
          text:"now",
          userId:"1",
          done:"false",
          targetDate:"24/11/2017"
        }
      }
     }
     }
  
module.exports= resolvers;