import { useAuth } from "../../context/AuthContext";

const Navbar = () => {

  const { user } = useAuth();

  return (

    <div
      className="bg-white shadow p-3 mb-4 d-flex justify-content-between align-items-center"
    >

      <h4>

        Welcome,

        {" "}

        {user?.name}

        👋

      </h4>

      <div>

        <strong>

          {user?.role?.toUpperCase()}

        </strong>

      </div>

    </div>

  );

};

export default Navbar;