import React, { useMemo, useState } from 'react';
import { tokenString } from '../helpers/Constants';
// import createTheme from '../theme';

import useLocalStorage from '../hooks/useLocalStorage';
interface AppContextProps {
  userToken: string
  setUserToken: React.Dispatch<React.SetStateAction<boolean>>
  nextStepSurvey: () => void
  backStepSurvey: () => void
  setNextStepSurvey: React.Dispatch<React.SetStateAction<boolean>>
  setBackStepSurvey: React.Dispatch<React.SetStateAction<boolean>>
}
interface ConfigSurveyProps {
  szIntroduction: string
  szInstruction: string
  szClosingNote: string
  szDashboardNote: string
  bAllowUpdate: number
  imgIcon: ArrayBuffer
}
interface SurveyProps {
  szDescQuestion: string
  config: ConfigSurveyProps
  szTerritoryId: string
}
export const useStore = () => {
  const [userToken, setUserToken] = useLocalStorage(tokenString, null);
  const [nextStepSurvey, setNextStepSurvey] = useState<() => void>(() => {})
  const [backStepSurvey, setBackStepSurvey] = useState<() => void>(() => {})

//   const theme = useMemo(() => {
//     return createTheme(me?.colorway);
//   }, [me]);

  return {
    // me,
    // setMe,
    setUserToken,
    userToken,
    nextStepSurvey,
    backStepSurvey,
    setNextStepSurvey,
    setBackStepSurvey
    // roles,
    // setRoles,
    // theme,
    // isUserRole,
  };
};

const AppContextBody = React.createContext<AppContextProps | null>(null);
AppContextBody.displayName = 'MarkPlusGlobalState';

export const AppContext = AppContextBody;