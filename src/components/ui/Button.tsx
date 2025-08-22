import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const baseClasses =
    "px-8 py-3 rounded-[25px] font-semibold transition-colors duration-300 shadow-lg transform hover:scale-105";

  const variantClasses = {
    primary:
      "bg-transparent hover:bg-[#504B38]/10 text-[#504B38] border-2 border-[#504B38] hover:text-white hover:bg-[#504B38]",
    secondary: "bg-[#8B5A52] hover:bg-[#7A4F47] text-[#F5F5DC]",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:scale-100"
    : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};
