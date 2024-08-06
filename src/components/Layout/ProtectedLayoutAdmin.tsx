import { Outlet } from "react-router-dom";
// import Header from "../Header";
// import { IoIosArrowDown , IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
// import { AppContext } from "../../context/AppContext";
// import { useSurvey } from "../../hooks/useSurvey";
import Sidebar from "../Sidebar";
import HeaderAdmin from "../HeaderAdmin";

const ProtectedLayoutAdmin = () => {
    const token = localStorage.access_token
    // const outlet = useOutlet()
    const [isOpenModalFilter, setIsOpenModalFilter] = useState(false)
    // const surveyStore = useSurvey()
    // console.info(outlet, '<<<< apa dia ????')
    window.onload = async () => {
      if (!token) {
        //   const me = await refreshMeData();
        //   if (me?.role?.toLowerCase() !== 'user') {
        //     await refreshMasterData();
        //   } else {
        //     store.setClientSelected(me);
        //     setClientSelected(me);
        //   }
        // e.preventDefault()
        window.location.href = `/login`;
      }
        // else {
        // }
      };
      // const handleScroll = (event: any) => {
      //   console.info(event, '<<<< event')
      // }
      // useEffect(() => {
      //   window.addEventListener('scroll', handleScroll);
      //   return () => {
      //     window.removeEventListener('scroll', handleScroll)
      //   }
      // },[])
      // console.info(surveyStore.activeStep, surveyStore.activeStep < 1, '>>>>> berapa ')
      return <div
      className=" "
      // ref={refContainer}
      id={"container-root"}
    //   onScroll={() => console.info('<<<< onSCROLLL')}
    >
    <div className='flex max-h-[100vh] overflow-y-hidden'>
        <Sidebar />
      <div className="w-full h-full">
        <HeaderAdmin onClickFilter={() => setIsOpenModalFilter(true)}/>
        <div className='bg-[#f3f4f8] h-[100vh] w-full p-10 flex gap-2 overflow-y-auto'>
            <Outlet context={{isOpenModalFilter, setIsOpenModalFilter}} />
        </div>
      </div>
    </div>
      {/* <Header /> */}
      {/* <div className="container mx-auto">{outlet}</div>
      <footer className="w-[100vw] m-0">
        <div className="flex fixed bottom-0 right-20 z-10 ">
          <button className=" bg-blue-600 rounded-s-md p-[2px]  text-white  disabled:text-gray-400" disabled={surveyStore.activeStep <= 1} onClick={() => surveyStore?.backStepSurvey()}>
            <span>
              <IoIosArrowUp className="text-[30px] font-medium" />
            </span>
          </button>
          <span className="w-[1px] bg-white"></span>
          <button className=" bg-blue-600 rounded-e-md p-[2px]  text-white  disabled:text-gray-400" disabled={surveyStore.activeStep >= surveyStore.questionList.length} onClick={() => surveyStore?.nextStepSurvey()}>
            <span>
              <IoIosArrowDown className="text-[30px] font-medium " />
            </span>
          </button>
        </div>
      </footer> */}
    </div>
}

export default ProtectedLayoutAdmin