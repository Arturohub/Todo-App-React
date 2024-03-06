import { useState } from "react"
import styles from "./form.module.css"

export default function Form({todos,setTodos}){

    //const [todo, setTodo] = useState(""); EMPTY STRING
    const [todo, setTodo] = useState({name: "", done: false}); //OBJECT
    
    function handleSubmit(e){
        e.preventDefault(); //Impide que al hacer click, se elimine la informacion escrita en el textbox
        setTodos([...todos,todo]);
        setTodo({name: "", done: false}) // Para que una vez metes un todo y haces click, se reinicie la barra
    }
    
    return ( 
        
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}> 
                <input className={styles.modernInput} onChange={(e)=>setTodo({name: e.target.value, done: false})} value={todo.name} type="text" placeholder="Enter todo item"/>
                <button className={styles.modernButton} type="submit">Add</button>
            </div>
        </form>
     
    
    )

}