import React, { useState, useEffect} from 'react'
import { useSpring, animated as a } from 'react-spring'

const Page2 = (props) => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: !flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${!flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  useEffect(() => {
    set(props.visibility);
    console.log(props.visibility);
  }, [props]);

  return (
    <div className="page2" style={{ marginTop: !flipped ? 0 : 0}}>
      <a.div className="back card card-bio" style={{ opacity: opacity.interpolate(o => 1 - o), transform}}>
        <div className="card-bio-body">
          <div>
            <p>
              <span  className="abu2">&#47;&#47;perkenalkan</span>&nbsp;
            </p>
            <p>
              <span  className="putih">saya adalah seseorang yang sudah {new Date().getFullYear() - 2016} tahun menjalani profesi sebagai </span>
              <span  className="biru">programmer;</span>
            <br/>
            <br/>
              <span  className="putih">mungkin secara </span>
              <span  className="kuning"><i>tech stack </i></span>
              <span  className="putih">dan </span>
              <span  className="kuning">pengalaman </span>
              <span  className="putih">saya termasuk dalam level menengah yang masih terus belajar dan mengembangkan diri;</span>
            <br/>
            <br/>
              <span className="putih">saya menguasai beberapa bahasa pemograman diantaranya </span>
              <span className="merah">php</span>
              <span className="putih">, </span>
              <span className="merah">javascript </span> 
              <span className="putih">dan </span> 
              <span className="merah">go </span> 
              <span className="putih">tentunya beberapa framework dan library dengan bahasa terkait juga saya cukup kuasai; </span> 
              <span className="putih">untuk database sendiri sampai saat ini saya hanya punya pengalaman dengan database <i>RDBMS</i> seperit </span> 
              <span className="merah">mySQL </span> 
              <span className="merah">dan </span> 
              <span className="biru">Oracle </span> 
              <span className="putih">beserta <i>store procedure</i> dan fungsi lainnya;</span> 
            <br/>
            <br/>
              <span className="putih">selain punya pengalaman sebagai programmer saya juga punya pengalaman dibidang manufaktur sebagai </span>
              <span className="biru">Operator Produksi </span> 
              <span className="putih">dan </span> 
              <span className="biru">HR Payroll</span> 
              <span className="putih">, disamping itu saya juga pernah menjadi </span>
              <span className="biru"><i>product management </i></span>  
              <span className="putih"> dan menampatkan pelatihan </span> 
              <span className="biru"><i>project management; </i></span>               
              <span className="putih">Untuk <i>role</i> sebagai programmer sendiri saya biasa menempati posisi </span>  
              <span className="biru">Full Stack </span>  
              <span className="putih">ataupun </span>  
              <span className="biru">Back End </span>  
              <span className="putih">. Oh ia saya juga pernah membuat beberapa aplikasi mobile berbasis android dengan java sewaktu kuliah; </span>  
              <span className="abu2">&#123;pengasilan pertama dari ngoding :)&#125;</span>  
            </p>
          </div>
        </div>
      </a.div>
    </div>
  )
}

export default Page2;
