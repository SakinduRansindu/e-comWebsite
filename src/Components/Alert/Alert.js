import React from 'react'

export default function Alert({ title, message, type = 'alert-danger' }) {
    return (
        <div className={"alert "+type} role="alert">
            <strong>{title}</strong> {message}
        </div>
    )
}
