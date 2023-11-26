import { SpinnerCircular } from 'spinners-react';

export const Loader = () => {
  return (
    <div
      className={
        'h-screen w-full z-50 bg-white fixed bottom-0 flex justify-center items-center'
      }
    >
      <div>
        <SpinnerCircular
          thickness={100}
          size={60}
          color={'gray'}
          secondaryColor={'white'}
        />
      </div>
    </div>
  );
};
