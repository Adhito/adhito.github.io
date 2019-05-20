import React from 'react';
import Card from './JS-Card'
import './CSS-CardList.css';


const CardList = ({malls}) => {

	return (
		 		<div className='cardList'>
					{
						malls.map((user, i) => {
							return (
								<Card
								key={i}
								name={malls[i].name}
								id={malls[i].id}
								image={malls[i].image}
								address={malls[i].address}
								opentime={malls[i].opentime}
								floorDesc = {malls[i].floorDesc}
								floorUG = {malls[i].floorUG}
								floorUGPic = {malls[i].floorUGPic}
								floorGF = {malls[i].floorGF}
								floorGFPic = {malls[i].floorGFPic}
								floor1st = {malls[i].floor1st}
								floor1stPic = {malls[i].floor1stPic}
								floor2nd = {malls[i].floor2nd}
								floor2ndPic = {malls[i].floor2ndPic}
								floor3rd = {malls[i].floor3rd}
								floor3rdPic = {malls[i].floor3rdPic}
								floor4th = {malls[i].floor4th}
								floor4thPic = {malls[i].floor4thPic}
								floor5th = {malls[i].floor5th}
								floor5thPic = {malls[i].floor5thPic}
								floor6th = {malls[i].floor6th}
								floor6thPic = {malls[i].floor6thPic}
								floor7th = {malls[i].floor7th}
								floor7thPic = {malls[i].floor7thPic}
								floor8th = {malls[i].floor8th}
								floor8thPic = {malls[i].floor8thPic}
								floor9th = {malls[i].floor9th}
								floor9thPic = {malls[i].floor9thPic}
								floor10th = {malls[i].floor10th}
								floor10thPic = {malls[i].floor10thPic}
								
								
								/>
								);
						})
					}
				</div>
		);
}

export default CardList;
