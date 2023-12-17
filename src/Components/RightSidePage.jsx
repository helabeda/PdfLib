import MyPdfViewer from './PdfViewer';
import InitialPage from './InitialPage';


// eslint-disable-next-line react/prop-types
const RightSidePage = ({ displayPdfView }) => {
  return (
    <div
      style={{
        backgroundImage: `
          url('/assets/masques2.svg'), 
          url('/assets/masques3.svg')`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'top right, bottom left',
        width: '100%', 
        height:"800px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {displayPdfView ? <MyPdfViewer /> : <InitialPage />}
    </div>
  );
};

export default RightSidePage;
