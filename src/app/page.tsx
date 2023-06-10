"use client";
import Image from "next/image";
import styles from "./page.module.css";

import logo from "../../public/logo.png";
import vector1 from "../../public/Vector (1).png";
import vector2 from "../../public/Vector (2).png";
import vector3 from "../../public/Vector (3).png";
import vector4 from "../../public/Vector (4).png";
import polygon from "../../public/polygon.png";

import Input from "@/components/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { X } from "@phosphor-icons/react";

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

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();


  const submit = async () => {
    if (!search.length) {
      toast.custom((t) => <ToastCustom onCloseToast={() => toast.dismiss(t.id)} />, {
        position: "top-right",
      });
      return;
    }
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);

      if (response.status !== 200) {
        toast.custom(
          (t) => <ToastCustom onCloseToast={() => toast.dismiss(t.id)} />,
          {
            position: "top-right",
          }
        );
      } else {
        const user = await response.json();
        router.push(`repo/${search}`);
      }
    } catch (error) {
      toast.custom((t) => <ToastCustom onCloseToast={() => toast.dismiss(t.id)} />, {
        position: "top-right",
      });
    }
  };
  return (
    <>
      <main className={styles.main}>
        <div className={styles.polygon}>
          <Image alt="" src={polygon} />
        </div>
        <div className={styles.center}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <Image alt="" src={logo} />
            </div>
            <div className={styles.text}>
              Buscar um usuário no <b>Github</b>
              <br /> ficou muito <b>fácil!</b>
            </div>
            <div className={styles.inputContainer}>
              <Input
                placeholder="Buscar usuário"
                onChangeText={(value) => {
                  setSearch(value);
                }}
                onClick={submit}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    submit();
                  }
                }}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}></div>
        </div>
        <div className={styles.footer}>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Image alt="" src={vector1} style={{marginLeft: 8, marginRight: 8}}/>
            <Image alt="" src={vector2} />
          </div>
        </div>
      </main>
      <Toaster />
    </>
  );
}
