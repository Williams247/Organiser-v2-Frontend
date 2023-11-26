import { FC, useMemo } from 'react';

interface Props {
  percentage: number;
  className?: string;
}

export const ProgressBar: FC<Props> = ({ percentage, className }) => {
  const processedPercentage = useMemo(() => {
    return typeof percentage === 'number' ? percentage : 0;
  }, [percentage]);

  return (
    <>
      <section>
        <div className={'flex justify-between mb-1'}>
          <p className={'text-[13px]'}>Progress</p>
          <p className={'text-[13px]'}>{processedPercentage}%</p>
        </div>
        <div className={`w-full h-2 bg-[#E5DEE8] ${className ?? ''}`}>
          <div
            className={'w-full bg-[#CC68EF] h-2'}
            style={{ width: `${processedPercentage}%`}}
          ></div>
        </div>
      </section>
    </>
  );
};
