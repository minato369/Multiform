import React from 'react'

const FormHeader = ({step}) => {

	const headingType = [
		{ number: 1, heading: 'Personal info', desc:'Please provide your name, email address, and phone number.' },
		{ number: 2, heading: 'Select your plan', desc:'You have the option of monthly or yearly billing.' },
		{ number: 3, heading: 'Pick add-ons',desc:'Add-ons help enhance your gaming experience.' },
		{ number: 4, heading: 'Finishing up', desc:'Double-check everything looks OK before confirming.' },
	]

	const currentStep = headingType.find(item => item.number === step);

	return (
		<header className='form-step-heading'>
			<h3 className='form-step-title text-3xl font-extrabold'>{currentStep?.heading || 'Step'}</h3>
			<p className='text-sm'>{currentStep?.desc || ''}</p>
		</header>
	)
}

export default FormHeader