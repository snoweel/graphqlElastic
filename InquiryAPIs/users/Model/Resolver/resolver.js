
/**
 * declaring required modules
 */
const query = require('../../../DB/queryUtil.js')
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
     getUserDetails(root, args,ctx,info){
         if(args.userId){
            body: {
                query: {
                  match:{
                      query:args.userId
                      field: id
                  }
                }
              }
            return query.getUserDetails('users',body)
         }
            
      },
    /**
     * find all active users
     * @param {*} root 
     * @param {*} args 
     * @param {*} ctx 
     * @param {*} info 
     */
     getActiveUsers(root,args,ctx,info){
        body: {
            query: {
              match:{
                  query:true
                  field: isActive
              }
            }
          }
          return query.getUserDetails('users',body)
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
     }
     }
  
module.exports= resolvers;