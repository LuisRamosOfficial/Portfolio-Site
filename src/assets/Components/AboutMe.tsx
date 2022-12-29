import React, { FC, useEffect, useState } from 'react';
import styles from '../styles/AboutMe/AboutMe.module.css';
import data from '../../data.json';

const AboutMe: FC = () => {
	const [Active, setActive] = useState<number>(0);
	useEffect(() => {
		console.log(data.Skills);
		console.log(Object.keys(data.Skills));
	}, []);

	const clickHandler = (order: number) => {
		setActive(order);
	};

	return (
		<main className={styles.main}>
			<div className={styles.desc}>
				{Active == 0 && <AboutMeSection />}
				{Active == 1 && <SkillsSection />}
			</div>
			<div className={styles.buttons}>
				<Button
					text={'About Me'}
					order={0}
					Active={Active}
					onClick={clickHandler}
				/>
				<Button
					text={'Skills'}
					order={1}
					Active={Active}
					onClick={clickHandler}
				/>
			</div>
		</main>
	);
};

const AboutMeSection = () => {
	return (
		<div className={styles.AboutMeSection}>
			<h1>About Me</h1>
			<p>
				Hello! My name is Luis, and I&apos;m a Junior Software Engineer.
				Specialized in Front-End Development, nevertheless I still have a solid
				understanding in Backend Development and in Desktop Development.
				<br></br>
				<br></br>
				Fueled by high energy levels and boundless enthusiasm, I&apos;m easily
				inspired and more then willing to follow my fascinations wherever they
				take me. I&apos;m passionate, expressive, multi-talented spirit with a
				natural ability to entertain and inspire. I&apos;m never satisfied to
				just come up with ideas. Instead I have an almost impulsive need to act
				on them.
				<br></br>
				<br></br>
				I&apos;m a fast learner, able to pick up new skills and juggle different
				projects and roles with relative ease.
			</p>
		</div>
	);
};
const SkillsSection = () => {
	return (
		<>
			<h1 className={styles.skillsHeader}>Skills</h1>
			{Object.keys(data.Skills).map((e: string, index) => (
				
                
                <div className={styles.SkillRow} key={index}>
					<h2 className={styles.SkillTitle} key={index}>{e}:</h2>


					<div key={index + 1} className={styles.SkillList}>
						{data.Skills[e as keyof typeof data.Skills].map((el, index) => (
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							//@ts-ignore
							<div key={index + 2} className={styles.Skill}>
								<p className={styles.SkillName}>{el.Name}</p>
								<img data-name={el.Name} alt={el.Name} className={styles.SkillImg} src={el.Icon} key={index}/>
							</div>
						))}
					</div>
				</div>
			))}
		</>
	);
};

interface Button {
	text: string;
	order: number;
	Active: number;
	onClick: (order: number) => void;
}

const Button: FC<Button> = ({ text, order, Active, onClick }) => {
	return (
		<button
			onClick={() => onClick(order)}
			className={Active == order ? styles.active : styles.deactive}
		>
			{text}
		</button>
	);
};
export default AboutMe;
