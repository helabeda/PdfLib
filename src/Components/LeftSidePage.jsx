

// eslint-disable-next-line react/prop-types
function LeftSidePage({ onButtonClick}) {
  return (
    <div
      style={{
        backgroundImage: 'url("/assets/masques1.png")',
        backgroundSize: 'cover',
        width: '100%',
        height:"800px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column', 
      }}
    >
      <div style={{position: 'relative'}}>
        <div className='img' style={{position: 'absolute', right:'7rem', bottom:'5rem'}}>
          <img src="/assets/arsela-technologies-white.png" />
        </div>
        <div className="horiz-tab">
        <p>TECHNICAL TEST FRO FRENTEND DEVELOPER</p>
        </div>
      </div>
      <div className="text">
      <h1>All your services, No-code.</h1>
      <p>Build your business apps and automate your tasks without coding.</p>
      </div>
      <div className="btn">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onButtonClick}>
      <span>Edit a PDF</span>
      </button>
      </div>
     
    </div>
  );
}

export default LeftSidePage;
