'use client';

interface HeadingProps {
  title: string;
  subtitle?: string;
  usedTech?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  usedTech,
  center,
}) => {
  return (
    <div className={` ${center ? 'text-center' : 'text-start'}`}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="flex flex-col justify-between h-[70%]">
        <div className="font-light text-neutral-500 dark:text-neutral-400 mt-2">
          {subtitle}
        </div>
        <div className="font-semibold text-neutral-700 dark:text-neutral-400 mt-2">
          {usedTech}
        </div>
      </div>
    </div>
  );
};

export default Heading;
