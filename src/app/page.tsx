import Image from "next/image";
import { open_sans, poppins } from "./fonts";

export default function Home() {
	return (
		<main className="h-screen w-screen bg-violet text-white">
			<Image
				src={"/logo.svg"}
				alt={"Huddle logo"}
				width={264}
				height={"49"}
			/>
			<div>
				<h1 className={`${poppins.className}`}>
					Build The Community Your Fans Will Love
				</h1>
				<p className={`${open_sans.className}`}>
					Huddle re-imagines the way we build communities. You have a
					voice, but so does your audience. Create connections with
					your users as you engage in genuine discussion.
				</p>
				<button>Register</button>
			</div>
			<footer></footer>
		</main>
	);
}
