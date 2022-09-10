import React, { useState } from 'react'
import Layout2 from '../components/Layout/Layout2';
import {API_URL} from '../constants';


export default function Compress() {
  const [selectedFile, setSelectedFile] = useState();
  const [isDataAvailable, setDataStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    setLoading(true);
    const formData = new FormData();

    formData.append('file', selectedFile);
    formData.append('inlineRadioOptions','option1');
    formData.append('inlineRadioOptions','option2');
    formData.append('inlineRadioOptions','option3');

    fetch(
      `${API_URL}/compress_pdf/`,
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        console.log('Success:', result);
        setDataStatus(true);
        setData(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <>
      <Layout2>
        <div className='div1'>
          <form>

            <h3>Compress PDF</h3>

            <h3>Edit PDF files for free. Fill & sign PDF</h3><br /><br />

            <div className="mb-3 ">
              <input className="form-control" onChange={changeHandler} type="file" id="formFileMultiple" multiple />
            </div>
            <br />
            <div class="form-check form-check-inline">

          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>

          <label class="form-check-label" for="inlineRadio1">Pre-Press</label>

        </div>

        <div class="form-check form-check-inline">

          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>

          <label class="form-check-label" for="inlineRadio2">Printer</label>

        </div>

        <div class="form-check form-check-inline">

          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>

          <label class="form-check-label" for="inlineRadio3">E-Book</label>

        </div>

        <div class="form-check form-check-inline">

          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>

          <label class="form-check-label" for="inlineRadio4">Screen</label>

        </div>
        <br/><br/>
            {loading ? 
            (<button type="button" className="btn btn-outline-primary">Loading...</button>)
            :
            (<button type="button" onClick={handleSubmission} className="btn btn-outline-primary">Convert</button>)
            }<br /><br />
            {/* <button type="button" onClick={handleSubmission} className="btn btn-outline-primary">Convert</button><br /><br /> */}

            {isDataAvailable ?
              (<a href={data.file_url} download className='btn btn-info btn-lg'>Download PDF</a>)
              :
              (<React.Fragment></React.Fragment>)
            }

            <p>Files stay private. Automatically deleted after 2 hours. <br />

              Free service for documents up to 200 pages or 50 Mb and 3 tasks per hour.</p>



          </form>
        </div>
      </Layout2>
    </>
  )
}
