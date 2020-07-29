import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Page3(props) {
  return (
    <div className="container-list-tech-stack">
      <div className="tech-stack-header text-center">status</div>
      <div className="list-tech-stack" >
      	<div className="pl-2 pr-2 w-100">
      		<div className="row">
      			<div className="stack-title pl-4"><span className="stack-title-header">keahlian</span></div>
      		</div>
      		<div className="row m-0 container-list-stack">
      			<div className="col-md-6">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="php" src={process.env.PUBLIC_URL+'/php.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title">PHP</div>
					  			<div className="stack-level">
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarHalfIcon/>
					  				<StarBorderIcon/>
					  			</div>
					  		</div>
					  	</div>
					  </li>
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="go" src={process.env.PUBLIC_URL+'/go.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title">GoLang</div>
					  			<div className="stack-level">
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarHalfIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  			</div>
					  		</div>
					  	</div>
					  </li>
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="js" src={process.env.PUBLIC_URL+'/js.png'} className="avatar-stack" style={{borderRadius:'50%'}} />
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title">Javascript</div>
					  			<div className="stack-level">
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  			</div>
					  		</div>
					  	</div>
					  </li>
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="mysql" src={process.env.PUBLIC_URL+'/mysql.png'} className="avatar-stack" style={{borderRadius:'50%'}} />
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title">mySql</div>
					  			<div className="stack-level">
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarHalfIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  			</div>
					  		</div>
					  	</div>
					  </li>
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="oracle" src={process.env.PUBLIC_URL+'/oracle.png'} className="avatar-stack" style={{borderRadius:'50%'}} />
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title">Oracle</div>
					  			<div className="stack-level">
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarHalfIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  			</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      			<div className="col-md-6">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="codeigniter"  src={process.env.PUBLIC_URL+'/ci.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title">Codeigniter</div>
					  			<div className="stack-level">
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  			</div>
					  		</div>
					  	</div>
					  </li>
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="laravel" src={process.env.PUBLIC_URL+'/laravel.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title">Laravel</div>
					  			<div className="stack-level">
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarHalfIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  			</div>
					  		</div>
					  	</div>
					  </li>
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="gin" src={process.env.PUBLIC_URL+'/gin.png'} className="avatar-stack" style={{borderRadius:'50%'}} />
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title">GIN</div>
					  			<div className="stack-level">
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarHalfIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  			</div>
					  		</div>
					  	</div>
					  </li>
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="reactjs" src={process.env.PUBLIC_URL+'/reactjs.png'} className="avatar-stack" style={{borderRadius:'50%'}} />
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title">ReactJs</div>
					  			<div className="stack-level">
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarHalfIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  			</div>
					  		</div>
					  	</div>
					  </li>

					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="magento" src={process.env.PUBLIC_URL+'/magento.png'} className="avatar-stack" style={{borderRadius:'50%'}} />
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title">Magento</div>
					  			<div className="stack-level">
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarIcon/>
					  				<StarHalfIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  				<StarBorderIcon/>
					  			</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      		</div>

      		<div className="row mt-3">
      			<div className="stack-title pl-4"><span className="stack-title-header" >perlengkapan</span></div>
      		</div>
      		<div className="row m-0 container-list-stack">
      			<div className="col-md-4">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="git" src={process.env.PUBLIC_URL+'/git.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title mt-2 pt-3">Git</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      			<div className="col-md-4">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="ubuntu" src={process.env.PUBLIC_URL+'/ubuntu.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title mt-2 pt-3">Ubuntu</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      			<div className="col-md-4">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="sublime" src={process.env.PUBLIC_URL+'/sublime.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title mt-2 pt-3">Sublime</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      		</div>

      		<div className="row mt-3">
      			<div className="stack-title pl-4"><span className="stack-title-header">personal</span></div>
      		</div>
      		<div className="row m-0 container-list-stack">
      			<div className="col-md-4">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="friendly" src={process.env.PUBLIC_URL+'/friendly.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title mt-2 pt-3">Friendly</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      			<div className="col-md-4">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="team" src={process.env.PUBLIC_URL+'/team.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title mt-2 pt-3">Team Player</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      			<div className="col-md-4">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img alt="positivibes" src={process.env.PUBLIC_URL+'/positivibes.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title mt-2 pt-3">Positive Vibes</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      		</div>
      	</div>
      </div>
    </div>
  )
}

export default Page3;
