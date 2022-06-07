import React from "react"
import { useParams } from "react-router-dom"

export default function EditPage() {
    const {id} = useParams();

    return (
        <div>
            1111111111111 {id}
        </div>
    )
}