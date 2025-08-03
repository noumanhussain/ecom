import React from "react";

export default function RadioSwitch({
    id,
    name,
    checked = false,
    onChange,
    disabled = false,
    label,
    description,
    size = "md", // sm, md, lg
    color = "blue", // blue, green, red, purple, yellow
    className = "",
}) {
    const sizeClasses = {
        sm: "w-10 h-5",
        md: "w-12 h-6",
        lg: "w-16 h-8",
    };

    const dotSizeClasses = {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
    };

    const colorClasses = {
        blue: "bg-blue-500",
        green: "bg-green-500",
        red: "bg-red-500",
        purple: "bg-purple-500",
        yellow: "bg-yellow-500",
        teal: "bg-teal-500",
        indigo: "bg-indigo-500",
    };

    const dotColorClasses = {
        blue: "bg-blue-600",
        green: "bg-green-600",
        red: "bg-red-600",
        purple: "bg-purple-600",
        yellow: "bg-yellow-600",
        teal: "bg-teal-600",
        indigo: "bg-indigo-600",
    };

    const getTransformClass = (checked, size) => {
        if (checked) {
            // ON position (right side)
            switch (size) {
                case "sm":
                    return "translate-x-5";
                case "md":
                    return "translate-x-6";
                case "lg":
                    return "translate-x-8";
                default:
                    return "translate-x-6";
            }
        } else {
            // OFF position (left side)
            return "translate-x-0";
        }
    };

    return (
        <div className={`flex items-center ${className}`}>
            <button
                type="button"
                id={id}
                name={name}
                role="switch"
                aria-checked={checked}
                disabled={disabled}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!disabled) {
                        onChange(!checked);
                    }
                }}
                className={`
                    relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 select-none
                    ${sizeClasses[size]}
                    ${
                        disabled
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                    }
                    ${
                        checked
                            ? `${colorClasses[color]} focus:ring-${color}-500`
                            : "bg-gray-200 focus:ring-gray-500"
                    }
                `}
            >
                <span
                    className={`
                        inline-block transform transition-transform duration-200 ease-in-out rounded-full bg-white shadow
                        ${dotSizeClasses[size]}
                        ${getTransformClass(checked, size)}
                    `}
                />
            </button>

            {(label || description) && (
                <div className="ml-3">
                    {label && (
                        <label
                            htmlFor={id}
                            className={`text-sm font-medium ${
                                disabled ? "text-gray-400" : "text-gray-900"
                            }`}
                        >
                            {label}
                        </label>
                    )}
                    {description && (
                        <p
                            className={`text-sm ${
                                disabled ? "text-gray-400" : "text-gray-500"
                            }`}
                        >
                            {description}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

// Radio Switch Group Component
export function RadioSwitchGroup({
    options = [],
    value,
    onChange,
    name,
    disabled = false,
    size = "md",
    color = "blue",
    className = "",
}) {
    return (
        <div className={`space-y-3 ${className}`}>
            {options.map((option) => (
                <RadioSwitch
                    key={option.value}
                    id={`${name}-${option.value}`}
                    name={name}
                    checked={value === option.value}
                    onChange={() => onChange(option.value)}
                    disabled={disabled || option.disabled}
                    label={option.label}
                    description={option.description}
                    size={size}
                    color={color}
                />
            ))}
        </div>
    );
}

// Radio Switch with Form Integration
export function FormRadioSwitch({
    id,
    name,
    checked = false,
    onChange,
    disabled = false,
    label,
    description,
    size = "md",
    color = "blue",
    className = "",
    error,
}) {
    return (
        <div className={className}>
            <RadioSwitch
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                label={label}
                description={description}
                size={size}
                color={color}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
