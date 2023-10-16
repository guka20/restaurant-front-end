import { Dispatch, SetStateAction, useContext, createContext } from "react";
type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const LoadingContext = createContext({} as LoadingContextType);

export const useLoadingContext = () => {
  return useContext(LoadingContext);
};
