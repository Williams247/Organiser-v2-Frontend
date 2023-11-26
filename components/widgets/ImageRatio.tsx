import Image from 'next/image';
import { FC } from 'react';

interface Props {
  src: string;
  className?: string;
  imgClass?: string;
  priority?: boolean;
  unoptimized?: boolean;
}

export const ImageRatio: FC<Props> = ({
  src,
  className,
  priority,
  unoptimized,
  imgClass,
}) => {
  return (
    <div className={`relative aspect-4/3 overflow-hidden ${className ?? ''}`}>
      <Image
        src={src}
        alt={'Image'}
        className={imgClass ?? 'object-cover'}
        priority={priority}
        unoptimized={unoptimized}
      />
    </div>
  );
};
