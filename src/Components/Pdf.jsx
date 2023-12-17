import { useState } from 'react';
import LeftSidePage from './LeftSidePage';
import RightSidePage from './RightSidePage';
import './style.css';

const Pdf = () => {
    const [displayPdfView, setDisplayPdfView] = useState(false);

    const handleButtonClick = () => {
      setDisplayPdfView((prevDisplay) => !prevDisplay);
    };
  
  
    return (
      <div className='app' style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}>
        <LeftSidePage onButtonClick={handleButtonClick} />
        <RightSidePage displayPdfView={displayPdfView} />
      </div>
    );
}

export default Pdf

