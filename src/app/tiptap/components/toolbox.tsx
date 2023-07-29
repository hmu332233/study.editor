import { useState } from 'react';
import cn from 'classnames';

type ItemProps = {
  icon?: any;
  onClick?: () => void;
  canRun?: boolean;
  isActive?: boolean;
  title: string;
}

const Item = ({ icon, onClick, canRun, isActive, title }: ItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li className={cn({
      'disabled': !canRun,
    })}>
      <button
        className={cn('tooltip', {
          'bg-neutral text-white': isActive,
          'bg-base-300': isHovered && !isActive,
          'p-2': true,
        })}
        data-tip={title}
        onClick={onClick}
        disabled={!canRun}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon ? <span className="text-2xl">{icon}</span> : <span className='font-bold'>{title}</span>}
      </button>
    </li>
  );
};

function ToolBox({ buttons }: { buttons: ItemProps[] }) {
  return (
    <ul className="menu menu-horizontal bg-white border rounded-box flex items-center gap-1">
      {buttons.map((button, index) => (
        <Item key={index} {...button} />
      ))}
    </ul>
  );
};
export default ToolBox;