import styles from './Stopper.module.scss'
import { useState, useEffect } from 'react';

const Stopper = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
          interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
          }, 10);
        }
        
        return () => clearInterval(interval);
      }, [running]);

      const start = () => {
        setRunning(true);
      };
    
      const stop = () => {
        setRunning(false);
      };
    
      const reset = () => {
        setTime(0);
      };
    
      const timer = new Date(time*10).toISOString().slice(11, 22);

    return(
        <div className={styles.stopper}>
            <span className={styles.clock}>{timer}</span>
            <span>
              <button className={styles.button} onClick={start}>Start</button>
              <button className={styles.button} onClick={stop}>Stop</button>
              <button className={styles.button} onClick={reset}>Reset</button>
            </span>
            
        </div>
    );
};

export default Stopper;