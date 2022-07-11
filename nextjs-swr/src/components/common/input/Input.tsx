import React from 'react'
import styles from './Input.module.css'

type Props = {} & React.InputHTMLAttributes<HTMLInputElement>;
export default function Input({ ...rest }: Props) {
 return <input className={styles.input} {...rest} />;
}
