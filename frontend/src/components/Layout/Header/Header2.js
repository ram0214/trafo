import React from "react";
import { Link } from "react-router-dom";

class Header2 extends React.Component {
  render() {
    return(
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid ">
            <img src="images/HeaderC2.png" alt="" className="img1" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page" href="#"><b> Home </b></Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <b> Edit PDF Tools </b>
                  </a>
                  <ul class="dropdown-menu">
                    <li><Link to = "/merge" className="dropdown-item" href="">Merge PDF</Link></li>
                    <li><Link to = "/split" className="dropdown-item" href="">Split PDF</Link></li>
                    <li><Link to = "/encrypt" className="dropdown-item" href="">Encrypt PDF</Link></li>
                    <li><Link to = "/rotate" className="dropdown-item" href="">Rotate PDF</Link></li>
                    <li><Link to = "/compress" className="dropdown-item" href="">Compress PDF</Link></li>
                    <li><Link to = "/compressimg" className="dropdown-item" href="">Compress Image</Link></li>
                    

                  </ul> 
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <b>   Convert pdf </b>
                  </a>
                  <ul className="dropdown-menu">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th scope="col">From PDF Conversion</th>
                          <th scope="col">To PDF Conversion</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <li><Link to = "/pdftodocx" className="dropdown-item" href="">PDF to DOCx</Link></li>
                          </th>
                          <td>
                            <li><Link to = "/imagetopdf" className="dropdown-item" href="">Image TO PDF</Link></li>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <li><Link to = "/pdftocsv" className="dropdown-item" href="">PDF TO CSV </Link></li>
                          </th>
                          <td>
                            <li><Link to = "/csvtopdf" className="dropdown-item" href="">CSV TO PDF </Link></li>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <li><Link to = "/pdftojpg" className="dropdown-item" href="">PDF To Image</Link></li>
                          </th>
                          <td>
                            <li><Link to = "/pptxtopdf" className="dropdown-item" href="">PPT To PDF</Link></li>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <li><Link to = "/pdftopptx" className="dropdown-item" href="">PDF To PPTx</Link></li>
                          </th>
                          <td>
                            <li><Link to = "/docxtopdf" className="dropdown-item" href="">DOCx To pdf</Link></li>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <b>  Other Conversion tools </b>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to = "/imagetopptx"  className="dropdown-item" href="#">Image TO PPTx</Link></li>
                    <li><Link to = "/pptxtoimage" className="dropdown-item" href="#">PPTx TO Image</Link></li>
                    <li><Link to = "/jpgtopng" className="dropdown-item" href="#">JPG TO PNG</Link></li>
                    <li><Link to = "/pngtojpg" className="dropdown-item" href="#">PNG TO JPG</Link></li>
                    <li><Link to = "/pngtowebp" className="dropdown-item" href="#">PNG TO Webp</Link></li>
                    <li><Link to = "/webptopng" className="dropdown-item" href="#">Webp To Png</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <b>  Media Conversion tools </b>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to = "/mp4tomp3" className="dropdown-item" href="#">MP4 To MP3</Link></li>
                    <li><Link to = "/mp3tomp4" className="dropdown-item" href="#">MP4 TO WAV</Link></li>
                    <li><Link to = "/wavtotext"  className="dropdown-item" href="#">WAV TO TEXT</Link></li>
                  </ul>
                </li>
                
              </ul>


            </div>
          </div>

        </nav>

      </header>
    );
  }
}
export default Header2;