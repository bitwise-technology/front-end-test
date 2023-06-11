"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import logo from "../../../../public/logo.png";
import Input from "@/components/Input";
import toast, { Toaster } from "react-hot-toast";

import logowhite from "../../../../public/logowhite.png";
import vector1 from "../../../../public/Vector (1).png";
import vector2 from "../../../../public/Vector (2).png";
import vector3 from "../../../../public/Vector (3).png";
import vector4 from "../../../../public/Vector (4).png";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ToastCustom from "@/components/ToastCustom";
import { Autour_One } from "next/font/google";

interface Props {
  params: { username: string };
}

const Header = () => {
  const [search, setSearch] = useState("");
  // const [suggestions, setSuggestions] = useState<string[]>([]); // Suggestions list
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
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      submit();
    }
  };
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setSearch(value);

  //   // Generate suggestions based on input value
  //   const suggestionsList = ["mendos", "mendesbarreto", "mendeswhat"]; // Example suggestions
  //   const filteredSuggestions = suggestionsList.filter((suggestion) =>
  //     suggestion.toLowerCase().startsWith(value.toLowerCase())
  //   );
  //   setSuggestions(filteredSuggestions);
  // };

  // const handleSuggestionClick = (suggestion: string) => {
  //   setSearch(suggestion);
  //   submit();
  // };
  const handleLogoClick = () => {
    router.back();
  };
  return (
    <div style={{ width: "100%", marginTop: 24 }}>
      <div className={styles.headerContainer}>
        <div style={{ flex: 1 }}>
          <Link href="/">
              <Image src={logo} alt="" />
          </Link>
        </div>
        <div style={{ flex: 2 }}>
          <Input
            placeholder="Buscar usuário"
            onChangeText={(value) => {
              setSearch(value);
            }}
            onClick={submit}
            onKeyPress={handleKeyPress}
            //list="suggestions"
          />
          {/* <datalist id="suggestions">
            {suggestions.map((suggestion) => (
              <option key={suggestion} value={suggestion} />
            ))}
          </datalist> */}
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Image alt="" src={vector1} style={{marginLeft: 8, marginRight: 8}}/>
          <Image alt="" src={vector2} />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#290E25",
        paddingTop: 100,
        paddingBottom: 100,
        marginTop: 56,
      }}
    >
      <div style={{ width: 1124, margin: "auto" }}>
        <div
          style={{
            display: "flex",
            gap: 4,
            color: "white",
            fontSize: 12,
          }}
        >
          <div
            style={{
              flex: 1,
              paddingInline: 12,
            }}
          >
            <Image alt="" src={logowhite} />
          </div>
          <div
            style={{
              flex: 1,
              paddingInline: 12,
            }}
          >
            Acreditamos no valor da tecnologia e no impacto positivo que a
            transformação digital exerce sobre a sociedade, mudando o nosso dia
            a dia, facilitando atividades comuns e acelerando os negócios.
          </div>
          <div
            style={{
              flex: 1,
              paddingInline: 12,
            }}
          >
            BRASIL R. Raphael Dias da Silva, 75 3º andar • Sala 306 e 308
            Campolim • Sorocaba/SP
          </div>
          <div
            style={{
              flex: 1,
              paddingInline: 12,
            }}
          >
            CANADÁ 830, Av. Ernest-Gagnon, Bureau 315, Sala 609 Quebec
          </div>
        </div>
      </div>
      <hr style={{ width: 1124, margin: "auto", marginTop: 24 }} />
      <div style={{ width: 1124, margin: "auto", marginTop: 24 }}>
        <div
          style={{
            display: "flex",
            gap: 3,
            color: "white",
            fontSize: 12,
          }}
        >
          <div
            style={{
              flex: 1,
              paddingInline: 40,
            }}
          >
            Todos os direitos reservados - 2020
          </div>
          <div
            style={{
              //flex: 1,
              paddingInline: 12,
              //marginLeft: 8,
            }}
          >
            <Image alt="" src={vector3} />
          </div>
          <div
            style={{
              flex: 1,
              paddingInline: 0,
              marginRight: 12,
            }}
          >
            <Image alt="" src={vector4} />
          </div>
          <div
            style={{
              flex: 1,
              paddingInline: 12,
            }}
          >
            VOLTAR AO TOPO
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page({ params }: Props) {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCommitCount(
      owner: string,
      repo: string
    ): Promise<number | null> {
      try {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/commits`
        ).then((res) => res.json());
        const commits: any[] = commitsResponse;
        const commitCount = commits.length;
        return commitCount;
      } catch (error) {
        console.error("Failed to retrieve commit count.", error);
        return null;
      }
    }
    const load = async () => {
      const [userRes, repoRes] = await Promise.all([
        fetch(`https://api.github.com/users/${params.username}`).then((res) =>
          res.json()
        ),
        fetch(`https://api.github.com/users/${params.username}/repos`).then(
          (res) => res.json()
        ),
      ]);

      const reposResponse = repoRes;

      for (const repo of repoRes) {
        const commitCount = await getCommitCount(params.username, repo.name);
        console.log(`Repository: ${repo.name}, Commit count: ${commitCount}`);
      }
      setRepos(reposResponse);
      setUser(userRes);
    };

    load().finally(() => setLoading(false));
  }, []);
  return (
    <div className={styles.main}>
      <Header />
      {!!user && (
        <div style={{ width: "100%", marginTop: 56 }}>
          <div className={styles.container}>
            <div className={styles.cardContainer}>
              <Image width={120} height={120} alt="" src={user.avatar_url} />
              <div style={{ marginLeft: 24 }}>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: 24,
                    color: "#373435",
                  }}
                >
                  {user.name}
                </p>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      marginTop: 14,
                      padding: 14,
                      borderRadius: 4,
                      boxShadow: "0px 2px 38px rgba(84, 84, 89, 0.14)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: 20,
                        color: "#373435",
                      }}
                    >
                      {user.public_repos}
                    </p>
                    <p style={{ marginTop: 2 }}>Repositórios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {repos.length > 0 && (
        <div style={{ width: "100%" }}>
          <div
            style={{
              width: 1124,
              margin: "auto",
              marginTop: 56,
              boxShadow: "0px 2px 38px rgba(84, 84, 89, 0.14)",
              height: 450,
              overflow: "auto",
            }}
          >
            <div
              style={{
                paddingLeft: 24,
                paddingTop: 24,
              }}
            >
              <h2>Repositórios</h2>
            </div>
            <table className={styles.tableContainer} style={{ width: "100%" }}>
              <tr>
                <th>Nome do repositório</th>
                <th>Qtd de commit</th>
                <th>Msg Ultimo commit</th>
                <th>Hash do ultimo commit</th>
              </tr>
              {repos.map((el) => {
                return (
                  <tr>
                    <td>{el.name}</td>
                    <td>Qtd de commit</td>
                    <td>Msg Ultimo commit</td>
                    <td>Hash do ultimo commit</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      )}
      <Footer />
      <Toaster />
    </div>
  );
}
