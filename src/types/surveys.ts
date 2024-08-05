export interface ConfigProps {
    szIntroduction: string
    szInstruction: string | TrustedHTML
    szClosingNote: string
    szDashboardNote: string
    bAllowUpdate: number
    imgIcon: ArrayBuffer | []
  }
export interface SurveyConfigProps {
    szDescQuestion: string
    config: ConfigProps
    szTerritoryId: string
  }
export interface QuestionProps {
  szQuestionId: string
  szTrnId: string
  shItem: number
  szQuestion: string
  szAnswerStyleId: string
  szOptionId: string
  decQuestionScore: number
  bImageQuestion: number
  bMandatory: number
  szVariableId: string
  bTimer: number
  decTimer: number
  Option: IOption
  answer?: string | number
}
export interface IOption {
  bMultiple: number
  bNumberLogic: number
  bPrioritas: number
  bRating: number
  bSelection: number
  decRatingScale: string
  id: number
  szAnswerStyleTypeId: string
  szAuthor: string
  szDescOption: string
  szNetworkId: string
  szOptionId: string
  szRatingNode1: string
  szRatingNode2: string
  szTerritoryId: string
  OptionItems: IOptionItems[]
}
export interface IOptionItems {
  bImageOption: number
decOptionScore: string
id: number
shItem: number
szOption: string
szOptionId: string
szValueId: string
}