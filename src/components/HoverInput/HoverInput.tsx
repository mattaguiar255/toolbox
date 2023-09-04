import { InputHTMLAttributes } from 'react';
import styles from './HoverInput.module.css';

function HoverInput(props: InputHTMLAttributes<HTMLInputElement>): React.ReactElement {
  return <input { ...props } className={`invisibleHoverableInput ${props.className}`} type="text" />;
}

export default HoverInput;