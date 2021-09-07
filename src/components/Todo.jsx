import IonIcon from "@reacticons/ionicons"

const Todo = ({ text, todo, todos, setTodos }) => {
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return item
        }))
    }
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <div className="btn-group">
                <button onClick={completeHandler} className="complete-btn">
                    {todo.completed ? <IonIcon name="checkmark" /> : <IonIcon name="crop-outline" />}
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <IonIcon name="trash-outline" />
                </button>
            </div>
        </div>
    )
}

export default Todo;