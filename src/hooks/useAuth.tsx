import { createContext,useContext, useMemo, useState } from "react";
import axios from '../api/axios'
import { AppContext } from "../context/AppContext";
import useLocalStorage from '../hooks/useLocalStorage';

interface ChildProps {
  children: JSX.Element
}
interface AppContextProps {
  userToken: string
  setUserToken: React.Dispatch<React.SetStateAction<boolean>>
  nextStepSurvey: () => void
  backStepSurvey: () => void
  setNextStepSurvey: React.Dispatch<React.SetStateAction<boolean>>
  setBackStepSurvey: React.Dispatch<React.SetStateAction<boolean>>
}
interface AuthContextProps {
  login: (data: {email: string, password: string}, isAdmin: boolean) => Promise<void>
  user?: string
  logout: () => void
}
const AuthContext = createContext<AuthContextProps>({
  login: async () => {},
  user: '',
  logout: () => {}
})
export const AuthProvider = ({children}: ChildProps) => {
    const  appStore = useContext<AppContextProps | null>(AppContext);
    const [isLoading, setLoading] = useState(false);
    const clearLocalStorage = () => {
      localStorage.clear();
    };
    const login = async (data: {email: string, password: string},  isAdmin: boolean) => {
        try {
            setLoading(true)
            const result = await axios.post("/login", data);
          
            if (result.status === 500) {
              throw new Error('Error')
            }
            // console.info(result.data, '<<<<< data')
            // useLocalStorage(null, )
            localStorage.setItem('isAdmin', isAdmin ? 'admin' : 'respondent')
            appStore?.setUserToken(result.data.access_token)
            // console.info(appStore, '<<<< appStore')
            // window.location.href = '/auction'
          } catch (error: any) {
            console.info(error);
            throw new Error(error.response.data.message)
          }
    }
    const logout = () => {
      clearLocalStorage();
      // logoutChannel.postMessage('Logout');
      window.location.href = `/login`;
    };
    const value = useMemo(
        () => ({
        //   clearLocalStorage,
        //   handleSetUserAvatar,
        //   handleSetUserId,
        //   hasPermission,
          login,
          logout,
        //   logout,
        //   logoutChannel,
        //   logoutWithoutReload,
        //   refreshMeData,
          user: appStore?.userToken,
        //   userAvatar,
        //   userId,
        //   isLoading,
        //   resetPassword,
        //   setPassword,
        }),
        [appStore?.userToken, isLoading]
      );
      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);