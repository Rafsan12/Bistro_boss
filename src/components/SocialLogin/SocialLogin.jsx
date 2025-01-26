import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosOpen from "../../hooks/useAxiosOpen";

export default function SocialLogin() {
  const { googleLogin } = useAuth();
  const axiosOpen = useAxiosOpen();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const response = await googleLogin();
      if (response?.user) {
        const userInfo = {
          email: response.user.email,
          name: response.user.displayName,
        };
        const result = await axiosOpen.post("/users", userInfo);
        console.log("User info saved:", result.data);
        navigate("/");
      } else {
        console.error("Google login did not return user info.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert("Failed to log in with Google. Please try again.");
    }
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="btn bg-orange-300 text-black mr-40 ml-40 text-xl"
    >
      Google Login
    </button>
  );
}
