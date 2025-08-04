import React from 'react';

const Button = React.forwardRef(({ label, className = '', onMouseEnter }, ref) => {
  return (
    <button
      ref={ref}
      onMouseEnter={onMouseEnter}
      className={`cursor-pointer h-6 min-w-20 rounded-full px-3  text-xs font-medium group flex items-center justify-center relative z-10 ${className}`}
    >
      <div className="relative overflow-hidden">
        <span className="group-hover:-translate-y-7 inline-flex items-center gap-1 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {label}
        </span>
        <span className="absolute top-7 left-0 group-hover:top-0 inline-flex items-center gap-1 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {label}
        </span>
      </div>
    </button>
  );
});


export default Button;
