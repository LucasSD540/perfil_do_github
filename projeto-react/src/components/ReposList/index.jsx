import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [EstaCarregando, setEstaCarregando] = useState(false);
    const [deuErro, setDeuErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setDeuErro(false);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(async (res) => {
                if (!res.ok) {
                    if (res.status === 404) {
                        setDeuErro(true);
                    } else {
                        throw new Error(`Erro ao buscar repositórios: ${res.status}`);
                    }
                }
                return res.json();
            })
            .then((resJson) => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 1000);
            })
            .catch((error) => {
                setEstaCarregando(false);
                console.error(error);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {deuErro ? (
                <h1>Usuário não encontrado ou ocorreu um erro na busca.</h1>
            ) : (
                EstaCarregando ? (
                    <h1>Carregando...</h1>
                ) : (
                    <ul className={styles.list}>
                        {repos.map((repositorio) => (
                            <li className={styles.listItem} key={repositorio.id}>
                                <div className={styles.itemName}>
                                    <b>Nome:</b>
                                    {repositorio.name}
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Linguagem:</b>
                                    {repositorio.language}
                                </div>
                                <a
                                    className={styles.itemLink}
                                    target="_blank"
                                    href={repositorio.html_url}
                                >
                                    Visitar no Github
                                </a>
                            </li>
                        ))}
                    </ul>
                )
            )}
        </div>
    );
};

export default ReposList;