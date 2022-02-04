import React from 'react'

function TableData (props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.titulo}</td>
                <td>{props.duracion}</td>
                <td>{props.rating}</td>
                <td>
                    <ul>
                        {props.genero.map((g, i) => <li key = {g + i}>{g}</li>)}
                    </ul>
                </td>
                <td>{props.premios}</td>
            </tr>
        </React.Fragment>
    )
}

export default TableData