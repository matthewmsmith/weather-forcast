import React from 'react'

const SearchWeather = ({getWeatherData}) => {
  return (
    <div>
      <form onSubmit={getWeatherData}>
        <input type="text" placeholder='Enter a city' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchWeather