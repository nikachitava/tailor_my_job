import { auth } from "@/app/auth";
import React from "react";

const UserInfo = async () => {
    const session = await auth();

    console.log("Session: ", session);

    return <div>UserInfo</div>;
};

export default UserInfo;
