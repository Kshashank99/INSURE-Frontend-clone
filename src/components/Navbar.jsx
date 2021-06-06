import {
	AppBar,
	Button,
	Container,
	IconButton,
	Toolbar,
	Menu,
	MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
import "./css/navbar.css";
import logo from "./Images/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles } from "@material-ui/core/styles";
import { MenuItems } from "./Menuitems.jsx";
const useStyles = makeStyles((theme) => ({
	showDesktop: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "flex",
			padding: "0 115px",
		},
	},
	menu: {
		display: "none",
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			padding: "0 115px",
		},
	},

	button: {
		backgroundColor: "#white",
		color: "#white",
		"&:hover": {
			backgroundColor: "#black",
			color: "#black",
		},
		border: "2px solid hsl(270, 9%, 17%)",
		borderRadius: 0,
	},
}));
const Navbar = () => {
	const classes = useStyles();

	const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
	const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

	const openMobileMenu = (event) => {
		setMobileMenuAnchorEl(event.currentTarget);
	};
	const closeMobileMenu = () => {
		setMobileMenuAnchorEl(null);
	};
	const mobileMenu = (
		<Menu
			anchorEl={mobileMenuAnchorEl}
			id='mobile-menu'
			keepMounted
			open={isMobileMenuOpen}>
			<MenuItem onClick={closeMobileMenu}>HOW WE WORK</MenuItem>
			<MenuItem onClick={closeMobileMenu}>BLOG</MenuItem>
			<MenuItem onClick={closeMobileMenu}>ACCOUNT</MenuItem>
			<MenuItem onClick={closeMobileMenu}>
				<Button className={classes.button} style={{}}>
					VIEW MORE
				</Button>
			</MenuItem>
		</Menu>
	);
	return (
		<>
			<Toolbar className='toolbar'>
				<div className='logo'>
					<img src={logo} alt='logo' />
				</div>
				<div class='flex'>
					<div className={classes.showDesktop}>
						<ul className='ul'>
							{MenuItems.map((item, index) => {
								return (
									<li className='li' key={index}>
										<a className={item.cName} href={item.url}>
											{item.title}
										</a>
									</li>
								);
							})}
							<Button className={classes.button} style={{}}>
								VIEW MORE
							</Button>
						</ul>
					</div>
					<IconButton className={classes.menu} onClick={openMobileMenu}>
						<MenuIcon color='inherit' />
					</IconButton>
				</div>
			</Toolbar>
			{mobileMenu}
		</>
	);
};

export default Navbar;
