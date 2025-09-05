import ListComponent from './ListComponent.js';
//import useFetch from './useFetch.js';
import { useState, useEffect } from 'react';
//import StudentDetails from './StudentDetails.js';

const Home = () => {
    const [students, setStudents] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    const [errorM, setErrorM] = useState(null)
    
    const deleteStudentData = (id) =>{
        const updateStudents = students.filter((data => data.id !== id));
        setStudents(updateStudents);
    }

    useEffect (() => {
        fetch('http://localhost:8000/students')
            .then(res =>{
                if(!res.ok){
                    throw Error("Api Error while fetching Data")
                }
            })
            .then(data =>{
                    setStudents(data);
                    setIsLoading(false);
                    setErrorM(null);
                
            })
            .catch(err =>{
                setErrorM(err.message);
                setIsLoading(false)
            })
    }, []); 

    return(
        <div className='home'>
            { isLoading && <div> Page is Loading...</div> }
            { errorM && <div> { errorM } </div> }
            { students && <ListComponent students={students} deleteStudentData={deleteStudentData}/> }
        </div>
    );
}

export default Home;