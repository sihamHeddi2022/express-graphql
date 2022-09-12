const {gql} = require("apollo-server-express")



exports.typeDefs = gql`
   type Room {
     id:ID,
     number:Int,
     floor:Int,
     bed:Int,
     avalaible:Boolean
   }
   type Query{
      sayMessage(message:String):String
      getRooms:[Room]
      getRoom(id:ID):Room
   }
   input roomInput {
    number:Int,
    floor:Int,
    bed:Int
   }
   type Mutation{
      createRoom(room:roomInput):Room
   }


`