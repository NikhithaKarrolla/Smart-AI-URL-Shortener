import {
    FaUserShield,
    FaUser,
    FaArrowUp,
    FaArrowDown
} from "react-icons/fa";

const UsersTable = ({ users, changeRole }) => {

    return (

        <div
            className="shadow-sm mb-4"
            style={{
                borderRadius: "18px",
                overflow: "hidden",
                background: "#fff"
            }}
        >

            <div
                className="px-4 py-3"
                style={{
                    background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                    color: "white"
                }}
            >

                <h4 className="mb-0 fw-bold">

                    👥 User Management

                </h4>

            </div>

            <div className="table-responsive">

                <table className="table table-hover align-middle mb-0">

                    <thead className="table-light">

                        <tr>

                            <th>User</th>

                            <th>Email</th>

                            <th>Role</th>

                            <th width="180">

                                Action

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            users.length === 0 ?

                                (

                                    <tr>

                                        <td
                                            colSpan="4"
                                            className="text-center py-5"
                                        >

                                            No Users Found

                                        </td>

                                    </tr>

                                )

                                :

                                users.map((user) => (

                                    <tr key={user._id}>

                                        {/* User */}

                                        <td>

                                            <div className="d-flex align-items-center">

                                                <div
                                                    style={{
                                                        width: "50px",
                                                        height: "50px",
                                                        borderRadius: "50%",
                                                        background: "#2563eb",
                                                        color: "white",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontWeight: "bold",
                                                        fontSize: "20px"
                                                    }}
                                                >

                                                    {user.name.charAt(0).toUpperCase()}

                                                </div>

                                                <div className="ms-3">

                                                    <strong>

                                                        {user.name}

                                                    </strong>

                                                </div>

                                            </div>

                                        </td>

                                        {/* Email */}

                                        <td>

                                            {user.email}

                                        </td>

                                        {/* Role */}

                                        <td>

                                            {

                                                user.role === "admin" ?

                                                    (

                                                        <span className="badge bg-danger px-3 py-2">

                                                            <FaUserShield className="me-1" />

                                                            ADMIN

                                                        </span>

                                                    )

                                                    :

                                                    (

                                                        <span className="badge bg-primary px-3 py-2">

                                                            <FaUser className="me-1" />

                                                            USER

                                                        </span>

                                                    )

                                            }

                                        </td>

                                        {/* Action */}

                                        <td>

                                            <button
                                                className={`btn ${
                                                    user.role === "admin"
                                                        ? "btn-outline-danger"
                                                        : "btn-outline-success"
                                                } btn-sm`}
                                                onClick={() =>
                                                    changeRole(user._id)
                                                }
                                            >

                                                {

                                                    user.role === "admin" ?

                                                        <>

                                                            <FaArrowDown className="me-2" />

                                                            Demote

                                                        </>

                                                        :

                                                        <>

                                                            <FaArrowUp className="me-2" />

                                                            Promote

                                                        </>

                                                }

                                            </button>

                                        </td>

                                    </tr>

                                ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default UsersTable;