import Header from './Header'
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
function Login() {
	const history = useHistory();
	useEffect(() => {
		if (localStorage.getItem('user-info')) {
			history.push('./add')
		}
	}, [])

	return (
		<>
			<Header />
			<div className="col-sm-6 offset-sm-3">
				<h1>Login</h1>

				<input type="text" placeholder="Name" className="form-control"></input>
				<br />
				<input type="text" placeholder="Password" className="form-control"></input>
				<br />
				<button className="btn btn-primary">Login</button>
			</div>
		</>
	)
}
export default Login