import { h } from "preact";
const style = require("../style/footer.module.css");

export default () => {
	return (
		<footer>
			<div className={style.footerGrid}>
				<div>
					<img src="https://www.smogon.com/media/zracknel-beta.svg.m.1" alt="Smogon" />
					<div className={style.uni}>
						<div>Smogon</div> 
						<div>University</div>
					</div>
				</div>

				<div>
					<ul>
						<li>About</li>
						<li>Pok&eacute;dex</li>
						<li>Forums</li>
						<li>Tournaments</li>
						<li>Pok&eacute;mon Showdown!</li>
					</ul>

					<div className={style.social}>
						<i class="fab fa-twitter fa-4x"></i>
						<i class="fab fa-facebook-f fa-4x"></i>
						<i class="fab fa-youtube fa-4x"></i>
						<i class="fab fa-discord fa-4x"></i>
					</div>

					<div className={style.copy}>All guides and strategy information are &copy; 2004-2020 Smogon.com and its contributors. Pok&eacute;mon is &copy; 1995-2020 Nintendo. Privacy Policy</div>
				</div>
			</div>
		</footer>
	);
};