import React from 'react'
import './CSS-SearchBox.css';

const SearchBox = ({ searchfields, searchChange}) =>{
	return (
		<div className='searchBox'>
			<input
				className='searchBoxInput '
				type='search'
				placeholder='Search Mall'
				onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox
