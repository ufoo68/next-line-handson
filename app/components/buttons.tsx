"use client";

import { signIn, signOut } from "next-auth/react";

// ログインボタン
export const LoginButton = () => {
    return (
        <button onClick={() => signIn()}>
            Sign in
        </button>
    );
};

// ログアウトボタン
export const LogoutButton = () => {
    return (
        <button onClick={() => signOut()}>
            Sign Out
        </button>
    );
};