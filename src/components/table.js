import React from 'react'

const Table = (props) => {
    return (
        <div>
            {JSON.stringigy(props.employeeList)}
        </div>
    )
}

export default Table;