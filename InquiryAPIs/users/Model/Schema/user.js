
const typeDef=
` 
type User{
    userId:String!
    fname:String
    lname:String
    email:String
    isActive:Boolean
    birthDate:String
    pinCode:Int
}
type ToDo{
    id:String
    text:String
    userId:String
    done:Boolean
    targetDate:String
}
type Query{

 #defining find user query
    getUserDetails(id:String): User
 
# defining find active users query
    getActiveUsers : [User]

}
`

module.exports=typeDef


// # find all todos of a particular user 
// getToDos(userId:String) :  [ToDo]

// #  find active todos of user whose targetDate is atmost tomorrow
//   getActiveToDos (userId:String) : [ToDo]