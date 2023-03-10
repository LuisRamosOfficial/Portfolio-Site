import react from 'react';
import { useRef } from 'react';
import AboutMe from './assets/Components/AboutMe';
import ProjectSlider from './assets/Components/ProjectSlider';
import Scene3D from './assets/Components/Scene3D';
import Title from './assets/Components/Title';
import styles from './assets/styles/App.module.css';
import Contacts from './assets/Components/Contacts';
import { Helmet } from 'react-helmet';

const App = () => {

  const AppRef= useRef(null);

    return (
			<div ref={AppRef} className={styles.App}>
				<Helmet>
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@l_ramos14" />
					<meta name="twitter:title" content="Luis Ramos's Portfolio" />
					<meta
						name="twitter:description"
						content="Software Engineer Portfolio - Luis Ramos"
					/>
					<meta
						name="twitter:image"
						content="https://i.imgur.com/fYseTNF.png"
					/>
					<meta name="twitter:url" content="https://luisviegas.art" />
					<meta name="twitter:creator" content="@l_ramos14" />
					<meta charSet="UTF-8" />
					<link rel="icon" type="image/svg+xml" href="/icon.ico" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>

					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta
						name="apple-mobile-web-app-title"
						content="Luis Ramos Portfolio"
					/>
					<meta name="description" content="Luis Ramos Portfolio" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta
						name="msapplication-config"
						content="/icons/browserconfig.xml"
					/>
					<meta name="msapplication-TileColor" content="#2B5797" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="theme-color" content="#000000" />
					<meta content="text/html; charset=UTF-8" name="Content-Type" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Luis Ramos Portfolio" />
					<meta property="og:description" content="Luis Ramos Portfolio" />
					<meta property="og:site_name" content="Luis Ramos Portfolio" />
					<meta property="og:url" content="https://luisviegas.art" />
					<meta property="og:image" content="https://i.imgur.com/fYseTNF.png" />

					<link rel="manifest" href="/manifest.webmanifest" />
					<link
						rel="mask-icon"
						href="/icons/safari-pinned-tab.svg"
						color="#5bbad5"
					/>
					<link rel="shortcut icon" href="/icon.ico" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
					/>

					<title>Luis Ramos - Portfolio</title>
					<link
						rel="stylesheet"
						href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
					/>
				</Helmet>
				<Scene3D scroll={AppRef} />
				<Title />
				<AboutMe />
				<ProjectSlider />
				<Contacts />
			</div>
		);
}

export default App
