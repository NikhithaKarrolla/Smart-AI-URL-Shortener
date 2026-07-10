const UsersTable = ({ users, changeRole }) => {

    return (

        <div className="card shadow mb-4">

            <div className="card-header">

                <h4>Users</h4>

            </div>

            <table className="table">

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Role</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.map(user=>(

                            <tr key={user._id}>

                                <td>{user.name}</td>

                                <td>{user.email}</td>

                                <td>

                                    <span className="badge bg-primary">

                                        {user.role}

                                    </span>

                                </td>

                                <td>

                                    <button

                                        className="btn btn-warning btn-sm"

                                        onClick={()=>changeRole(user._id)}

                                    >

                                        {

                                            user.role==="admin"

                                            ?

                                            "Demote"

                                            :

                                            "Promote"

                                        }

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default UsersTable;