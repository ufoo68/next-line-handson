"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button className="btn btn-blue" onClick={() => signIn('line', { callbackUrl: '/' })}>
      ログイン
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button className="btn btn-blue" onClick={() => signOut()}>
      ログアウト
    </button>
  );
};