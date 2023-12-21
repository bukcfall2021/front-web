import React, { useEffect } from "react";
import OneSignal from "react-onesignal";
import env from "../constants/env";

const useOneSignal = () => {
  // const appId = env.ONE_SIGNAL_APP_ID;

  // useEffect(() => {
  //   console.log("Init OneSignal ", appId);
  //   if (appId) {
  //     OneSignal.init({ appId: appId, allowLocalhostAsSecureOrigin: true });
  //   }
  // }, [appId]);
};

export default useOneSignal;
