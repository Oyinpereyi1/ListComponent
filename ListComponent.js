
const ListComponent = ({students, deleteStudentData}) => {

    return (
            <div className="list-component">
                {
                    (students.length <= 0)?<p className="empty-list">List is empty</p>
                    :students.map((data) =>(
                    <div className="list-component">
                        <ul key={data.id} style={{listStyleType: "none"}}>
                            <li>{data.name}</li>
                            <li>{data.department}</li>
                            <li>{data.age}</li>
                        </ul>

                        <button onClick={ () => deleteStudentData(data.id)}>Delete Student Data</button>
                    </div>
                ))
                }
            </div>
    );
}

export default ListComponent;