import React from 'react'
import TableData from './TableData'

let data = [
    {
        titulo: 'Billy Elliot',
        duracion: '123',
        rating: '5',
        genero: ['Drama', 'Comedia'],
        premios: '2'
    },
    {
        titulo: 'Alicia en el país de las maravillas',
        duracion: '142',
        rating: '4.8',
        genero: ['Drama', 'Acción', 'Comedia'],
        premios: '3'
    }
]

function Table () {
    return (
        <table>
            <thead>
                <th>Título</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Género</th>
                <th>Premios</th>
            </thead>
            <tbody>
                {data.map((pelicula, index) => {
                    return <TableData
                        tiulo = {pelicula.titulo}
                        duracion = {pelicula.duracion}
                        rating = {pelicula.rating}
                        genero = {pelicula.genero}
                        premios = {pelicula.premios}
                        key = {pelicula + index}
                        />
                })}
            </tbody>
            <thead>
                <th>Título</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Género</th>
                <th>Premios</th>
            </thead>

        </table>
    )
}

export default Table