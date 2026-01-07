"use client";
import ResizableButton from "../general/ResizableButton";

export default function TestSection() {
  return (
    <div className="h-200 relative bg-white">
      {/* RESIZABLE BUTTON */}
      <div className="absolute top-100 left-100">
        <ResizableButton />
      </div>
    </div>
  );
}
