import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';



import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Pdftodocx from './pages/Pdftodocx';
import Csvtopdf from './pages/Csvtopdf';
import Docxtopdf from './pages/Docxtopdf';
import Imagetopdf from './pages/Imagetopdf';
import Imagetopptx from './pages/Imagetopptx';
import Jpgtopng from './pages/Jpgtopng';
import Mp3tomp4 from './pages/Mp3tomp4';
import Mp4tomp3 from './pages/Mp4tomp3';
import Pdftocsv from './pages/Pdftocsv';
import Pdftojpg from './pages/Pdftojpg';
import Pdftopptx from './pages/Pdftopptx';
import Pngtojpg from './pages/Pngtojpg';
import Pptxtoimage from './pages/Pptxtoimage';
import Pptxtopdf from './pages/Pptxtopdf';
import Wavtotext from './pages/Wavtotext';
import Merge from './pages/Merge';
import Split from './pages/Split';
import Encrypt from './pages/Encrypt';
import Rotate from './pages/Rotate';
import Compress from './pages/Compress';
import Compressimg from './pages/Compressimg';
import Webptopng from './pages/Webptopng';
import Pngtowebp from './pages/Pngtowebp';
import Pdftoexcel from './pages/Pdftoexcel';
import Navbar from './pages/Navbar';
import Contactus from './pages/Contactus';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}  />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path='/pdftodocx' element={<Pdftodocx/>} />
      <Route path='/csvtopdf' element={<Csvtopdf/>} />
      <Route path='/docxtopdf' element={<Docxtopdf/>} />
      <Route path='/imagetopdf' element={<Imagetopdf/>} />
      <Route path='/imagetopptx' element={<Imagetopptx/>} />
      <Route path='/jpgtopng' element={<Jpgtopng/>} />
      <Route path='/mp3tomp4' element={<Mp3tomp4/>} />
      <Route path='/mp4tomp3' element={<Mp4tomp3/>} />
      <Route path='/pdftocsv' element={<Pdftocsv/>} />
      <Route path='/pdftojpg' element={<Pdftojpg/>} />
      <Route path='/pdftopptx' element={<Pdftopptx/>} />
      <Route path='/pngtojpg' element={<Pngtojpg/>} />
      <Route path='/pptxtoimage' element={<Pptxtoimage/>} />
      <Route path='/pptxtopdf' element={<Pptxtopdf/>} />
      <Route path='/wavtotext' element={<Wavtotext/>} />
      <Route path='/merge' element={<Merge/>} />
      <Route path='/split' element={<Split/>} />
      <Route path='/encrypt' element={<Encrypt/>} />
      <Route path='/rotate' element={<Rotate/>} />
      <Route path='/compress' element={<Compress/>} />
      <Route path='/compressimg' element={<Compressimg/>} />
      <Route path='/webptopng' element={<Webptopng/>} />
      <Route path='/pngtowebp' element={<Pngtowebp/>} />
      <Route path='/pdftoexcel' element={<Pdftoexcel/>} />
      <Route path='/' element={<Navbar/>} />
      <Route path='/contactus' element={<Contactus/>} />
      {/* <Route path='/mp4towav' element={<mp4towav/>}/> */}
      {/* <Route path='/merge' element={<MergePDF/>} /> */}
    </Routes>
  </BrowserRouter>
);
