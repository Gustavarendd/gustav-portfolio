'use client';

interface SkillCardProps {
  logo: any;
  title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ logo, title }) => {
  return (
    <div className="flex items-center justify-center text-center m-4">
      <div className="flex flex-col items-center">
        {logo}
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SkillCard;
