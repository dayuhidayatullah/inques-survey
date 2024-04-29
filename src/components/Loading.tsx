import { MutableRefObject, useEffect, useRef } from 'react';
// import { Backdrop, Stack } from '@mui/material';
import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import loadingSample from '../assets/lottie/loading-sample.json';

type LottieProps = MutableRefObject<LottieRefCurrentProps | null>;
const Loading = ({ open }: {open:boolean}) => {
  const lottieRef: LottieProps  = useRef();

  useEffect(() => {
    if (lottieRef.current && open) {
      // @ts-ignore
      lottieRef.current.goToAndPlay(0, true);
    }
  }, [open]);

  return (
    <>{
        open && 
    <div
    //   sx={{ backgroundColor: 'rgba(255,255,255,0.7)', color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    className='fixed flex items-center justify-center right-0 left-0 bottom-0 top-0 bg-[rgba(0, 0, 0, 0.5)] z-[1201]'
    //   open={open}
    >
      <div className='flex justify-center'>
        <Lottie lottieRef={lottieRef} animationData={loadingSample} loop />
      </div>
    </div>

    }
    </>
  );
};

export default Loading;