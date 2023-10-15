import React, { FC } from "react";

import { SwitchTheme } from "../SwitchTheme";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <SwitchTheme />
    </div>
  );
};

export { Footer };
