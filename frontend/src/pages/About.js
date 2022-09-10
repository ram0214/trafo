import React from 'react';
import Layout2 from '../components/Layout/Layout2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


class About extends React.Component {
  render() {
    return (
      <>
        <Layout2>
        <div class="container">

<div class="mb-4" className="c2">

  <h4>From PDFs Conversion Tools</h4>

</div>


</div>
<br />
<div class="container text-center">
<div class="row">
<div class="col"><div class="card">
  
      <img src='images/PDF to DOCX .png' class="card-img-top"  alt="..." />
      <div class="card-body">
        <h5 class="card-title">PDF to DOCx convert</h5>
        <p class="card-text"></p>
        <Link to="/Pdftodocx" class="btn btn-primary">Click here</Link>
      </div>
    </div></div>
<div class="col"><div class="card">
      <img src='images/PDF to CSV.png'   class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">PDF to CSV convert</h5>
        <p class="card-text"></p>
        <Link to="/Pdftocsv" className="btn btn-primary">Click Here</Link>
      </div>
    </div></div>
<div class="col"><div class="card">
      <img src='images/PDF to JPG.png' class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">PDF to JPG convert</h5>
        <p class="card-text"></p>
        <Link to="/Pdftojpg" className="btn btn-primary">Click Here</Link>
      </div>
    </div></div>
<div class="col"><div class="card">
      <img src='images/PDF to PPT.png' class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">PDF to PPTx convert</h5>
        <p class="card-text"></p>
        <Link to="/Pdftopptx" className="btn btn-primary">Click Here</Link>
      </div>
    </div></div>
</div>
</div>


<div class="container" >

<div class="mb-4" className="c2">

  <h4>To PDFs Conversion Tools</h4>

</div>


</div>
<br />
<div class="container text-center">
<div class="row">
<div class="col"><div class="card">
      <img src='images/JPG to PDF.png' class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Image to PDF convert</h5>
        <p class="card-text"></p>
        <Link to="/Imagetopdf" className="btn btn-primary">Click Here</Link>
      </div>
    </div></div>
<div class="col"><div class="card">
      <img src='images/CSV to PDF.png' class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">CSV to PDF convert</h5>
        <p class="card-text"></p>
        <Link to="/Csvtopdf" className="btn btn-primary">Click Here</Link>
      </div>
    </div></div>
<div class="col"><div class="card">
      <img src= 'images/PPT to PDF.png' class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">PPTx to PDF convert</h5>
        <p class="card-text"></p>
        <Link to="/Pptxtopdf" className="btn btn-primary">Click Here</Link>
      </div>
    </div></div>
<div class="col"><div class="card">
      <img src="images/DOCX to PDF.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">DOCx to PDF convert</h5>
        <p class="card-text"></p>
        <Link to="/Docxtopdf" className="btn btn-primary">Click Here</Link>
      </div>
    </div></div>
</div>
</div>

<div class="container">

<div class="mb-4" className="c2">

  <h4>Other Conversion Tools</h4>

</div>


</div>
<br />
<div class="container text-center">
<div class="row">
<div class="col"><div class="card">
      <img src="images/JPG to PPT .png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Image to PPTx Convert</h5>
        <p class="card-text"></p>
        <Link to="/Imagetopptx" className="btn btn-primary">Click Here</Link>
      </div>
    </div></div>
<div class="col"><div class="card">
      <img src="images/PPT to JPG.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">PPtx to image Convert</h5>
        <p class="card-text"></p>
        <Link to="/Pptxtoimage" className="btn btn-primary">Click Here</Link>
      </div>
    </div></div>
<div class="col"><div class="card">
      <img src="images/JPG to PNG.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">JPG to PNG Convert</h5>
        <p class="card-text"></p>
        <Link to="/Jpgtopng" className="btn btn-primary">Click Here</Link>
      </div>
    </div></div>
<div class="col"><div class="card">
      <img src="images/PNG to JPG.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">PNG to JPG convert</h5>
        <p class="card-text"></p>
        <Link to="/Pngtojpg" className="btn btn-primary">Click Here</Link>
      </div>
    </div></div>
</div>
</div>

<div class="container">

<div class="mb-4" className="c2">

  <h4>Media Conversion Tools</h4>

</div>


</div>
<br />

<div class="container text-center">
<div class="row">
<div class="col">
<div class="card">
      <img src="images/MP3 to MP4.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">MP4 to MP3 Convert</h5>
        <p class="card-text"></p>
        <Link to="/Mp4tomp3" className="btn btn-primary">Click Here</Link>
      </div>
    </div>
</div>
<div class="col">
<div class="card">
      <img src="images/MP3 to MP4.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">MP4 to WAV Convert</h5>
        <p class="card-text"></p>
        <Link to="/Mp3tomp4" className="btn btn-primary">Click Here</Link>
      </div>
    </div>
</div>
<div class="col">
<div class="card">
      <img src="images/WAV to TXT.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">WAV to Text Convert</h5>
        <p class="card-text"></p>
        <Link to="/Wavtotext" className="btn btn-primary">Click Here</Link>
      </div>
    </div>
</div>
</div>
</div>
        </Layout2>
      </>
    );
  }
}

export default About;