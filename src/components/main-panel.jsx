import React, { useState } from "react";
import styles from "./main-panel.module.css";

const MainPanel = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (typeof onSubmit === 'function') {
      onSubmit({ text, done });

      setText('');
      setDone(false);
    }
  };

  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardcontent}>
        <h1 className={styles.titleclear}>
          Task<span className={styles.titledark}>It</span>
        </h1>
        <br />
        <form onSubmit={handleFormSubmit}>
          <p className={styles.lowtextitle}>CREATE A TASK</p>
          <br />
          <label className={styles.lowtext}>Description</label>
          <br />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.inputField}
          />
          <br />
          <br />
          <label className={styles.lowtext}>Status</label>
          <br />
          <input
            type="checkbox"
            checked={done}
            onChange={() => setDone(!done)}
            className={styles.checkbox}
          />
          <br />
          <div className={styles.submitdiv}>
            <button type="submit" className={styles.submitButton}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainPanel;