import IonIcon from "@reacticons/ionicons"

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form>
            <input value={inputText} className="todo-input" onChange={inputTextHandler} type="text" />
            <button className="todo-button" onClick={submitTodoHandler} type="submit">
                <IonIcon name="add"></IonIcon>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form