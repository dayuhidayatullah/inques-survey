// import React from 'react'

import { useOutlet } from "react-router-dom";
import Header from "../Header";

const ProtectedLayout = () => {
    const token = localStorage.access_token
    const outlet = useOutlet()
    window.onload = async () => {
      if (!token) {
        //   const me = await refreshMeData();
        //   if (me?.role?.toLowerCase() !== 'user') {
        //     await refreshMasterData();
        //   } else {
        //     store.setClientSelected(me);
        //     setClientSelected(me);
        //   }
        // e.preventDefault()
        window.location.href = `/login`;
      }
        // else {
        // }
      };
      return <div
      className="h-screen"
      id={"container-root"}
      // onScroll={onScrollContainer}
    >
      <Header />
      <div>{outlet}</div>
    </div>
}

export default ProtectedLayout