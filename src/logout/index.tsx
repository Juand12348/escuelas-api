import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const cerrarSesion = async (): Promise<void> => {
      try {
        await signOut(auth);

        // Redirigir al login
        navigate("/login");

      } catch (error) {
        console.error("Error cerrando sesión:", error);
      }
    };

    cerrarSesion();
  }, [navigate]);

  return (
    <div style={styles.container}>
      <p>Cerrando sesión...</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
};