import React from 'react';
import './CSS-Card.css';
import nl2br from 'react-newline-to-break';


import {Tabs, Tab} from 'react-bootstrap-tabs';
import TabContainer from 'react-bootstrap/TabContainer'

import {Grid, Col, Row, Nav, Sonnet }  from 'react-bootstrap'
import CardTab from './JS-CardTab';
// import * as BootstrapComponents from 'react-bootstrap'

// import './bootstrap-adhito-v1.css';
// import './bootstrap.min.css';
// import './bootstrap-jquery.js';


const Card = (props) => {
	return (
		<div className='cardDesc bg-white'>
		
				<img className="cardMallLogo" alt='photos'src={props.image}/>
				<h4 className="tc"> _____________________________ </h4>
				<h2 className="cardH2Font">{props.name} Adress </h2>
				<p> {props.address} </p>

				<h2 className="cardH2Font"> Open Time   </h2>
				<p> {props.opentime} </p>

				<h2 className="cardH2Font"> Floors Maps   </h2>
				<p> {props.floorDesc} </p>
				

				<div className=''>
					<img alt='Does not exist'src={props.floorUGPic}/>
					<h2> UG </h2>
					<p>{nl2br(props.floorUG)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>

					<img alt='Does not exist'src={props.floorGFPic}/>
					<h2> GF </h2>
					<p>{nl2br(props.floorGF)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>

					<img alt='Does not exist'src={props.floor1stPic}/>
					<h2> 1ST </h2>
					<p>{nl2br(props.floor1st)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>

					<img alt='Does not exist'src={props.floor2ndPic}/>
					<h2> 2ND </h2>
					<p>{nl2br(props.floor2nd)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>

					<img alt='Does not exist'src={props.floor3rdPic}/>
					<h2> 3RD </h2>
					<p>{nl2br(props.floor3rd)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>

					<img alt='Does not exist'src={props.floor4thPic}/>
					<h2> 4TH </h2>
					<p>{nl2br(props.floor4th)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>


				</div>


				
				<h2> ____________ </h2>


		</div>
		);
}

export default Card;
