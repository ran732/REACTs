import styles from './Display.module.css'

const Display = ({ displayValue }) => {
  return (
    <div>
      <input type="text" 
      id={styles.display} 
      value={displayValue}
      readOnly />
      
    </div>
  )
}

export default Display;
