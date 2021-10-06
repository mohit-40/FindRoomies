import React from 'react'
import "./SignUpWhere.css"
import Navbar from "../component/Navbar"
import { HomeMenuItems } from "../component/HomeMenuItems"
import Footer from "../component/Footer"

function SignUpWhere() {
	return (
		<>
			<Navbar menuItem={HomeMenuItems} login={true} />

			<form action="/profile" className="where-wrapper">

				<div class="where-container">
					<div class="where-houseinfo1 where-item">
						<h1 className="where-heading">House Info</h1>
						<div className="where-input row">
							<label htmlFor="address">Your's address</label>
							<input type="text" name="address" id="address" />
							<label htmlFor="House">House No.</label>
							<input type="text" name="house" id="house" />
						</div>

						<div className="where-input ">
							<label>What kind of place do you live in?</label>
							<label for="house">House</label>
							<input type="radio" id="house" name="housetype" value="Home" />
							<label for="apartment">Apartment</label>
							<input type="radio" id="apartment" name="housetype" value="Apartment" />
							<label for="townhouse">Townhouse</label>
							<input type="radio" id="townhouse" name="housetype" value="Townhouse" />
							<label for="other">Other</label>
							<input type="radio" id="other" name="housetype" value="Other" />
						</div>

						<div className="where-input">
							<label>What kind of place do you live in?</label>
							<label for="rent">Rent</label>
							<input type="radio" id="rent" name="reown" value="rent" />
							<label for="own">Own</label>
							<input type="radio" id="own" name="reown" value="Own" />
						</div>

						<div className="where-input row">
							<label htmlFor="bedroom">Total Bedroom</label>
							<input type="number" name="bedroom" id="bedroom" />
						</div>
						<div className="where-input row">
							<label htmlFor="bathroom">Total Bathroom</label>
							<input type="number" name="bathroom" id="bathroom" />
						</div>

						<div className="where-input">
							<label>The bedroom is ??</label>
							<label for="private">Private</label>
							<input type="radio" id="private" name="bedroomstatus" value="Private" />
							<label for="shared">Shared</label>
							<input type="radio" id="shared" name="bedroomstatus" value="Shared" />
						</div>
						<div className="where-input">
							<label>The bathroom is ??</label>
							<label for="private">Private</label>
							<input type="radio" id="private" name="bathroomstatus" value="Private" />
							<label for="shared">Shared</label>
							<input type="radio" id="shared" name="bathroomstatus" value="Shared" />
						</div>

					</div>
					<div class="where-houseinfo2 where-item">
						<h1 className="where-heading">House Images</h1>
						<div className="where-input row">
							<label htmlFor="housephoto">House Photo:</label>
							<input type="file" name="housephoto" id="housephoto" />
						</div>
					</div>
					<div class="where-ownerinfo where-item">
						<h1 className="where-heading">Owner</h1>
						<div className="where-input row">
							<label htmlFor="fname">First Name:</label>
							<input type="text" name="fname" id="fname" />

						</div>
						<div className="where-input row">
							<label htmlFor="lname">Last Name:</label>
							<input type="text" name="lname" id="lname" />
						</div>
						<div className="where-input row">
							<label htmlFor="age">age:</label>
							<input type="number" name="age" id="age" />
						</div>
						<div className="where-input">
							<label>Gender:</label>
							<label for="male">Male</label>
							<input type="radio" id="male" name="gender" value="Male" />
							<label for="female">Female</label>
							<input type="radio" id="female" name="gender" value="Female" />
							<label for="other">Other</label>
							<input type="radio" id="other" name="gender" value="Other" />
						</div>
						<div className="where-input row">
							<label htmlFor="email">Email:</label>
							<input type="text" name="email" id="email" />
						</div>
						<div className="where-input row" >
							<label htmlFor="mobile">Mobile:</label>
							<input type="tel" name="mobile" id="mobile" />
						</div>
						<div className="where-input  row">
							<label htmlFor="job">Job:</label>
							<input type="text" name="job" id="job" />
						</div>
						<div className="where-input">
							<label>Smoker:</label>
							<label for="yes">Yes</label>
							<input type="radio" id="yes" name="ownsmoker" value="yes" />
							<label for="no">No</label>
							<input type="radio" id="no" name="ownsmoker" value="No" />

						</div>
						<div className="where-input">
							<label>Alcohol:</label>
							<label for="yes">Yes</label>
							<input type="radio" id="yes" name="ownalcohol" value="yes" />
							<label for="no">No</label>
							<input type="radio" id="no" name="ownalcohol" value="No" />
						</div>
						<div className="where-input">
							<label htmlFor="photo">Profile Photo:</label>
							<input type="file" name="profilephoto" id="photo" />
						</div>
					</div>
					<div class="where-renter where-item">
						<h1 className="where-heading">Preffered Choice </h1>
						<div className="where-input">
							<label>Smoker:</label>
							<label for="yes">Yes</label>
							<input type="radio" id="yes" name="rentsmoker" value="yes" />
							<label for="no">No</label>
							<input type="radio" id="no" name="rentsmoker" value="No" />

						</div>

						<div className="where-input">
							<label>Alcohol:</label>
							<label for="yes">Yes</label>
							<input type="radio" id="yes" name="rentalcohol" value="yes" />
							<label for="no">No</label>
							<input type="radio" id="no" name="rentalcohol" value="No" />
						</div>

					</div>
					<div class="where-finance where-item row">
						<div class="where-finance-price">
							<h1 className="where-heading">Rent and Deposit Amount</h1>
							<div className="where-input row">
								<label htmlFor="rent">Rent(in Rs):</label>
								<input type="number" name="rent" id="rent" />
							</div>

							<div className="where-input row">
								<label htmlFor="deposit">Deposit(in Rs):</label>
								<input type="number" name="deposit" id="deposit" />
							</div>
						</div>
						{/* <div class="where-finance-utilities"></div>
						<div class="where-finance-terms"></div>
						<div class="where-facilities where-item"></div>
						<div class="where-nearby where-item"></div> */}
					</div>
				</div>

				<div className="where-form-buttons">

					<button className="where-form-button" type="submit">Save</button>
					<button className="where-form-button" type="submit">cancel</button>
				</div>

			</form>

			<Footer />
		</ >
	)
}

export default SignUpWhere
