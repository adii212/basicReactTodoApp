/*
  *Todo {
    title: string,
    description: string,
    completed: boolean
  }
*/

const mongoose = require("mongoose");
// mongodb+srv://adityapandey14980:HjaEHpHKa2hk3wD1@adicluster.svlp38i.mongodb.net/todos

mongoose.connect("mongodb+srv://adityapandey14980:HjaEHpHKa2hk3wD1@adicluster.svlp38i.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}