import { ResumeSectionProps } from './ResumeSection.type';

export function ResumeSection({ resumeData }: ResumeSectionProps) {
	return (
		<section
			id="resume"
			className="section__resume"
		>
			<div className="wrapper">
				<h1>Resumé</h1>
				<pre>{JSON.stringify(resumeData, null, ' ')}</pre>
			</div>
		</section>
	);
}
