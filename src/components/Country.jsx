import React, {useEffect, useState} from 'react'
import '../stylesheets/Country.css'

export default function Country({ match, history }) {
	const [country, setCountry] = useState({})

	const fetchCountryData = async () =>{
		const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.code}`)
		const data = await res.json()
		setCountry(data);
	}
	
	useEffect(() =>{
		fetchCountryData();
	}, [])

	return (
		<div className='country-info'>
			<h1>{country.name}</h1>
			<img src={country.flag} alt={country.name} style={ {width: '70vw'} } />
			<button className='back-button' onClick={()=> history.goBack()}>Go Back</button>
		</div>
	)
}
