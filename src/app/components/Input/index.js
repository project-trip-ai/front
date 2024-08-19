"use client";
export default function Input({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 block mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                   focus:outline-none focus:border-indigo-500 focus:ring-0"
      />
    </div>
  );
}
