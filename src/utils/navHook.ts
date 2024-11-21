import { useNavigate } from "react-router-dom";

export const useNavHook = () => {
  const navigate = useNavigate();
  return (path: string) => navigate(path);
};
