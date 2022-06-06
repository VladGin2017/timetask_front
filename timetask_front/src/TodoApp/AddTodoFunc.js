import React, { useState } from "react";
import AddTodoApp from "./AddTodoApp";


export default function AddTodoFunc() {
    const [isOpen, setIsOpen] = useState(false);
        return(
            <React.Fragment>
                <button className="btn btn-addtask" onClick={() => setIsOpen(true)}>+ Добавить</button>
                {isOpen && (
                    <button className="btn btn-addclose" onClick={() => setIsOpen(false)}>Закрыть</button>
                )}

                {isOpen && (
                    <div>
                        <AddTodoApp></AddTodoApp>
                    </div>
                )

                }
            </React.Fragment>
        )
    }
