import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "../public/Assets/Logo.svg";
import imageone from "../public/Assets/Hero Image.jpg";
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
				<main>
					<h1 className={styles.main_header}>
						Explore the best
						<br />
						camp on Earth.
					</h1>
					<p className={styles.text_subtitle}>
						lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when an unknown printer
					</p>
				</main>
			</body>
			<Image src={imageone} alt="Main Image" />
		</div>
	);
}
