import React from 'react'

const Page5 = (props) => {
  return (
    <div className="Page5">
        <div className="container-fluid">
          <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="card" style={{minHeight:'300px'}}>
                    <div className="card-body card-body-contact">
                      <div className="w-100 organisasi">
                        <span className="title-contact">Proyek Personal</span>
                      </div>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div><strong>2016</strong></div>
                          <div>Pembuatan aplikasi <i>Document Control </i> untuk PT. Prodia Widyahusada Tbk, menggunakan codeigniter dan angular v1</div>
                        </li>
                        <li className="list-group-item">
                          <div><strong>2018-2020</strong></div>
                          <div>Sekertaris Bidang Konsolidasi <strong>Permata GBKP Runggun Tambun</strong></div>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                  <div className="card" style={{minHeight:'300px'}}>
                    <div className="card-body card-body-contact">
                        <div className="w-100 organisasi">
                          <span className="title-contact">Organisasi</span>
                        </div>
                        <ul className="list-group">
                          <li className="list-group-item">
                            <div><strong>2018-2020</strong></div>
                            <div>Sekertaris Bidang Konsolidasi <a rel="noopener noreferrer"  href="https://kitapermata.com" target="_blank"><strong>Permata GBKP Runggun Tambun</strong></a> </div>
                          </li>
                          <li className="list-group-item">
                            <div><strong>2014-2015</strong> </div>
                            <div>Sekertaris Umum <strong>Persadaan Muda-Mudi Gurubenua Jabodetabek</strong></div>
                          </li>
                        </ul>
                    </div>
                  </div>
              </div>
          </div>


          <div className="row">
              <div className="col-lg-6 offset-lg-3 col-sm-12">
                   <div className="mt-2">
                      <div className="card-body card-body-contact2">
                        <div className="w-100 organisasi text-center">
                          <span className="title-contact2">cari tau lebih tentang saya</span>
                        </div>
                        <ul className="list-group mt-2">
                          <li className="list-group-item">
                            <div className="row">
                              <div className="image-stack-container2 col-3">
                                  <a href="https://id.linkedin.com/in/harisa-ginting-110993" target="_blank" rel="noopener noreferrer">
                                  <img alt="linkedin" src={process.env.PUBLIC_URL+'/linked.png'} className="social-image"/>
                                  </a>
                              </div>
                              <div className="image-stack-container2 col-3">
                                  <a href="https://www.instagram.com/harisaginting/" target="_blank" rel="noopener noreferrer">
                                  <img alt="instagram" src={process.env.PUBLIC_URL+'/ig.png'} className="social-image"/>
                                  </a>
                              </div>
                              <div className="image-stack-container2 col-3">
                                <a href="https://www.facebook.com/rzediac" target="_blank" rel="noopener noreferrer">
                                  <img alt="facebook" src={process.env.PUBLIC_URL+'/facebook.png'} className="social-image"/>
                                </a>
                              </div>
                              <div className="image-stack-container2 col-3">
                                  <a href="https://twitter.com/harisaginting" target="_blank" rel="noopener noreferrer">
                                  <img alt="twitter" src={process.env.PUBLIC_URL+'/twitter.png'} className="social-image"/>
                                  </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                  </div>  
              </div>  
          </div>  

        </div>
    </div>
  )
}

export default Page5;
