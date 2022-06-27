import React from "react";
import TodoListApp from "../TodoApp/TodoListApp"
import TodoListIncoming from "../TodoApp/TodoListIncoming";
import SubMenu from "../SubMenu/SubMenu";

const IncomingTodos = () => {
    return (
        <div className="main-container-view">
                <div className="submenu__container">
                    <SubMenu></SubMenu>
                </div>
                <div className="page-container">
                    <div className="page-info">
                        <h1 className="page-title">Входящие</h1>
                    </div>
                    <div>
                        <TodoListIncoming></TodoListIncoming>
                    </div>
                </div>
            </div>
        // <div className="page-container">
        //     <div className="page-info">
        //         <h1 className="page-title">Входящие</h1>
        //     </div>
        //         <TodoListIncoming></TodoListIncoming>
        // </div>
    )
}

export default IncomingTodos;