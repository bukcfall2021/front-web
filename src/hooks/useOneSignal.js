import React, { useEffect } from "react";
import OneSignal from "react-onesignal";
import env from "../constants/env";

const useOneSignal = () => {
  const appId = env.ONE_SIGNAL_APP_ID;

  useEffect(() => {
    if (appId) {
      console.log("Init OneSignal");
      OneSignal.init({ appId: appId, allowLocalhostAsSecureOrigin: true });
    }
  }, [appId]);
};

export default useOneSignal;
