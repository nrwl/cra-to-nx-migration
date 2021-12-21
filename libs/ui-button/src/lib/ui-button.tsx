import React, { ReactNode } from 'react';
import styles from './ui-button.module.css';

export interface UiButtonProps {
  children?: ReactNode;
  onClick: () => void;
}

export const UiButton = (props: UiButtonProps) => {
  return (
    <button onClick={props.onClick} className={styles['button']}>
      {props.children}
    </button>
  );
};
