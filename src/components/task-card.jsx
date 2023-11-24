import React from "react";
import styles from "./task-card.module.css";

const TaskCard = ({ text, done }) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardcontent}>
        <p className={styles.lowtext}>Description {text}</p>
        <br />
        <p className={styles.lowtext}>Status {done ? 'Done' : 'Pending'}</p>
      </div>
    </div>
  );
};

export default TaskCard;