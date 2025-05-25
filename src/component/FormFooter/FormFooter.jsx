import React from 'react';
import './FormFooter.css';

const FormFooter = ({ nextStep, currentStep , prevStep}) => {
	// console.log(currentStep);
	
	return (
		<footer className='form-footer absolute bottom-0'>
			<div className='flex justify-between items-center'>
				<div className='flex-1'>
					{currentStep !== 1 && <span className='text-sm font-medium cursor-pointer' onClick={prevStep}>Go back</span>}
				</div>
				<div>
					<button onClick={nextStep}>{currentStep === 4 ? 'Confirm' : 'Next step'}</button>
				</div>
			</div>
		</footer>
	);
};

export default FormFooter;
