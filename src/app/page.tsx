import Image from "next/image";
import { open_sans, poppins } from "./fonts";

export default function Home() {
	return (
		<main className="h-screen w-screen bg-violet text-white bg-[url('/bg-mobile.svg')] bg-top bg-contain bg-no-repeat lg:bg-[url('/bg-desktop.svg')] lg:bg-cover lg:bg-right flex flex-col gap-12">
			<div className="pt-5 px-8 ">
				<Image
					src={"/logo.svg"}
					alt={"Huddle logo"}
					width={264}
					height={"49"}
					className="w-36  h-12"
				/>
			</div>
			<div className="flex flex-col items-center justify-center text-center gap-10">
				<Image
					src={"/illustration-mockups.svg"}
					alt={"Huddle logo"}
					width={264}
					height={"49"}
					className="w-64"
				/>
				<div className="max-w-xs flex flex-col gap-8 items-center">
					<h1 className={`${poppins.className} text-2xl font-bold`}>
						Build The Community Your Fans Will Love
					</h1>
					<p className={`${open_sans.className} tracking-wide	`}>
						Huddle re-imagines the way we build communities. You
						have a voice, but so does your audience. Create
						connections with your users as you engage in genuine
						discussion.
					</p>
					<button className="bg-white text-violet p-3 w-2/3 rounded-full shadow-md shadow-black/50 text-sm  hover:bg-magenta hover:text-white">
						Register
					</button>
				</div>
			</div>
			<footer className="flex flex-row gap-4 justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#fff"
					viewBox="0 0 256 256"
				>
					<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#fff"
					viewBox="0 0 256 256"
				>
					<path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#fff"
					viewBox="0 0 256 256"
				>
					<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
				</svg>
			</footer>
		</main>
	);
}
