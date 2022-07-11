import React from 'react'
import styles from './Button.module.css'

type Props = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({ label, ...rest }: Props) {
  
  return <button className={styles.button} {...rest}>{label}</button>;
}
