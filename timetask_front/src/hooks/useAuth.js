import { useContext } from "react";
import { AuthContext } from "../hoc/ProviderAuth";

export function useAuth() {
    return useContext(AuthContext);
}