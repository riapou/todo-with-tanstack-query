export default function App() {
  return(
    <div>
      <div className="addTodo"><form action="">
        <label htmlFor="todo">Enter Your Todo : </label>
        <input type="text" name="todo" id="todo" placeholder="your todo"  />
        <button type="submit">Add Todo</button>
      </form></div>
      <div className="todoList"></div>
    </div>
  )
}