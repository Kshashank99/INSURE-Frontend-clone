import { Button, Container, Grid, Typography } from "@material-ui/core";
import image_intro_desktop from "./Images/image_intro_desktop.jpg";
import "./css/header.css";
import React from "react";

const Header = () => {
	return (
		<Container className='main_container'>
			<Grid container className='header_container'>
				<Grid xs={12} lg={5} item className='header_item'>
					<div className='cont'>
						<h1 className='heading'>
							Humanizing <br />
							your insurance
						</h1>
						<p className='para'>
							Get your life insurance coverage easier and faster. We blend our
							expertise and technology to help you find the plan that’s right
							for you. Ensure you and your loved ones are protected.
						</p>
						<Button
							style={{
								color: "white",
								border: "2px solid white",
								borderRadius: "0",
								letterSpacing: "1px",
								float: "left",
							}}>
							View plans
						</Button>
					</div>
				</Grid>

				<Grid xs={12} sm={4}>
					<img className='img' src={image_intro_desktop} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Header;
