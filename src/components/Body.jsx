import { Button, Container, Grid } from "@material-ui/core";
import img1 from "./Images/icon-snappy-process.svg";
import img2 from "./Images/icon-affordable-prices.svg";
import img3 from "./Images/icon-people-first.svg";
import "./css/body.css";
import React from "react";

const Body = () => {
	return (
		<Container className='container'>
			<div>
				<h1 className='h1'>We're different</h1>
			</div>
			<Grid container>
				<Grid xs={12} sm={4} item>
					<div>
						<img src={img1} alt='' />
					</div>
					<h3>Snappy Process </h3>
					<p>
						Our application process can be completed in minutes, not hours.
						Don’t get stuck filling in tedious forms.
					</p>
				</Grid>
				<Grid xs={12} sm={4} item>
					<img src={img2} alt='' />
					<h3>Affordable Prices</h3>
					<p>
						We don’t want you worrying about high monthly costs. Our prices may
						be low, but we still offer the best coverage possible.
					</p>
				</Grid>
				<Grid xs={12} sm={4} item>
					<img src={img3} alt='' />
					<h3>People First </h3>
					<p>
						Our plans aren’t full of conditions and clauses to prevent payouts.
						We make sure you’re covered when you need it.
					</p>
				</Grid>
			</Grid>

			<Grid className='container_2' container>
				<Grid xs={12} sm={6} item>
					<h2>
						{" "}
						Find out more <br /> about how we work
					</h2>
				</Grid>
				<Grid xs={12} sm={6} item>
					<Button
						style={{
							color: "white",
							border: "2px solid white",
							borderRadius: 0,
						}}>
						How we work
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Body;
