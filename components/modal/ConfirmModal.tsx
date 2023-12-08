import { FormButton } from '@widgets/form/FormButton';
import { Modal } from '@widgets/Modal';
import { FC } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  onProceed: () => void;
  text: string;
  loading?: boolean
}

export const ConfirmModal: FC<Props> = ({ open, text, onClose, onProceed, loading }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <p className={'text-center font-bold text-[14px] sm:text-[14px] md:text-[20px]'}>
        Do you want to proceed with this action?
      </p>
      <p className={'text-center mb-3 text-[12.5px] sm:text-[12.5px] md:text-[14px]'}>{text}</p>
      <div className={'flex w-full justify-between mt-5'}>
        <FormButton
          className={'w-[48%] py-2 sm:py-2 md:py-3.5 font-bold'}
          onClick={onProceed}
          bg={'bg-[#CC68EF]'}
          loading={loading}
        >
          Proceed
        </FormButton>
        <FormButton
          className={
            'w-[48%] py-2 sm:py-2 md:py-3.5 font-bold border-2 border-[#CC68EF] bg-transparent'
          }
          bg={'hover:transparent'}
          inverse
          onClick={onClose}
        >
          <span className={'text-[#CC68EF]'}>Cancel</span>
        </FormButton>
      </div>
    </Modal>
  );
};
