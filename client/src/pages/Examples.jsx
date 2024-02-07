import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Examples = () => {
	return (
		<main className="flex flex-col items-center bg-[#9fcaff] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
			<Helmet>
				<title>CoverWriteAI - Examples</title>
			</Helmet>
			<div className="flex lg:flex-row flex-col items-center w-full gap-8 justify-between">
				<div className="flex flex-col items-center lg:items-start gap-8">
					<h2 className="font-bold text-3xl md:text-6xl  text-[#004fb6]">
						<span className="lg:block">CoverWriteAI </span>
						<span>In Action</span>
					</h2>
					<p className="text-[#3a4688] font-semibold text-lg lg:w-[380px]">
						See how our cutting-edge technology crafts personalized
						and compelling cover letters.
					</p>
					<Link
						to="/create"
						className="text-[#fcfcd4] bg-[#004fb6] hover:bg-[#003d99] active:bg-[#003c99] font-bold px-20 py-3 rounded-full lg:inline-block w-full md:w-max text-center hidden"
					>
						Get Started
					</Link>
				</div>
				<div className="relative overflow-hidden w-full pt-[56.25%] lg:pt-[0] lg:w-[640px] lg:h-[360px]">
					<iframe
						className="absolute top-0 left-0 w-full h-full"
						src="https://drive.google.com/file/d/1DYPLX_QrDbEolg855sltB4fpCOAn3B0V/preview?usp=sharing?autoplay=1"
						title="CoverWriteAI in Action"
						allowFullScreen="1"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						loading="lazy"
					></iframe>
				</div>
				<Link
					to="/create"
					className="text-[#fcfcd4] bg-[#004fb6] hover:bg-[#003d99] active:bg-[#003c99] font-bold px-20 py-3 rounded-full inline-block text-center lg:hidden"
				>
					Get Started
				</Link>
			</div>
			<h2 className="text-2xl md:text-4xl text-[#004fb6] font-medium mt-32">
				Sample Cover Letters
			</h2>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<div className="flex items-start bg-white w-full shadow-lg p-8 rounded-lg gap-8 mt-8">
					<div>
						<h3 className="text-2xl font-bold text-[#004fb6]">
							Software Engineer
						</h3>
						<hr className="w-1/2 my-4" />
						<p>
							Dear Hiring Manager,
							<br /> &nbsp; I am writing to express my interest in
							the Software Engineer position at NewTek. I am a
							recent graduate of the Computer Science program at
							the University of California, Berkeley, where I
							maintained a 3.9 GPA. I have a strong background in
							software development, with experience in a variety
							of programming languages and technologies, including
							HTML, CSS, JavaScript, React.js, and TailwindCSS.
							<br /> In my previous role as a Software Engineer
							Intern at Google, I was responsible for developing
							and maintaining software applications that were used
							by millions of users. I have a proven track record
							of delivering high-quality software solutions on
							time and within budget. I am also a highly motivated
							and self-driven individual with a strong work ethic.
							<br />
							I am confident that I have the skills and experience
							that you are looking for in a Software Engineer. I
							am eager to learn new things and am always looking
							for ways to improve my skills. I am also a team
							player and am able to work effectively with others.
							<br />
							I am eager to learn more about the Software Engineer
							position at NewTek and how my skills and experience
							can contribute to your team. I am available for an
							interview at your earliest convenience.
							<br /> Thank you for your time and consideration.
							<br />
							<br /> Sincerely,
							<br /> John Doe
						</p>
					</div>
				</div>
				<div className="flex items-start bg-white w-full shadow-lg p-8 rounded-lg gap-8 mt-8">
					<div>
						<h3 className="text-2xl font-bold text-[#004fb6]">
							Accountant
						</h3>
						<hr className="w-1/2 my-4" />

						<p>
							Dear Hiring Manager,
							<br /> I am writing to express my interest in the
							Staff Accountant position at PeachStack. I have been
							working as an Accountant for the past five years,
							and I have a strong understanding of the accounting
							principles and procedures necessary to perform this
							role effectively. I am also proficient in Microsoft
							Excel and accounting software, and I have excellent
							communication and interpersonal skills.
							<br /> In my previous role at ABC Company, I was
							responsible for all aspects of the accounting
							function, including general ledger reconciliation,
							accounts payable and receivable, and financial
							reporting. I also worked closely with the management
							team to provide financial analysis and advice. I am
							confident that I have the skills and experience
							necessary to be successful in this role.
							<br /> I am a highly motivated and results-oriented
							individual with a strong work ethic. I am also a
							team player and I am eager to learn new things. I am
							confident that I would be a valuable asset to your
							team.
							<br /> I am available for an interview at your
							earliest convenience. Thank you for your time and
							consideration.
							<br />
							<br /> Sincerely, <br />
							Juan Perez
						</p>
					</div>
				</div>
				<div className="flex items-center bg-white w-full shadow-lg p-8 rounded-lg gap-8 mt-8">
					<div>
						<h3 className="text-2xl font-bold text-[#004fb6]">
							Data Analyst
						</h3>
						<hr className="w-1/2 my-4" />
						<p>
							Dear Hiring Manager,
							<br /> I am writing to express my interest in the
							Data Analyst position at XYZ Analytics Solutions. I
							have been working as a Data Analyst for the past
							three years, and I have a proven track record of
							success in transforming raw data into actionable
							insights. In my previous role at ABC Company, I was
							responsible for developing and implementing data
							analysis solutions that helped the company to
							improve its marketing campaigns, customer service,
							and product development. I am proficient in a
							variety of data analysis tools and languages,
							including SQL, Python, R, and Jupyter Notebook. I am
							also experienced in using data visualization tools
							to communicate complex findings in a clear and
							concise manner.
							<br /> I am a highly motivated and detail-oriented
							individual with a strong passion for data analysis.
							I am also a team player with excellent communication
							and presentation skills. I am confident that I have
							the skills and experience that you are looking for
							in a Data Analyst.
							<br />
							I am eager to learn more about the Data Analyst
							position at XYZ Analytics Solutions and how I can
							contribute to your team. I am available for an
							interview at your earliest convenience.
							<br />
							<br /> Sincerely, <br />
							Emma Schmidt
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Examples;
