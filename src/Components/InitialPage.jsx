

const InitialPage = () => {
  return (
    <div style={{display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding:'1rem'}}>
      <div style={{position: 'relative', alignItems: 'center', justifyContent: 'center',}}>
        <div style={{position: 'absolute', bottom:'15rem', width:'100%'}}>
          <h2>PDF editor</h2>
          <p  className="pdf-parag" >Edit PDF files. Fill & sign PDF</p>
        </div>
      </div>
      <div className="edit-pdf">
        <p>To start Editing click on <span>Edit a PDF</span></p>
      </div>
    </div>
  )
}

export default InitialPage;