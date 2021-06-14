import React from 'react';

const Table = (props) => {
    return (
        <div>
            {JSON.stringify(props.employeeList)}
        </div>
    )
}

export default Table;