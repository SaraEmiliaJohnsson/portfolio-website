import React from "react";
import "./AboutComponent.scss";
import PersonalityButton from "../../components/buttons/PersonalityButton";

const AboutComponent = () => {
	return (
		<div className="about--container">
			<section className="about--inside__container-two">
				<article className="personality--btn__container">
					<PersonalityButton />
				</article>
			</section>
			<section className="about--inside__container-one">
				<h2>Om mig</h2>
				<h4>Sara Johnsson</h4>
				<p>Jag är 37 år, jag bor i Norrtälje med min man och våra två barn.</p>
				<br />
				<h4>Tidigare erfarenheter</h4>

				<p>
					Under mina 14 år som brevbärare har jag utvecklat färdigheter och
					egenskaper som är avgörande för yrket. Att arbeta som brevbärare har
					krävt en kombination av stresshantering, noggrannhet och hög kvalitet
					i utförandet av arbetsuppgifterna. Den kontinuerliga hanteringen av
					arbetsbördan och upprätthållandet av ett högt tempo har varit en
					daglig utmaning, vilket har stärkt min förmåga att hantera stress och
					tryck. <br /> <br />
					Noggrannhet har varit en nyckelaspekt av mitt arbete, särskilt när det
					gäller korrekt sortering och leverans av post till rätt adresser. Den
					här erfarenheten har lärt mig att uppskatta vikten av att vara
					noggrann och uppmärksam på detaljer för att undvika misstag och
					säkerställa korrekt leverans. <br /> <br /> De senaste åren har jag
					dessutom haft möjligheten att ta på mig en ledande roll inom teamet.
					Att vara ledare har gett mig möjlighet att vägleda och stödja mina
					kollegor, och detta har bidragit till min personliga och
					professionella tillväxt. Jag har mognat och vuxit upp på denna
					arbetsplats genom att möta olika utmaningar och utveckla min förmåga
					att navigera i arbetslivet. <br /> <br />
					Sammanfattningsvis representerar min erfarenhet som brevbärare en
					balans mellan att hantera stress, upprätthålla noggrannhet och
					leverera kvalitet i högt tempo. Min tid som ledare har också förstärkt
					min förmåga att guida och stödja andra. Denna erfarenhet har varit en
					betydelsefull del av min professionella resa och har bidragit till min
					personliga utveckling.
				</p>
			</section>

			<section className="about--inside__container-three">
				<h2>Ny väg i livet!</h2>
				<h4>Utbildning på vägen till att bli Front End Utvecklare</h4>
				<h4>Hermonds</h4>
				<p>
					På Hermonds började min resa för att där jag fokuserade på att studera
					kurser som var relevanta för att komma in på
					webbutvecklingsutbildningar.
				</p>
				<br />
				<ul>
					<li>Matematik 2B</li>
					<li>Programmering 1</li>
					<li>Webbutveckling 1</li>
				</ul>
				<br />
				<h4>KYH Anywhere</h4>
				<p>
					Efter Hermods valde jag att fortsätta min utbildning genom att gå en
					Frontend Developer-utbildning på KYH. En av anledningarna till detta
					val var den spännande LIA (Lärande i Arbete) perioden, som erbjöd
					möjligheten att tillämpa mina kunskaper i en verklig arbetsmiljö.
					Dessutom var det praktiskt att utbildningen var baserad nära min
					hemort, vilket underlättade det dagliga livet. <br /> <br /> De språk
					och teknologier som jag framförallt fokuserade på och lärde mig mycket
					om under KYH-utbildningen inkluderade HTML, CSS/SASS, JavaScript och
					React/Vite. Denna inriktning på Frontend Development gav mig en djup
					förståelse för de teknologier som är centrala för att skapa
					interaktiva och användarvänliga webbsidor och applikationer.
				</p>
			</section>
		</div>
	);
};

export default AboutComponent;
