import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token")
  
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://bistro-boss-server-rouge.vercel.app/carts?email=${user?.email}`,{
          headers:{authorization: `Bearer ${token}`}
        }
      );
      return res.json();
    },
  });

  return [cart, refetch];
};

export default useCart;
