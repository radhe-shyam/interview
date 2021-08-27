import { useState, useEffect } from 'react';
import axios from 'axios';


const DataTable = () => {
    console.log('here is the data table component');
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/comments').then(result => {
            setRecords(result.data.data)
        }).catch(error => {
            console.log('Error occured=>>', error);
        });
    }, []);// eslint-disable-next-line
    return (
        <>
            {records.length > 0 ?
                (<div className="">
                    <table className="ui celled striped table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Post Id</th>
                                <th>Body</th>
                            </tr></thead>
                        <tbody>
                            {records.map((rec, index) => (
                                <tr key={index}>
                                    <td data-label="id">{rec.id}</td>
                                    <td data-label="email">{rec.email}</td>
                                    <td data-label="name">{rec.name}</td>
                                    <td data-label="postId">{rec.postId}</td>
                                    <td data-label="body">{rec.body}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div >) : null}
        </>
    );
}

export default DataTable;
