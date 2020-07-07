import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, a } from 'react-spring'
import shuffle from 'lodash/shuffle'
import useMeasure from '../../helper/useMeasure'
import useMedia from '../../helper/useMedia'
import data from '../../helper/data'
import data2 from '../../helper/data2'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Page3(props) {
  return (
    <div className="container-list-tech-stack">
      <div className="tech-stack-header text-center">Status</div>
      <div className="list-tech-stack" >
      	<div className="pl-2 pr-2 w-100">
      		<div className="row">
      			<div className="stack-title pl-4"><span>skills</span></div>
      		</div>
      		<div className="row m-0 container-list-stack">
      			<div className="col-md-6">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img src={'../php.png'} className="avatar-stack"/>
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
					  				<img src={'../golang.png'} className="avatar-stack"/>
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
					  				<img src={'../javascript.png'} className="avatar-stack" style={{borderRadius:'50%'}} />
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
					  				<img src={'../mysql.png'} className="avatar-stack" style={{borderRadius:'50%'}} />
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
					  				<img src={'../oracle.jpg'} className="avatar-stack" style={{borderRadius:'50%'}} />
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
					  				<img src={'../codeigniter.png'} className="avatar-stack"/>
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
					  				<img src={'../laravel.png'} className="avatar-stack"/>
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
					  				<img src={'../php.png'} className="avatar-stack" style={{borderRadius:'50%'}} />
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
					  				<img src={'../reactjs.png'} className="avatar-stack" style={{borderRadius:'50%'}} />
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
					  				<img src={'../php.png'} className="avatar-stack" style={{borderRadius:'50%'}} />
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title">Jquery</div>
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
					</ul>
      			</div>
      		</div>

      		<div className="row mt-3">
      			<div className="stack-title pl-4"><span>weapon</span></div>
      		</div>
      		<div className="row m-0 container-list-stack d-sm-noned-none d-sm-block">
      		<div className="row">
      			<div className="col-md-3">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img src={'../php.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title mt-2 pt-3">Git</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      			<div className="col-md-3">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img src={'../php.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title mt-2 pt-3">Ubuntu</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      			<div className="col-md-3">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img src={'../php.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title mt-2 pt-3">Sublime</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      			<div className="col-md-3">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img src={'../php.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title mt-2 pt-3">Photoshop</div>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      			</div>
      		</div>

      		<div className="row m-0 container-list-stack d-sm-none">
      			<div className="col-md-6">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img src={'../php.png'} className="avatar-stack"/>
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
					  				<img src={'../php.png'} className="avatar-stack"/>
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
					  				<img src={'../php.png'} className="avatar-stack"/>
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
					  				<img src={'../php.png'} className="avatar-stack"/>
					  		</div>
					  	</div>
					  </li>
					</ul>
      			</div>
      		</div>

      		<div className="row mt-3">
      			<div className="stack-title pl-4"><span>personality</span></div>
      		</div>
      		<div className="row m-0 container-list-stack">
      			<div className="col-md-4">
      				<ul className="list-group">
					  <li className="list-group-item">
					  	<div className="row">
					  		<div className="image-stack-container">
					  				<img src={'../php.png'} className="avatar-stack"/>
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
					  				<img src={'../php.png'} className="avatar-stack"/>
					  		</div>
					  		<div className="stack-container">
					  			<div className="stack-title mt-2 pt-3">Hard Worker</div>
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
					  				<img src={'../php.png'} className="avatar-stack"/>
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
