import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    function reload() {
        window.location.reload();
    }

    return (
        <header className={styles.header}>
            <button className={styles.btn} onClick={reload}>Voltar</button>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="Avatar" />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    );
};

export default Perfil;
