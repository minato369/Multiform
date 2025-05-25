// StepFour.jsx
import React from 'react';
import './StepFour.css';
import FormHeader from '../FormHeader/FormHeader';
import FormFooter from '../FormFooter/FormFooter';

const StepFour = ({ data, goToStep, step, prevStep, nextStep }) => {
	const totalAddOnPrice = data.addOns.reduce((sum, item) => {
		return sum + (data.plan.isYearly ? item.yearlyPrice : item.monthlyPrice);
	}, 0)

	const totalPrice = data.plan.price + totalAddOnPrice;
	return (
		<article className='form-step-four relative h-full py-3'>
			<FormHeader step={4} />
			<div className='form-step-body flex flex-col gap-3 justify-center'>
				<div className='form-four-breakdown'>
					<div className='form-four-plan flex justify-between items-center border-b-1'>
						<div>
							<h3 className='capitalize font-medium'>
								<span className='plan-type'>{data.plan.type}</span>
								(<span className='plan-validity'>{data.plan.isYealry ? 'yearly' : 'monthly'}</span>)
							</h3>
							<a
								onClick={() => goToStep(2)}
								className='form-redirect-step-two font-light text-sm cursor-pointer text-blue-600 hover:underline'
							>
								Change
							</a>
						</div>
						<div className='form-four-plan-price'>
							<h3 className='form-four-plan capitalize font-medium'>
								${data.plan.price}/{data.plan.isYealry ? 'yr' : 'mo'}
							</h3>
						</div>
					</div>
					{
						data.addOns.map((item) => (
							<div className='form-four-addons flex justify-between items-center text-sm'>
								<div className='form-four-addons-name capitalize '>{item.tag.replace('_', ' ')}</div>
								<div className='form-four-addons-price font-sm'>+${data.plan.isYearly ? item.yearlyPrice : item.monthlyPrice}/{data.plan.isYearly ? 'yr' : 'mo'}</div>
							</div>
						))
					}

				</div>
				<div className='form-four-total-price flex justify-between items-center'>
					<div className='form-four-total-price-title text-sm'>Total ({data.plan.isYearly ? 'Year' : 'Month'})</div>
					<div className='form-four-total-price-pricing text-lg font-medium'>${totalPrice}/{data.plan.isYearly ? 'yr' : 'mo'}</div>
				</div>
			</div>
			<FormFooter currentStep={step} prevStep={prevStep} nextStep={nextStep} />
		</article>
	);
};

export default StepFour;
