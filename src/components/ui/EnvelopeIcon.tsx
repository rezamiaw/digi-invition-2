import React from "react";

interface EnvelopeIconProps {
  className?: string;
}

export const EnvelopeIcon: React.FC<EnvelopeIconProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-8 h-8 bg-[#504B38] rounded-md flex items-center justify-center ${className}`}
    >
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#FFFFFF]"
      >
        <path d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" />
      </svg>
    </div>
  );
};
