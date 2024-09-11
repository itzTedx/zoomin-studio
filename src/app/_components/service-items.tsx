"use client";
import React from "react";

interface IndexProps {
  index: number;
  title: string;
  setModal: (modalState: { active: boolean; index: number }) => void;
}

export default function ServiceItems({ index, title, setModal }: IndexProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group flex w-full cursor-pointer items-center justify-between border border-t p-[50px_100px_50px_100px] transition-all last-of-type:border-b hover:opacity-50"
    >
      <h2 className="group-hover:-translate-x-3">{title}</h2>
      <p className="group-hover:translate-x-3">Design & Development</p>
    </div>
  );
}
