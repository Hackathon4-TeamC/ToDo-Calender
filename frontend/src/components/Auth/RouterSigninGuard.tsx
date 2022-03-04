import React, { memo, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getMyUserData } from "../../api/userRequest";
import { UserContext } from "../../providers/UserProvider";
import { PageLoading } from "../atoms/shared/PageLoading";

type Props = {
  component: React.ReactNode;
  redirect: string;
};

export const RouteSigninGuard: React.VFC<Props> = memo((props) => {
  const [isLoading, setIsLoading] = useState(true);
  //  グローバルstate
  const { userData, setUserData } = useContext(UserContext);

  /**
   * 初期レンダリング時loacal storageのtokenを確認
   * tokenがあるとバックエンドにユーザー認証を行う
   * 成功 homeへ
   * 失敗 signinへ
   */
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoading(false);
      return;
    }
    getMyUserData(token)
      .then((result) => {
        setUserData(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  const location = useLocation();
  // ユーザーデータがある場合カレンダーに遷移,ない場合リダイレクト

  if (userData) {
    return isLoading ? (
      <PageLoading />
    ) : (
      <Navigate to={props.redirect} state={{ from: location }} replace={true} />
    );
  } else {
    return isLoading ? <PageLoading /> : <>{props.component}</>;
  }
});
