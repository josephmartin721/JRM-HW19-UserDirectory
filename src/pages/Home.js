import React, {useEffect, useState} from 'react'
import Table from '../components/Table';

const Home = () => {
    const [employeeList, setEmployeeList] = useState()
    
    const calldata = async () => {
        const res = await fetch('https://randomuser.me/')
        const data = await res.json();
        setEmployeeList(data.results);
        console.log(data.results)
    }
    
    useEffect(() => {
        calldata();
    }, [])

    console.log(employeeList)
    return (
        <Table employeeList={employeeList || []}/>
    )
}

export default Home;