import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "../public/Assets/Logo.svg";
import imageone from "../public/Assets/Hero Image.jpg";
import checkboximage from "../public/Assets/Checkmark.svg";
import airbnbimage from "../public/Assets/Airbnb.svg";
import bookingimage from "../public/Assets/Booking.svg";
import plumguide from "../public/Assets/Plum Guide.svg";
import imagetwo from "../public/Assets/Hero Image (Tablet and Mobile).jpg";
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Yelp Camp</title>
				<meta name="description" content="Yelp Camp" />
				<link rel="icon" href="/Assets/Logo.svg" />
			</Head>
			<body className={styles.landing_body}>
				<header className={styles.logo_image}>
					<Image src={logo} alt="Main Logo" />
				</header>
				<div className={styles.main_imagemobile}>
					<Image src={imagetwo} alt="main image" />
				</div>
				<main>
					<h1 className={styles.main_header}>
						Explore the best
						<br />
						camp on Earth.
					</h1>
					<p className={styles.text_subtitle}>
						lorem Ipsum has been the industry&apos;s standard dummy text ever
						since the 1500s, when an unknown printer
					</p>
					<div className={styles.check_box}>
						<div className={styles.check_box_line}>
							<Image src={checkboximage} alt="Checkmark" layout="fixed" />
							<p className={styles.check_box_text}>Make up your own reviews</p>
						</div>
						<div className={styles.check_box_line}>
							<Image src={checkboximage} alt="Checkmark" layout="fixed" />
							<p className={styles.check_box_text}>Make up your own reviews</p>
						</div>
						<div className={styles.check_box_line}>
							<Image src={checkboximage} alt="Checkmark" layout="fixed" />
							<p className={styles.check_box_text}>Make up your own reviews</p>
						</div>
					</div>
					<div className={styles.pat_with_part}>
						<h6>Partnered With:</h6>
						<div>
							<Image src={airbnbimage} alt="airbnb" />
							<Image src={bookingimage} alt="booking.com" />
							<Image src={plumguide} alt="plum guide" />
						</div>
					</div>
				</main>
			</body>
			<Image
				src={imageone}
				alt="Main Image"
				className={styles.main_landingimage}
			/>
		</div>
	);
}
