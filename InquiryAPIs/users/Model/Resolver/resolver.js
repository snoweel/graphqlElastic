
/**
 * declaring required modules
 */
const {query} = require('../../DB/queryUtil')
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
         if(args.userId)
            return query.getUserDetails(root,args,ctx,info)
      },
    /**
     * find all active users
     * @param {*} root 
     * @param {*} args 
     * @param {*} ctx 
     * @param {*} info 
     */
     getActiveUsers(root,args,ctx,info){
        return query.getActiveUsers(root,args,ctx,info)

    },
    /**
     * retrieves all todos of a particular user
     * @param {*} root 
     * @param {*} args 
     * @param {*} ctx 
     * @param {*} info 
     */
    getToDos(root,args,ctx,info){
        if(args.userId)
            return query.getToDos(root,args,ctx,info)
    },
    /**
     * retrieves all active todos of a particular user
     * @param {*} root 
     * @param {*} args 
     * @param {*} ctx 
     * @param {*} info 
     */
    getActiveToDos(root,args,ctx,info){
        if(args.userId)
            return query.getToDos(root,args,ctx,info)
    }
    }
    }
  
module.exports= resolvers;