import React, { useRef, useState, useEffect, useCallback } from 'react'
import { render } from 'react-dom'
import { useSpring, animated as a } from 'react-spring'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import AddIcon from '@material-ui/icons/Add';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Fab from '@material-ui/core/Fab';
import 'react-vertical-timeline-component/style.min.css';


const dataExamples = [
  {
    props: {
      date: 'Juni 2019 - sekarang',
      className: 'vertical-timeline-element--work',
      contentArrowStyle: { borderRight: '7px solid  #1373C7' },
      iconStyle: { background: '#1373C7', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Back End Engineer',
    subtitle: 'PT. Erajaya Swasembada Tbk',
    content:
      'Mengembangkan aplikasi middleware dari POS untuk e-commerce menggunakan go dan laravel, membuat aplikasi checkout menggunakan qr-code dengan reactjs dan laravel, membuat microsite untuk campaign dan membuat custom api di magento',
  },
  {
    props: {
      date: 'April 2018 - Juni 2020',
      className: 'vertical-timeline-element--work',
      contentArrowStyle: { borderRight: '7px solid  #1373C7' },
      iconStyle: { background: '#1373C7', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Web Developer',
    subtitle: 'PT. Infomedia Solusi Humanika',
    subsubtitle: 'klien : PT. Telekomunikasi Indonesia',
    content: 'Mengembangkan aplikasi project management untuk proses administrasi proyek PT. Telekomunikasi Indonesia divisi DES (Division Enterprise Service) serta integrasi dengan aplikasi lainnya menggunakan codeigniter dan oracle database',
  },
  {
    props: {
      date: 'Januari 2018 - April 2018',
      className: 'vertical-timeline-element--work',
      contentArrowStyle: { borderRight: '7px solid  #1373C7' },
      iconStyle: { background: '#1373C7', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Product Management',
    subtitle: 'PT. Integrasi Logistk Cipta Solusi',
    content: 'Membangun aplikasi NPKTOS(Non Peti Kemas Operational System) dan CARTOS(Car Terminal Operational System) untuk PT. Pelabuhan Indonesia II menggunakan sencha, codeigniter dan oracle database',
  },
  {
    props: {
      date: 'September 2017 - Desember 2018',
      className: 'vertical-timeline-element--work',
      contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
      iconStyle: { background: '#1373C7', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Web Developer',
    subtitle: 'PT. Infomedia Solusi Humanika',
    subsubtitle: 'klien : PT. Telekomunikasi Indonesia',
    content: 'Mengembangkan aplikasi project management untuk proses administrasi proyek PT. Telekomunikasi Indonesia divisi DES (Division Enterprise Service) menggunakan codeigniter dan oracle database',
  },
  {
    props: {
      date: 'Juni 2017 - September 2017',
      className: 'vertical-timeline-element--work',
      contentArrowStyle: { borderRight: '7px solid  #1373C7' },
      iconStyle: { background: '#1373C7', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Junior Web Developer',
    subtitle: 'PT. DGtraffic Indonesia',
    content: 'Membuat microsite untuk campaign brand milik customer menggunakan codeigniter',
  },
  {
    props: {
      date: 'Oktober 2016 - April 2017',
      className: 'vertical-timeline-element--work',
      contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
      iconStyle: { background: '#1373C7', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Web Developer (Project Base)',
    subtitle: 'PT. SDK Indonesia',
    content: 'Membuat aplikasi document management control untuk PT. Prodia Widyahusada Tbk menggunakan codeigniter dan angularJs',
  },
  {
    props: {
      date: 'Agustus 2013 - Oktober 2016',
      className: 'vertical-timeline-element--education',
      contentArrowStyle: { borderRight: '7px solid  #7cbb15' },
      iconStyle: { background: '#7cbb15', color: '#fff' },
      icon: <SchoolIcon />,
    },
    subtitle: 'Universitas Gunadarma',
    subsubtitle: 'Diploma III Manajemen Informatika, lulus dengan IPK 3,30 / 4.00'
  },
  {
    props: {
      date: 'Oktober 2012 - Agustus 2013',
      className: 'vertical-timeline-element--work',
      contentArrowStyle: { borderRight: '7px solid  #1373C7' },
      iconStyle: { background: '#1373C7', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'HR Generalist',
    subtitle: 'PT. Toyota Auto Body - Tokai Extrusion',
    content: 'Melakukan proses payroll, administrasi penerimaan, pengangkatan dan pemutusan hubungan kerja dengan karyawan, reimbursement biaya kesehatan serta perawatan perangkat teknologi di perusahaan',
  },
  {
    props: {
      date: 'Agustus 2011 - Agustus 2012',
      className: 'vertical-timeline-element--work',
      contentArrowStyle: { borderRight: '7px solid  #1373C7' },
      iconStyle: { background: '#1373C7', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Operator Produksi',
    subtitle: 'PT. NOK Indonesia',
    content: 'Melakukan operasional mesin produksi bushing di genba(pabrik)',
  },
  {
    props: {
      date: 'Juni 2008 - Juni 2011',
      className: 'vertical-timeline-element--education',
      contentArrowStyle: { borderRight: '7px solid  #7cbb15' },
      iconStyle: { background: '#7cbb15', color: '#fff' },
      icon: <SchoolIcon />,
    },
    subtitle: 'SMKN 2 Cikarang Barat',
    subsubtitle: 'Teknik Komputer Jaringan, lulus dengan nilai akhir 8.8 / 10.0'
  },
];

const Page4 = (props) => {
  const [elements, setElements] = useState([]);
  const loadMore = () => {
    setElements([...elements, ...dataExamples]);
  };

  useEffect(() => {
    loadMore();
  }, []);

  const getTimelineElements = () =>
    elements.map(element => (
      <VerticalTimelineElement {...element.props}>
        <h3 className="vertical-timeline-element-title">{element.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {element.subtitle}
        </h4>
        <h6 className="vertical-timeline-element-subsubtitle">
          {element.subsubtitle}
        </h6>
        <p>{element.content}</p>
      </VerticalTimelineElement>
    ));

  return (
    <div className="experience-harisa" style={{ marginTop: !props.visibility ? -200 : -200}}>
      <div className="text-center page4-header">Karir & Pendidikan</div>
      <VerticalTimeline>
        {getTimelineElements()}
      </VerticalTimeline>
    </div>
  );
  
}

export default Page4;
