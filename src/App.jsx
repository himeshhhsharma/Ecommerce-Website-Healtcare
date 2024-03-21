import React from "react";
import Header from "./Components/Header";
import BannerImage from "./assets/Images/banner3.jpg";
import { Grid, Typography } from "@mui/material";
import Tabs from "./Components/Tabs";
import CardSection from "./Components/CardSection";
import { Box } from "@mui/material";
import AboutImage1 from '../src/assets/Images/about-image-kayna.png';
import Button from "@mui/material/Button";
import KaynaLovedCrousel from "./Components/KaynaLovedCrousel";
// import Card from "./Components/Card";
import Cardd from "./Components/Cardd";
import HomeBanner from "./Components/HomeBanner";
import FeatureBanner from "./Components/FeatureBanner";
import Bi1 from "../src/assets/Images/bannerimage1.png";
import Bi2 from "../src/assets/Images/bannerimage2.png";
import Bi3 from "../src/assets/Images/bannerimage3.png";
import CardCart from "./Components/CardCart";
import Footer from "./Components/Footer";

function App() {
	const cardinfo = [
		{
			img: "src/assets/Images/CardImage8.jpg",
			name: "Josh e Combo Pack",
			Qntity: "10*10 CAP",
			weight: "300gm",
			des: "elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl",
			price: "₹ 1999",
		},
		{
			img: "src/assets/Images/CardImage2.jpg",
			name: "Josh e Marda Capsule",
			Qntity: "10*10 CAP",
			weight: "600gm",
			des: "amet porttitor eget dolor morbi non arcu risus quis varius",
			price: "₹ 1499",
		},
		{
			img: "src/assets/Images/CardImage3.jpg",
			name: "Kayna Fruit Facial Kit",
			Qntity: "10*10 CAP",
			weight: "350gm",
			des: "amet porttitor eget dolor morbi non arcu risus quis varius",
			price: "₹ 1499",
		},
		{
			img: "src/assets/Images/CardImage4.jpg",
			name: "Vitamin C Facial Kit",
			Qntity: "10*10 CAP",
			weight: "360gm",
			des: "Welcome to Kayna Healthcare! We are proud to introduce o...",
			price: "₹ 1799",
		},
		{
			img: "src/assets/Images/CardImage5.jpg",
			name: "Combo Herbal Shampoo",
			Qntity: "10*10 CAP",
			weight: "500gm",
			des: "elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl",
			price: "₹ 1223",
		},
		{
			img: "src/assets/Images/CardImage6.jpg",
			name: "Livrax Syrup",
			Qntity: "10*10 CAP",
			weight: "400gm",
			des: "amet porttitor eget dolor morbi non arcu risus quis varius",
			price: "₹ 1853",
		},
		{
			img: "src/assets/Images/CardImage7.jpg",
			name: "Feminine Capsule",
			Qntity: "10*10 CAP",
			weight: "600gm",
			des: "Welcome to Kayna Healthcare! We are proud to introduce o...",
			price: "₹ 1357",
		},
		{
			img: "src/assets/Images/CardImage8.jpg",
			name: "Livrax Capsule",
			Qntity: "10*10 CAP",
			weight: "700gm",
			des: "elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl",
			price: "₹ 1323",
		},
		{
			img: "src/assets/Images/CardImage9.jpg",
			name: "Detox Capsule",
			Qntity: "10*10 CAP",
			weight: "400gm",
			des: "amet porttitor eget dolor morbi non arcu risus quis varius",
			price: "₹ 1453",
		},
		{
			img: "src/assets/Images/CardImage10.jpg",
			name: "Sunscreen Lotion",
			Qntity: "10*10 CAP",
			weight: "500gm",
			des: "Welcome to Kayna Healthcare! We are proud to introduce o...",
			price: "₹ 1223",
		},

	];
	const items = [
		<Cardd key={1} />,
		<Cardd key={2} />,
		<Cardd key={3} />,

	];
	const firstfeaturebanner = [
		{
			name: "Our Features"
		},
		{
			name1: 'Free Delivery',
			name2: 'Cash on Delivery',
			name3: 'Shop with Confidence',
			name4: 'Secure Transaction',

		},
		{
			img1: "../src/assets/Images/Featurefreedelivery.svg",
			img2: "../src/assets/Images/Featurecashondelivery.svg",
			img3: "../src/assets/Images/FeatureConfidence.svg",
			img4: "../src/assets/Images/FeatureSecureTransaction.svg"
		}
	];
	const secondfeaturebanner = [
		{
			name: "EXCEPTIONAL QUALITY PRODUCTS"
		},
		{
			name1: 'Scientifically Researched',
			name2: 'ClinicallyTested',
			name3: 'Free From HeavyMetals',
			name4: 'PesticideFree',

		},
		{
			img1: "../src/assets/Images/Featurefreedelivery.svg",
			img2: "../src/assets/Images/Featurecashondelivery.svg",
			img3: "../src/assets/Images/FeatureConfidence.svg",
			img4: "../src/assets/Images/FeatureSecureTransaction.svg"
		}
	];
	return (
		<>
			<Header />
			{/* Grid for Home-banner */}

			<Grid container>
				<Grid item lg={12} className="banner-grid">
					<div className="banner-div">
						<img src={BannerImage} />
					</div>
				</Grid>
			</Grid>

			{/* Grid for Home-Tabs*/}
			<Grid container>
				<Grid
					item
					lg={12}
					className="kayna-exclusive"
					style={{ marginTop: "70px" }}
				>
					<div className="kayna-exclusive-div">
						<div className="kayna-exclusive-left">KAYNA EXCLUSIVE</div>
						<div className="kayna-exclusive-right">
							<Tabs />
						</div>
					</div>
				</Grid>
			</Grid>

			{/* Grid for cards on homepage */}
			<Grid container className="grid-container-card" lg={12}>
				<Grid item className="grid-item-card">
					<CardSection cardinfo={cardinfo} number="6" />
				</Grid>
			</Grid>
			<Box className="about-home-box">
				<Grid container className="about-home-container">
					<Grid item className="about-home-container-item-l" lg={5}>
						<img src={AboutImage1} />
					</Grid>
					<Grid item className="about-home-container-item-r" lg={5} sx={{ flexDirection: "column" }}>
						<Typography className="about-home-container-item-r-1" sx={{ fontSize: "4rem" }}>
							ABOUT KAYNA
						</Typography>
						<Typography className="about-home-container-item-r-2">
							Kayna was brought into existence to help people elevate their living through traditional remedies infused with modern science to address the well-being needs of people. We utilize the ancient knowledge of Ayurveda to create treatments that reinforce holistic health and well-being in people. With an unwavering commitment to quality and authenticity, we offer a comprehensive range of Ayurvedic products, all meticulously formulated to cater to your unique health and beauty needs.
						</Typography>
						<Typography className="about-home-container-item-r-2">
							We strive to become a quintessential go-to brand that gives people much-deserved care, pampering, and well-being in today's hustling world. By creating a safe and welcoming space, we are determined to motivate people to take a step toward holistic well-being.
						</Typography>
						<Button className="login-btn" variant="contained" sx={{
							color: "white", width: "40%", height: "8%", fontSize: "1.2rem", backgroundColor: "#006038",
							'&:hover': {
								backgroundColor: '#fd7e14',
                                color:"#006038",
								transition: '0.4s ease-in'
							},
						}}>Learn More</Button>
					</Grid>
				</Grid>
			</Box>
			<FeatureBanner props={firstfeaturebanner} />
			<HomeBanner
				img={Bi1}
			/>
			<FeatureBanner props={secondfeaturebanner} />
			<HomeBanner
				img={Bi2}
			/>
			<CardCart cardinfo={cardinfo} number={6} />
			<HomeBanner
				img={Bi3}
			/>
			<CardCart cardinfo={cardinfo} number={3} />
			<Footer/>
		</>
	);
}

export default App;
