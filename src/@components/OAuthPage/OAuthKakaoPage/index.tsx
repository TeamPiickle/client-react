import axios from "axios";
import qs from "qs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { loginApi } from "../../../core/api/login";
import { routePaths } from "../../../core/routes/path";
import Loading from "../../@common/Loading";

export default function OAuthKakaoPage() {
  const navigate = useNavigate();
  const authorizationCode = new URL(window.location.href).searchParams.get("code");

  const getKakaoToken = async () => {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      qs.stringify({
        grant_type: "authorization_code",
        client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
        code: authorizationCode,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      },
    );
    return response.data.access_token;
  };

  const handlePostSocialLogin = async (accessToken: string) => {
    const data = await loginApi.postSocialLogin("kakao", accessToken, "", "");
    navigate(`${routePaths.Join_}${routePaths.Join_Agree}`, { state: { isSocialLogin: data.data.accessToken } });
  };

  useEffect(() => {
    if (authorizationCode) getKakaoToken().then((token) => handlePostSocialLogin(token));
  }, [authorizationCode]);

  return <Loading backgroundColor="white" />;
}
