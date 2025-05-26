import React, { useState } from 'react';
import './SideBar.css';

const Sidebar = ({activeStep}) => {
	// const [activeStep, setActiveStep] = useState(1);

	const steps = [
		{ number: 1, title: 'Your info' },
		{ number: 2, title: 'Select plan' },
		{ number: 3, title: 'Add-ons' },
		{ number: 4, title: 'Summary' },
	];

	return (
		<ul className='form-step-counter'>
			{steps.map((step) => (
				<li
					key={step.number}
					className={`form-step flex gap-5 items-center ${step.number === activeStep ? 'active' : ''}`}
				>
					<div className='list-number'>{step.number}</div>
					<div className='list-content'>
						<p className='step-number'>Step {step.number}</p>
						<p className='step-title'>{step.title}</p>
					</div>
				</li>
			))}
		</ul >
	);
};

export default Sidebar;
