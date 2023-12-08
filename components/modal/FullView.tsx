import { UseTextToAudio } from '@hooks/useTextToAudio';
import { Speaker } from '@icons/Speaker';
import { Modal } from '@widgets/Modal';
import { FC } from 'react';

interface Props {
  onClose: () => void;
  todo: string;
  note: string;
  open: boolean;
  createdAt: string;
  updatedAt: string;
}

export const FullView: FC<Props> = ({
  todo,
  note,
  onClose,
  open,
  createdAt,
  updatedAt,
}) => {
  const { speakOut } = UseTextToAudio({ text: note });
  return (
    <Modal open={open} onClose={onClose}>
      <p className={'font-bold mt-4 text-[14px]'}>Todo:</p>
      <p className={'text-[14px] text-[#303030] mt-1'}>{todo}</p>
      <p className={'font-bold mt-4 text-[14px]'}>Created At:</p>
      <p className={'text-[12px] text-[#303030] mt-1'}>
        {new Date(createdAt).toLocaleString()}
      </p>
      
      {updatedAt && (
        <>
          <p className={'font-bold mt-4 text-[14px]'}>Updated At:</p>
          <p className={'text-[12px] text-[#303030] mt-1'}>
            {new Date(updatedAt).toLocaleString()}
          </p>
        </>
      )}

      <div className={'flex justify-between'}>
        <p className={'font-bold mt-4 text-[14px]'}>Note:</p>
        <button onClick={speakOut} title={'Listen to your note'}>
          <Speaker className={'mt-[11px]'} />
        </button>
      </div>

      <div
        className={'text-[14px] text-[#303030] mt-1'}
        dangerouslySetInnerHTML={{ __html: note }}
      ></div>
    </Modal>
  );
};
