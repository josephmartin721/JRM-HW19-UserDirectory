import React, {useEffect} from 'react'
import Table from '../components/Table';

const Home = () => {
    const calldata = async () => {
        const res = await fetch('https://randomuser.me/')
        const data = await res.json();
        console.log(data)
    }
    
    useEffect(() => {
        calldata();
    }, [])

    return (
        <Table/>
    )
}

export default Home;