import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './joblist.css'


function JobList() {
	//creating state for the api
	const [jobs, setJobs] = useState([])

	//storing result for the api
	useEffect(() => {
		getJobs()
	}, [])

	//fetching data from the api
	const getJobs = () => {
		axios.get('https://staging.mapout.com/mapout-node/joblist/monster-jobs', {params: {keyword: 'developer', location: 'india'}})
			.then(response => {
				console.log(response.data.jobs[0])
				const allJobs = response.data.jobs[0]

				setJobs(allJobs)
			})
			.catch(error => console.error(`Error: ${error}`));
	}


	return (
		<div className='container-md'>
			
			<h1 className='main'>{jobs.title}  <button className='btn rounded-circle heart'><img src="assets/heart.png" alt="" /></button></h1>
			<br />			
				<div class="row company">
					<div class="col-sm">
						<h3>{jobs.company}</h3>
					</div>
					<div class="col-sm">
						<h4><img src="assets/dollar-sign.png" alt="" />200k-280k</h4>
					</div>
				</div>
			
			<div class="row location">
				<div class="col">
				<span><img src="assets/map-pin.png" alt="" /> {jobs.location}</span>
				</div>
				<div class="col">
				<span className='ml-4'><img src="assets/briefcase.png" alt="" />{jobs.experience}</span>
				</div>
				<div class="col">
				<span className='ml-4'><img src="assets/clock.png" alt="" />{jobs.jobtype}</span>
				</div>
				<div class="col"><img src="assets/users.png" alt="" /> 1000-2000 employees</div>
			</div>
			     
			<br />
			<br />
			<span>Apply in </span> <hr />
			<br />
			<div class="row justify-content-start">
				<div class="col">
				<img src="assets/cib_indeed.png" alt="" />Indeed
				</div>
				<div class="col">
				<img src="assets/bx_bxl-linkedin.png" alt="" />LinkedIn
				</div>
				<div class="col">
				<img src="assets/simple-icons_freelancer.png" alt="" />Freelancer
				</div>
				<div class="col">
				<img src="assets/mapout.png" alt="" />Mapout
				</div>
				<div class="col-4 justify-content-right">
					<button className='btn myButton'>Download Cover Letter</button>
				</div>
			</div>
			<br />
			<br />
			
			<div dangerouslySetInnerHTML={{__html: jobs.jd}}></div>
			<br />
			<hr />
			<div class="row justify-content-start bottom-links">
				<div class="col">
				<img src="assets/cib_indeed.png" alt="" />Indeed
				</div>
				<div class="col">
				<img src="assets/bx_bxl-linkedin.png" alt="" />LinkedIn
				</div>
				<div class="col">
				<img src="assets/simple-icons_freelancer.png" alt="" />Freelancer
				</div>
				<div class="col">
				<img src="assets/mapout.png" alt="" />Mapout
				</div>
				<div class="col-4">
					<button className='btn myButton'>Download Cover Letter</button>
				</div>
			</div>

			
		</div>
	)
}

export default JobList
