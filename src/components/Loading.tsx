import { useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import inques_lottie from '../assets/lottie/inques_lottie.json';

const Loading = ({ open }: { open: boolean }) => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (lottieRef.current && open) {
      lottieRef.current.goToAndPlay(0, true);
    }
  }, [open]);

  return (
    <>
      {open && (
        <div className='fixed flex items-center justify-center right-0 left-0 bottom-0 top-0 bg-[rgba(0,0,0,0.5)] z-[1201] opacity-1'>
          <div className='flex justify-center w-[350px] h-[300px]'>
            <Lottie lottieRef={lottieRef} animationData={inques_lottie} loop />
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;