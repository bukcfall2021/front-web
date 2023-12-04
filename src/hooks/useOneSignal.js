import React, { useEffect } from "react";
import OneSignal from "react-onesignal";

const useOneSignal = () => {
  const appId = "16775b54-0ce5-4f00-a638-70a8f72e7aa7";
  useEffect(() => {
    OneSignal.init({ appId: appId, allowLocalhostAsSecureOrigin: true });
  }, []);
};

export default useOneSignal;
