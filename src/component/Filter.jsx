import React from 'react'
import "./Filter.css"
function Filter() {
	return (
		<div className="filter">
			<div className="filter-container">
				<form action="/match" className="filter-search">
					<span className="filter-input">
						<label htmlFor="location">Search location</label>
						<input type="text" name="location" id="location" placeholder="Enter a city name" />
					</span>

					<span className="filter-input">
						<label htmlFor="need">Member Who</label>
						<select name="need" id="need">
							<option value="Have a room" selected>Have a room</option>
							<option value="Need a room">Need a room</option>
						</select>
					</span>

					<span className="filter-input">
						<label htmlFor="range">Range</label>
						<select name="range" id="range">
							<option value="1km" selected>1km</option>
							<option value="5km">5km</option>
							<option value="10km">10km</option>
							<option value="20km">20km</option>
						</select>
					</span>

					<span className="filter-input">
						<label htmlFor="price">Price</label>
						<select name="price" id="price">
							<option value="under 10k" selected>under 10k</option>
							<option value="under 20k">under 20k</option>
							<option value="under 40k">under 40k</option>
							<option value="all">All</option>
						</select>
					</span>

					<button type="submit"><i class="fas fa-search"></i> Search</button>
				</form>
			</div>
		</div>
	)
}

export default Filter
