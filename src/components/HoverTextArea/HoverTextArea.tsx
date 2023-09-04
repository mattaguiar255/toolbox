import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './HoverTextArea.module.css';

function HoverTextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>): React.ReactElement {
  return <textarea { ...props } className={`invisibleHoverableInput ${props.className}`} rows={25}></textarea>;
}

export default HoverTextArea;