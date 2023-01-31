const options = {
	method: 'GET',
	headers: {
		//'X-RapidAPI-Key': 'system's key',
		//'X-RapidAPI-Host': 'rapid api key'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)

		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		// wind_degree.innerHTML = response.wind_degree
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			bang_cloud_pct.innerHTML = response.cloud_pct
     		bang_temp.innerHTML = response.temp
     		bang_feels_like.innerHTML = response.feels_like
     		bang_humidity.innerHTML = response.humidity
     		bang_min_temp.innerHTML = response.min_temp
     		bang_max_temp.innerHTML = response.max_temp
     		bang_sunset.innerHTML = response.sunset
     		bang_wind_speed.innerHTML = response.wind_speed
     		// bang_wind_degrees.innerHTML = response.wind_degrees
     		bang_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			mum_cloud_pct.innerHTML = response.cloud_pct
     		mum_temp.innerHTML = response.temp
     		mum_feels_like.innerHTML = response.feels_like
     		mum_humidity.innerHTML = response.humidity
     		mum_min_temp.innerHTML = response.min_temp
     		mum_max_temp.innerHTML = response.max_temp
     		mum_sunset.innerHTML = response.sunset
     		mum_wind_speed.innerHTML = response.wind_speed
     		// mum_wind_degrees.innerHTML = response.wind_degrees
     		mum_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gurgaon',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			ggn_cloud_pct.innerHTML = response.cloud_pct
     		ggn_temp.innerHTML = response.temp
     		ggn_feels_like.innerHTML = response.feels_like
     		ggn_humidity.innerHTML = response.humidity
     		ggn_min_temp.innerHTML = response.min_temp
     		ggn_max_temp.innerHTML = response.max_temp
     		ggn_sunset.innerHTML = response.sunset
     		ggn_wind_speed.innerHTML = response.wind_speed
     		// ggn_wind_degrees.innerHTML = response.wind_degrees
     		ggn_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			pnq_cloud_pct.innerHTML = response.cloud_pct
     		pnq_temp.innerHTML = response.temp
     		pnq_feels_like.innerHTML = response.feels_like
     		pnq_humidity.innerHTML = response.humidity
     		pnq_min_temp.innerHTML = response.min_temp
     		pnq_max_temp.innerHTML = response.max_temp
     		pnq_sunset.innerHTML = response.sunset
     		pnq_wind_speed.innerHTML = response.wind_speed
     		// pnq_wind_degrees.innerHTML = response.wind_degrees
     		pnq_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			hyd_cloud_pct.innerHTML = response.cloud_pct
     		hyd_temp.innerHTML = response.temp
     		hyd_feels_like.innerHTML = response.feels_like
     		hyd_humidity.innerHTML = response.humidity
     		hyd_min_temp.innerHTML = response.min_temp
     		hyd_max_temp.innerHTML = response.max_temp
     		hyd_sunset.innerHTML = response.sunset
     		hyd_wind_speed.innerHTML = response.wind_speed
     		// hyd_wind_degrees.innerHTML = response.wind_degrees
     		hyd_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
	.then(response => response.json())
	.then((response) => 
		{
			console.log(response)
			chn_cloud_pct.innerHTML = response.cloud_pct
     		chn_temp.innerHTML = response.temp
     		chn_feels_like.innerHTML = response.feels_like
     		chn_humidity.innerHTML = response.humidity
     		chn_min_temp.innerHTML = response.min_temp
     		chn_max_temp.innerHTML = response.max_temp
     		chn_sunset.innerHTML = response.sunset
     		chn_wind_speed.innerHTML = response.wind_speed
     		// chn_wind_degrees.innerHTML = response.wind_degrees
     		chn_sunrise.innerHTML = response.sunrise
			
		})
	.catch(err => console.error(err));//console.log(err)
