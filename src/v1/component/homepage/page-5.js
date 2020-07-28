import React, { useRef, useState, useEffect, useCallback } from 'react'
import { render } from 'react-dom'
import { useSpring, animated as a } from 'react-spring'

const Page5 = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(props.visibility);
  }, [props]);

  return (
    <div className="Page5">
        <div className="container-fluid">
          <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="card">
                    <div className="card-body">
                      <div className="w-100 organisasi"><h3>Personal Project</h3></div>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div>2016</div>
                          <div>Pembuatan aplikasi <i>Document Control </i> untuk PT. Prodia Widyahusada Tbk, menggunakan codeigniter dan angular v1</div>
                        </li>
                        <li className="list-group-item">
                          <div>2018-2020</div>
                          <div>Sekertaris Bidang Konsolidasi <strong>Permata GBKP Runggun Tambun</strong></div>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <div className="w-100 organisasi"><h3>Organisasi</h3></div>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div>2014-2015</div>
                          <div>Sekertaris Umum <strong>Persadaan Muda-Mudi Gurubenua Jabodetabek</strong></div>
                        </li>
                        <li className="list-group-item">
                          <div>2018-2020</div>
                          <div>Sekertaris Bidang Konsolidasi <strong>Permata GBKP Runggun Tambun</strong></div>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
              </div>
          </div>
        </div>
    </div>
  )
}

export default Page5;
