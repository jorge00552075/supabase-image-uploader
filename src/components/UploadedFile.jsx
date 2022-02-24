import { useState } from 'react';
import { ReactComponent as CheckCircle } from '../assets/check-circle.svg';
import styles from './FileToUpload.module.css';

const UploadedFile = function ({ publicURL, name }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = async function () {
    await navigator.clipboard.writeText(publicURL);
    setIsCopied(true);
  };

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <CheckCircle />
        <h1>Uploaded Successfully 🎉</h1>
      </header>

      <div className={styles.dropzone} style={{ outline: 'none' }}>
        <img className={styles.uploadedFile} src={publicURL} alt={name} />
      </div>

      <div className={styles.clipboard}>
        <input value={publicURL} readOnly id="copyText" />
        <button onClick={handleClick}>
          {isCopied ? 'Copied' : 'Copy Link'}
        </button>
      </div>
    </div>
  );
};

export default UploadedFile;
