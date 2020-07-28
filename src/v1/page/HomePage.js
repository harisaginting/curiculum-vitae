import React, {useState, useEffect, useRef} from 'react';
import { withRouter } from 'react-router-dom';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import {  useSpring } from 'react-spring';
import VisibilitySensor from "react-visibility-sensor";

import Page1 from '../component/homepage/page-1';
import Page2 from '../component/homepage/page-2';
import Page3 from '../component/homepage/page-3a';
import Page4 from '../component/homepage/page-4';
import Page5 from '../component/homepage/page-5';


const Homepage = (props) => {
		const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
		const [parallax, setParallax]   = useState(null);
		const [page1, setPage1]   		= useState(false);
		const [page2, setPage2]   		= useState(false);
		const [page3, setPage3]   		= useState(false);
		const [page4, setPage4]   		= useState(false);
		const [page5, setPage5]   		= useState(false);
		const [page1Opacitiy, setPage1Opacitiy]   		= useState(false);

		const goToPage = (i) =>{
	        try{
	        	parallax.scrollTo(i)
	        }catch{
	        	console.log(parallax)
	        }
	    }

	    const page1Visibility = (isVisible) =>{
	    	setPage1(isVisible);
	    }
	    const page2Visibility = (isVisible) =>{
	    	setPage2(isVisible);
	    }
	    const page3Visibility = (isVisible) =>{
	    	setPage3(isVisible);
	    }
	    const page4Visibility = (isVisible) =>{
	    	setPage4(isVisible);
	    }
	    const page5Visibility = (isVisible) =>{
	    	setPage5(isVisible);
	    }

		useEffect(() => {
			console.log(page2);
		},[page2]);

        return (
			<Parallax id="container-parallax" ref={ref => setParallax(ref)} pages={7}>
			        <ParallaxLayer offset={3.51} factor={1.5} 	speed={1} className="backgroundSoreMalam" />
			        <ParallaxLayer offset={4} 	 factor={4} 	speed={1}  className="backgroundSore" />
			        <ParallaxLayer offset={6} 	 factor={3} speed={1}  className="backgroundSiang" />

			        <ParallaxLayer offset={0} speed={0} factor={5} style={{ backgroundImage: 'url(../../stars.svg)',backgroundSize:'cover'}} />

			        <ParallaxLayer offset={3.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
			          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
			        </ParallaxLayer>

			        <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
			          <img src={'../../awan-gelap.svg'} style={{ display: 'block', width: '25%', marginLeft: '10%' }} />
			          <img src={'../../awan-gelap.svg'} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
			          <img src={'../../awan-gelap.svg'} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
			          <img src={'../../awan-gelap.svg'} style={{ display: 'block', width: '15%', marginLeft: '-5%' }} />
			        </ParallaxLayer>

			        <ParallaxLayer offset={4.6} speed={0.4} style={{ opacity: 0.6 }}>
			          <img src={'../../awan-biru.svg'} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
			          <img src={'../../awan-biru.svg'} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
			        </ParallaxLayer>

			        <ParallaxLayer offset={5.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
			          <img src={url('earth')} style={{ width: '60%' }} />
			        </ParallaxLayer>

			        <VisibilitySensor containmentX={document.getElementById("container-parallax")} onChange={(isVisible)=>page1Visibility(isVisible)} >
		        		{
		        			({isVisible}) =>
		        			<ParallaxLayer offset={0.3} factor={0.5} speed={1.5}>
		        				<Page1 visibility={page1} />
					    	</ParallaxLayer>
					    }		            	
			        </VisibilitySensor>
			        
			        <VisibilitySensor partialVisibility={true} offset={{top:50}} containmentX={document.getElementById("container-parallax")} onChange={(isVisible)=> page2Visibility(isVisible)} >
			        <ParallaxLayer
			          offset={1}
			          speed={0}
			          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			          <Page2 visibility={page2} />
			        </ParallaxLayer>
			        </VisibilitySensor>

			        <VisibilitySensor partialVisibility={true}  offset={{top:50,bottom:-250}} containmentX={document.getElementById("container-parallax")} onChange={(isVisible)=> page3Visibility(isVisible)} >
			        	<ParallaxLayer className="page3" factor={1.2} offset={1.4} speed={0.1} >
			          		<Page3 visibility={page3} style={{overflow:'scroll'}} />
			        	</ParallaxLayer>
			        </VisibilitySensor>

			        <VisibilitySensor partialVisibility={true} containmentX={document.getElementById("container-parallax")} onChange={(isVisible)=> page4Visibility(isVisible)} >
			        <ParallaxLayer className="page4" factor={3} offset={2.8}>
			          <Page4 visibility={page4} style={{overflow:'scroll'}} />
			        </ParallaxLayer>
			        </VisibilitySensor>

			         <VisibilitySensor partialVisibility={true} containmentX={document.getElementById("container-parallax")} onChange={(isVisible)=> page5Visibility(isVisible)} >
				        <ParallaxLayer offset={6} factor={2} className="page5" >
				          <Page5 visibility={page5}/>
				        </ParallaxLayer>
				     </VisibilitySensor>
			</Parallax>
        );
    
}
 
export default withRouter(Homepage);