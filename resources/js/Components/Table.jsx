import React from "react";

export default function Table({ headers, children, className = "" }) {
    return (
        <div
            className={`bg-white shadow overflow-hidden sm:rounded-lg ${className}`}
        >
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {children}
                </tbody>
            </table>
        </div>
    );
}

// Table Row Component
export function TableRow({ children, className = "" }) {
    return <tr className={className}>{children}</tr>;
}

// Table Cell Component
export function TableCell({ children, className = "" }) {
    return (
        <td
            className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${className}`}
        >
            {children}
        </td>
    );
}

// Table Cell with custom styling
export function TableCellCustom({ children, className = "" }) {
    return (
        <td
            className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${className}`}
        >
            {children}
        </td>
    );
}
