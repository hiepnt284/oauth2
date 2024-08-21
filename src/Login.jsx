import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Login() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // const access_token = searchParams.get('access_token')
    // const refresh_token = searchParams.get('refresh_token')
    // localStorage.setItem('access_token', access_token)
    // localStorage.setItem('refresh_token', refresh_token)
    const code = searchParams.get("code");
    console.log("code: " + code);
    fetch(`http://117.103.207.132:8080/furni-shop/auth/oauth/google?code=${code}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("access_token", data.result?.accessToken);
        localStorage.setItem("refresh_token", data.result?.refreshToken);
      });
    navigate('/')
  }, [searchParams, navigate]);

  return <div>Login</div>;
}
