import React, { useEffect } from 'react'
import axios from 'axios'
import {useState,UseEFFect} from 'react'

export default function Axios1() {
    const[Todos,setTdods]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/todos")
        .then((response)=>{
            console.log(response.data);
            console.log(response.data.todos);
            setTdods(response.data.todos);
              
        })
    })
  return (
    <div>todos
        <table>
           <thead>
            <tr>
            <th>s.no</th>
            <th>title</th>
            <th>status</th>
            </tr>
           </thead>
           <tbody>
            {
                Todos.map((todo)=>{
                    return(
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.todo}</td>
                            <td>{todo.completed?"yes":"no"}</td>
                        </tr>
                    )


                })
            }
        </tbody>
        </table>
    </div>
  )
}
