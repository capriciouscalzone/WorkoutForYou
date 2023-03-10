const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Workout {
    _id: ID
    workoutName: String
    workoutTime: Int
    instructions: String
    tags: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
    workouts: [Workout]
    workout(_id: ID!): Workout 
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
    addWorkout(workoutName: String!, workoutTime: Int!, instructions: String!, tags: [String] ): Workout
    updateWorkout(_id: ID!, workoutName: String, workoutTime: Int, instructions: String, tags: [String] ): Workout 
    deleteWorkout(_id: ID!): Workout
  }
`;

module.exports = typeDefs;
