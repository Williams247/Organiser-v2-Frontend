import { FC, ReactNode } from 'react';

interface Props {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({ open, title, onClose, children }) => {
  return (
    <>
      {open && (
        <section>
          <div
            className={
              'w-full h-full z-50 fixed bottom-0 left-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.3)]'
            }
          >
            <div
              className={
                'w-[85%] sm:w-[85%] md:w-[60%] lg:w-[40%] bg-white rounded-md max-h-[500px] overflow-auto py-10 px-10'
              }
            >
              <div className={'flex justify-between'}>
                <p className={'font-[600] text-[20px]'}>{title ?? ''}</p>

                <button className={'font-bold text-md text-[25px]'} onClick={onClose}>
                  &times;
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
