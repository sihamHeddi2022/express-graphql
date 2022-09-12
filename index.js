const express = require("express")
const {ApolloServer} = require('apollo-server-express')
const mongoose = require("mongoose")
const {typeDefs} = require("./resolvers/typeDefs")
const {resolvers} = require("./resolvers/resolver")
const {
    ApolloServerPluginLandingPageGraphQLPlayground
  } = require( "apollo-server-core");
  
const dbURI = "mongodb://localhost:27017/myRandomDB"

 mongoose.connect(dbURI,async function (err) {
    if(err) throw err
    const app = express()

    const apollo = new ApolloServer({
        resolvers,
        typeDefs,

        plugins: [
          ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
    })
    await apollo.start()
    apollo.applyMiddleware({app:app,path:"/gql"})

   

    app.listen(8080)
})