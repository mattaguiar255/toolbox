import { InputHTMLAttributes } from 'react';
import styles from './HoverInput.module.css';

function HoverInput(props: InputHTMLAttributes<HTMLInputElement>): React.ReactElement {
  return <input className={styles.hoverInput} { ...props } />;
}

export default HoverInput;