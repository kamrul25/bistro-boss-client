import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { signInByGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state?.form?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInByGoogle()
      .then((data) => {
        console.log(data);
        const user = { name: data.user.displayName, email: data.user.email };
        fetch("https://bistro-boss-server-rouge.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User login successfully by Google.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(form, { replace: true });
            }

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User login successfully by Google.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(form, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card-body -mt-10">
      <button
        className="text-2xl btn btn-primary "
        onClick={handleGoogleSignIn}
      >
        <FcGoogle></FcGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
