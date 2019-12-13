import React from 'react';
import styles from './style';
import Tile from "./components/tile/Tile";
import Mlink from "../../reuse/components/layout/mlink/MLink";

const Home = props => {
    return (
        <div style={styles.container}>
            <div style={styles.session}>
                <Tile text={"Total de tarefas cadastradas"} metric={20}/>
                <Tile text={"Total de tarefas concluídas"} metric={20}/>
            </div>
            <div style={styles.session}>
                <Tile text={"Total de tarefas cadastradas"} metric={20}/>


                <Mlink to={"/home"}>
                   <Tile text={"+ Ver minhas tarefas"} />
                </Mlink>
            </div>

        </div>
    );
};


export default Home;
