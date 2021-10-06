import React from 'react'
import { Link } from "react-router-dom"
import "./User.css"

function User() {
	return (
		<div className="wrapper">
			<div className="user-profilephoto">
				<img src="./images/profilephoto.gif" alt="img" />
			</div>

			<div className="user-editprofile-container">
				<Link to="/sign-up-where" className="user-editprofile">Edit Profile</Link>

			</div>

			<table className="user-table user-personal">
				<caption className="user-table-caption">PERSONAL INFO. :</caption>


				<tr className="user-table-tr" >
					<td className="user-table-td">Name:</td>
					<td className="user-table-td user-table-td2">Maria Anders</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Email :</td>
					<td className="user-table-td user-table-td2">MariaAnders@gmail.com</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Age:</td>
					<td className="user-table-td user-table-td2">28</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Gender</td>
					<td className="user-table-td user-table-td2">Female</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Mobile</td>
					<td className="user-table-td user-table-td2">2854672</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Job</td>
					<td className="user-table-td user-table-td2"> ABC company</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Adress</td>
					<td className="user-table-td user-table-td2"> pqr city</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Smoker</td>
					<td className="user-table-td user-table-td2">No</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Alcohol</td>
					<td className="user-table-td user-table-td2">No</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">About</td>
					<td className="user-table-td user-table-td2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque cupiditate officia nihil, ab aliquam quisquam? Porro eveniet exercitationem id tempore!</td>
				</tr>
			</table>

			<table className="user-table user-looking">
				<caption className="user-table-caption">LOOKING FOR : </caption>
				<tr className="user-table-tr" >
					<td className="user-table-td">Status</td>
					<td className="user-table-td user-table-td2">Need a room</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Looking For</td>
					<td className="user-table-td user-table-td2">Female</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Smoker</td>
					<td className="user-table-td user-table-td2">No</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Alcohol</td>
					<td className="user-table-td user-table-td2">No</td>
				</tr>
			</table>

			<table className="user-table user-personal">
				<caption className="user-table-caption">HOUSE INFO: </caption>
				<tr className="user-table-tr" >
					<td className="user-table-td">House No:</td>
					<td className="user-table-td user-table-td2">504</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Address</td>
					<td className="user-table-td user-table-td2">my address</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">House Type :</td>
					<td className="user-table-td user-table-td2">Home</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">No of bedroom & Status :</td>
					<td className="user-table-td user-table-td2">2 ,Private</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">No of bathroom & Status :</td>
					<td className="user-table-td user-table-td2">2 ,Shared</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Ownership Status</td>
					<td className="user-table-td user-table-td2">Owner</td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Rent , Deposit</td>
					<td className="user-table-td user-table-td2">2000 , 16000 </td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Utilities Inccluded</td>
					<td className="user-table-td user-table-td2"> Gas, Wifi , Ac , </td>
				</tr>
				<tr className="user-table-tr" >
					<td className="user-table-td">Remark </td>
					<td className="user-table-td user-table-td2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et enim quae ratione doloribus unde earum harum fuga debitis quas!</td>
				</tr>
			</table>
		</div>
	)
}

export default User
