"use client";
import Image from "next/image";
import vector3 from "../../public/Vector (3).png";
import vector4 from "../../public/Vector (4).png";
import { X } from "@phosphor-icons/react";

interface ToastCustomProps {
  onCloseToast: () => void;
}

export const ToastCustom = ({ onCloseToast }: { onCloseToast: () => void }) => {
  return (
    <div
      style={{
        background: "#5B1E50",
        padding: 40,
        display: "flex",
        borderRadius: 8,
        minWidth: 700,
        color: "white",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ fontWeight: 300 }}>Nenhum usuário encontrado!</h2>
        <p style={{ marginTop: 16 }}>
          Enquanto isso, acompanhe a Bitwise nas redes sociais:
          <Image alt="" src={vector3} style={{marginLeft: 8, marginRight: 8}}/>
          <Image alt="" src={vector4} />
        </p>
      </div>
      <button
        style={{ border: 0, background: "transparent", cursor: "pointer" }}
        onClick={onCloseToast}
      >
        <X size={24} color="white" />
      </button>
    </div>
  );
};
export default ToastCustom;