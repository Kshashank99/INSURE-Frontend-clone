import { Container, Grid } from "@material-ui/core";
import facebook from "./Images/icon-facebook.svg";
import instagram from "./Images/icon-instagram.svg";
import twitter from "./Images/icon-twitter.svg";
import pinterest from "./Images/icon-pinterest.svg";
import logo from "./Images/logo.svg";
import "./css/footer.css";
import React from "react";

const Footer = () => {
	return (
		<Container>
			<Grid className='container1' container>
				<Grid className='container1_child1' xs={12} sm={6} item>
					<img src={logo} alt='' />
				</Grid>
				<Grid xs={12} sm={6} item>
					<ul className='ul'>
						<li>
							<a href=''>
								<img src={facebook} alt='' />
							</a>
						</li>
						<li>
							<a href=''>
								<img src={instagram} alt='' />
							</a>
						</li>
						<li>
							<a href=''>
								<img src={twitter} alt='' />
							</a>
						</li>
						<li>
							<a href=''>
								<img src={pinterest} alt='' />
							</a>
						</li>
					</ul>
				</Grid>
			</Grid>
			<Grid container className='footer'>
				<Grid className='footer_items' xs={12} sm={3} item>
					<h4>OUR COMPANY</h4>
					<ul>
						<li>
							<a href=''>How we work</a>
						</li>
						<li>
							<a href=''>Why Insure?</a>
						</li>
						<li>
							<a href=''>View plans</a>
						</li>
						<li>
							<a href=''>Reviews </a>
						</li>
					</ul>
				</Grid>
				<Grid className='footer_items' xs={12} sm={3} item>
					<h4>HELP ME</h4>
					<ul>
						<li>
							<a href=''>FAQ</a>
						</li>
						<li>
							<a href=''>Terms of use</a>
						</li>
						<li>
							<a href=''>Privacy policy</a>
						</li>
						<li>
							<a href=''>Cookies</a>
						</li>
					</ul>
				</Grid>
				<Grid className='footer_items' xs={12} sm={3} item>
					<h4>CONTACT</h4>
					<ul>
						<li>
							<a href=''>SALES</a>
						</li>
						<li>
							<a href=''>SUPPORT</a>
						</li>
						<li>
							<a href=''>LIVE CHAT</a>
						</li>
					</ul>
				</Grid>
				<Grid className='footer_items' xs={12} sm={3} item>
					<h4>OTHERS</h4>
					<ul>
						<li>
							<a href=''>CAREERS</a>
						</li>
						<li>
							<a href=''>PRESS</a>
						</li>
						<li>
							<a href=''>LICENSES policy</a>
						</li>
					</ul>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
