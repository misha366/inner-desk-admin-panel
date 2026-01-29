"use client";

import { useState, useRef, useEffect } from "react";

interface UserProfileDropdownProps {
  name: string;
  email: string;
}

export default function UserProfileDropdown({ name, email }: UserProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 rounded-lg px-3 py-1.5 transition-colors hover:bg-slate-800"
      >
        <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-medium text-white">
          {initials}
        </div>
        <span className="text-sm text-gray-300 hidden sm:block">{name}</span>
        <svg
          className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-10">
          <div className="border-b border-gray-100 px-4 py-3">
            <p className="text-sm font-medium text-gray-900">{name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{email}</p>
          </div>

          <div className="py-1">
            <DropdownItem label="Profile" />
            <DropdownItem label="Settings" />
          </div>

          <div className="border-t border-gray-100 py-1">
            <DropdownItem label="Sign out" danger />
          </div>
        </div>
      )}
    </div>
  );
}

interface DropdownItemProps {
  label: string;
  danger?: boolean;
}

function DropdownItem({ label, danger = false }: DropdownItemProps) {
  return (
    <button
      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
        danger
          ? "text-red-600 hover:bg-red-50"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}
