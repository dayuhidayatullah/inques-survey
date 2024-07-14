import { createContext,useContext, useMemo, useState } from "react";
import axios from '../api/axios'
import { AppContext } from "../context/AppContext";
import { QuestionProps, SurveyConfigProps } from "../types/surveys";

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
interface OptionItemImages {
  id: number
  imgOption: string
  imgPath: string
  shItem: string
  szOptionId: string
}
interface SurveyContextProps {
  getDataSurveyConfig: (id?: string) => Promise<void>
  configList?: SurveyConfigProps[]
  configSurveySelected: SurveyConfigProps | null
  getDataQuestion: (id?: string) => Promise<void>
  questionList: QuestionProps[] | []
  optionItemImages: OptionItemImages[]
  getSurveyOptionItemImages: (id?: string) => Promise<void>
  nextStepSurvey: () => void
  backStepSurvey: () => void
  setNextStepSurvey: React.Dispatch<React.SetStateAction<() => void>>
  setBackStepSurvey: React.Dispatch<React.SetStateAction<() => void>>
  setQuestionList: React.Dispatch<React.SetStateAction<QuestionProps[] | []>>
  activeStep: number
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}
const SurveyContext = createContext<SurveyContextProps>({
  getDataSurveyConfig: async (_?: string) => {},
  configList: [],
  configSurveySelected: {
    szDescQuestion: '',
    config: {
    szIntroduction: '',
    szInstruction: '',
    szClosingNote: '',
    szDashboardNote: '',
    bAllowUpdate: 0,
    imgIcon: []
    },
    szTerritoryId: ''
  },
  getDataQuestion: async (_?: string) => {},
  questionList: [],
  optionItemImages: [],
  getSurveyOptionItemImages: async (_?: string) => {},
  nextStepSurvey: () => {},
  backStepSurvey: () => {},
  setNextStepSurvey: () => {},
  setBackStepSurvey: () => {},
  setQuestionList: () => {},
  activeStep: 1,
  setActiveStep: () => {}
  
})
export const SurveyProvider = ({children}: ChildProps) => {
  const [configList, setConfigList] = useState<SurveyConfigProps[]>([])
  const  appStore = useContext<AppContextProps | null>(AppContext);
  const [optionItemImages, setOptionItemImages] = useState<OptionItemImages[]>([])
  const [configSurveySelected, setConfigSurveySelected] = useState<SurveyConfigProps | null>(null)
  const [isLoading, setLoading] = useState(false);
  const [questionList, setQuestionList] = useState<QuestionProps[] | []>([])
  const [nextStepSurvey, setNextStepSurvey] = useState<() => void>(() => {})
  const [backStepSurvey, setBackStepSurvey] = useState<() => void>(() => {})
  const [activeStep, setActiveStep] = useState<number>(1);
    const getDataSurveyConfig = async (id: string | undefined) => {
        try {
            setLoading(true)
            const result = await axios.get("/private/auction",  {
                headers: { Authorization: `Bearer ${appStore?.userToken}` },
              });
            if (result.status === 500) {
              throw new Error('Error')
            }
            setConfigList(result.data)

            if(id){
                setConfigSurveySelected(result.data.find((el: any) => el.config.szQuestionId === id))
            }
            // window.location.href = '/auction'
            // console.info(c, '<<<<< data in surveh')
        } catch (error: any) {
            console.info(error);
            throw new Error(error.response.data.message)
          }
    }
    const getDataQuestion = async(id?: string ) => {
        try {
            const result = await axios.get('/survey', {params: {id}})
            console.info(result.data, '<<<< result')
            // const findQuestionActive = result.data.data.find((el: any) =>  el.shItem === activeStep)
            // await getSurveyOptionItems(findQuestionActive.szOptionId)
            setQuestionList(result.data.data)
        } catch (error:any) {
            throw new Error(error.response.data.message)
        }
    }
    const getSurveyOptionItemImages = async (id?: string) => {
      try {
        // console.info(id, '<<<< iddddd')
        const result = await axios.get('/survey/optionitemimages', {params: {szOptionId: id}})
        // console.info(result.data.data, '<<<<< console.infoooo')
        setOptionItemImages(result.data.data)
      } catch (error: any) {
        throw new Error(error.response.data.message)
      }
    }
    const value = 
    
          {
          getDataSurveyConfig,
          configSurveySelected,
          configList,
          getDataQuestion,
          questionList,
          optionItemImages,
          getSurveyOptionItemImages, 
          nextStepSurvey,
          backStepSurvey,
          setNextStepSurvey,
          setBackStepSurvey, 
          setQuestionList,
          activeStep,
          setActiveStep
        }
    
      return <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>;
}
export const useSurvey = () => useContext(SurveyContext);