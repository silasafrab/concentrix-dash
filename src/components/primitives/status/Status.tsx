import React from "react";
import cn from "classnames";

type StatusType = "low" | "middle" | "high";

interface StatusProps {
  status: StatusType;
}

export const Status: React.FC<StatusProps> = ({ status }) => {
  const statusClasses = {
    low: {
      bg: "bg-green-200",
      text: "text-green-600",
      circle: "bg-green-600",
      value: "Baixa",
    },
    middle: {
      bg: "bg-orange-200",
      text: "text-orange-600",
      circle: "bg-orange-600",
      value: "Média",
    },
    high: {
      bg: "bg-red-200",
      text: "text-red-600",
      circle: "bg-red-600",
      value: "Alta",
    },
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center px-3 py-1 rounded-full gap-2 w-full",
        statusClasses[status].bg
      )}
    >
      <div
        className={cn(
          "rounded-full h-[4px] min-w-[4px]",
          statusClasses[status].circle
        )}
      />
      <p className={cn("font-semibold", statusClasses[status].text)}>
        {statusClasses[status].value}
      </p>
    </div>
  );
};
