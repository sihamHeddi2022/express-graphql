const { Room } = require("../models/room.schema");


exports.resolvers = {
    Query:{
        sayMessage:(_parent,args,_context)=>{
            console.log( args.message);
            return args.message
        },
        getRooms:async()=>{
            return await Room.find({})
        },
        getRoom:async(_parent,args,_context)=>{
            return await Room.findById(args.id)
        },
    },
    Mutation:{
        createRoom: async (_parent,{room},_context)=>{

          return await new Room(room).save()
        }
    }

}