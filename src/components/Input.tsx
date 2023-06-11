"use client";
import { MagnifyingGlass, GithubLogo } from "@phosphor-icons/react";

type Props = {
  placeholder: string;
  onChangeText: (value: string) => void;
  onClose: () => void;
  onClick: () => void;
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
};
export default function Input({
  placeholder,
  onChangeText,
  onClick,
  onKeyPress,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        boxShadow: " 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      }}
    >
      <div
        style={{
          padding: 15,
        }}
      >
        <MagnifyingGlass size={24} color="#42163A" />
      </div>
      <div
        style={{
          display: "flex",
          width: 450,
        }}
      >
        <input
          style={{ flex: 1, padding: 15, border: 0 }}
          onChange={(e) => onChangeText(e.target.value)}
          type="text"
          placeholder={placeholder}
          onKeyPress={onKeyPress}
        />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <button
          style={{
            aspectRatio: 1,
            border: 0,
            background: "#42163A",
            cursor: "pointer",
          }}
          onClick={onClick}
        >
          <GithubLogo size={24} color="white" />
        </button>
      </div>
    </div>
  );
}
