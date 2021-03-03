import React from 'react';
import styles from './headerpage.module.css';

const HomePage = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Sudoku Stack.</h1>
                <div className={styles.instructions}>
                    <h3> Welcome to Sudoku Stack</h3>
                    <ul>
                        <li>
                        Try Your hand at some intermediate level Sudoku 
                        </li>
                        <li>
                        Keep an eye for the error checker at the bottom <br /> Hint : If the number increments after a certain input
                         <br />that perticular input is probably wrong
                        </li>
                        <li>
                        Refresh the page to restart the clock
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomePage;