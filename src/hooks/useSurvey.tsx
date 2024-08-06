import { createContext,useContext, useState } from "react";
import axios from '../api/axios'
import { AppContext } from "../context/AppContext";
import { QuestionProps, SurveyConfigProps } from "../types/surveys";

interface ChildProps {
  children: JSX.Element
}
interface AppContextProps {
  userToken: string
  setUserToken: React.Dispatch<React.SetStateAction<string>>
  nextStepSurvey: () => void
  backStepSurvey: () => void
  setNextStepSurvey: React.Dispatch<React.SetStateAction<() => void>>
  setBackStepSurvey: React.Dispatch<React.SetStateAction<() => void>>
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
  prevStep: number
  setPrevStep: React.Dispatch<React.SetStateAction<number>>
  postSubmitSurvey: (form: any, id?:string) => Promise<any>
  uploadImageAnswer: (form: any) => Promise<any>
  setIsLoading:  React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
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
  setActiveStep: () => {},
  prevStep: 1,
  setPrevStep: () => {},
  postSubmitSurvey: async () => {},
  uploadImageAnswer: async () => {},
  setIsLoading: () => {},
  isLoading: false
})
export const SurveyProvider = ({children}: ChildProps) => {
  const [configList, setConfigList] = useState<SurveyConfigProps[]>([])
  const  appStore = useContext<AppContextProps | null>(AppContext);
  const [optionItemImages, setOptionItemImages] = useState<OptionItemImages[]>([])
  const [configSurveySelected, setConfigSurveySelected] = useState<SurveyConfigProps | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [questionList, setQuestionList] = useState<QuestionProps[] | []>([])
  const [nextStepSurvey, setNextStepSurvey] = useState<() => void>(() => {})
  const [backStepSurvey, setBackStepSurvey] = useState<() => void>(() => {})
  const [activeStep, setActiveStep] = useState<number>(1);
  const [prevStep, setPrevStep] = useState<number>(1)
    const getDataSurveyConfig = async (id: string | undefined) => {
        try {
            setIsLoading(true)
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
      setIsLoading(true)
        try {
            const result = await axios.get('/survey', {params: {id}})
            console.info(result.data, '<<<< result')
            // const findQuestionActive = result.data.data.find((el: any) =>  el.shItem === activeStep)
            // await getSurveyOptionItems(findQuestionActive.szOptionId)
            setQuestionList(result.data.data)
            setIsLoading(false)
        } catch (error:any) {
            setIsLoading(false)
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
    const postSubmitSurvey = async (form: any, id?: string) => {
      setIsLoading(true)
      try {
        const result = await axios.post(`/survey/${id}/submit`, {answercache: form})
        // console.info(result, '<<< form')
        return result
      } catch (error) {
        console.info(error, '<M<< error')
      } finally {
        setIsLoading(false)
      }
    } 
    const uploadImageAnswer = async (form: any) => {
      try {
        setIsLoading(true)
        const result = await axios.post(`/upload`, form)
        return result
        // console.info(result, '<<< form')
      } catch (error) {
        console.info(error, '<M<< error')
        throw error
      } finally {
        setIsLoading(false)
      }
    }
    // uploadImageAnswer
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
          setActiveStep,
          prevStep,
          setPrevStep,
          postSubmitSurvey,
          uploadImageAnswer,
          isLoading,
          setIsLoading
        }
    
      return <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>;
}
export const useSurvey = () => useContext(SurveyContext);