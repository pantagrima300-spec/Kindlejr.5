import type { ReactNode } from "react";

interface FloatingCardProps {
  icon?: ReactNode;
  label: string;
  value: string;
  description: string;
  className?: string;
}

const FloatingCard = ({
  icon,
  label,
  value,
  description,
  className = "",
}: FloatingCardProps) => {
  return (
    <div className={`floating-card ${className}`}>
      <div className="floating-card-icon">
        {icon}
      </div>

      <div className="floating-card-content">
        <span className="floating-card-label">
          {label}
        </span>

        <strong>
          {value}
        </strong>

        <small>
          {description}
        </small>
      </div>
    </div>
  );
};

export default FloatingCard;