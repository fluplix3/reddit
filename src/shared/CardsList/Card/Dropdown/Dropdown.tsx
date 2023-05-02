import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => { };

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const container = document.querySelector('#dropdown_root')
  if (!container) {
    return null
  }

  const [ddCoordinates, setDdCoordinates] = useState<any>(0);

  const btnRef = useRef<HTMLDivElement>(null)
  const setCoordinates = () => {
    const rect = btnRef.current?.getBoundingClientRect();
    const position = window.pageYOffset

    setDdCoordinates({
      left: rect?.left,
      top: rect?.top,
      marginTop: position
    });
  }

  useEffect(() => {
    setCoordinates();
    
    document.addEventListener('click', setCoordinates)

    return () => {
      document.removeEventListener('click', setCoordinates)
    };
  }, []);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div ref={btnRef} className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && ReactDOM.createPortal((
        <div style={{ marginTop: ddCoordinates.marginTop, top: ddCoordinates.top, left: ddCoordinates.left }} className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      ), container)}
    </div>
  )
}
