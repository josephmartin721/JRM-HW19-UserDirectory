import React from 'react';
import Row from './Row';
import "../css/table.css";

const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th><i>Name</i></th>
                    <th><i>Gender</i></th>
                    <th><i>Title</i></th>
                    <th><i>Age</i></th>
                </tr>
            </thead>
            <tbody>
            {
                props.employeeList.map(e => {
                    return <Row {...e} /> 
                    })  
            }
            </tbody>
        </table>
    )
}

export default Table