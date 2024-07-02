import { PiSignIn } from "react-icons/pi";

import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Image } from "@chakra-ui/react";

import avatar from '/avatar.png'

export default function UserAuth() {
    const { currentUser } = useSelector((state) => state.user);
    const { currentAdmin } = useSelector((state) => state.admin);

  return (
    <>
        {
            currentAdmin ? (
                <>
                </>
            ) : currentUser ? (
                <Link to={'/profile'}>
                    <Image objectFit={'contain'} boxSize={'25px'} src={currentUser.avatar  || avatar} alt="avatar" />
                </Link>
            ) : (
                <Link to={'/signin'}>
                    <PiSignIn className="text-xl"/>
                </Link>
            )
        }
    </>
  )
}
