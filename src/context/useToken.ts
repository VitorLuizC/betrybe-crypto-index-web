import constate from "constate";
import { useEffect, useState } from "react";

import { server } from "../services/axios";

/**
 * Hook e Context Provider responsáveis por prover o token
 * recebido no login
 */
const [TokenProvider, useToken] = constate(() => {
  const [token, setToken] = useState<null | string>(null);

  useEffect(() => {
    const value = localStorage.getItem("token");

    setToken(value);
  }, []);

  useEffect(() => {
    const current_token = localStorage.getItem("token");

    if (!token || current_token === token) return;

    localStorage.setItem("token", token);

    server.defaults.headers.common["Authorization"] = token;
  }, [token]);

  return { token, setToken };
});

export { useToken };

export default TokenProvider;
