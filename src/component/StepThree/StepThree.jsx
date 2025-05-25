import React, { useState, useEffect } from 'react';
import FormHeader from '../FormHeader/FormHeader';
import FormFooter from '../FormFooter/FormFooter';
import './StepThree.css';

const StepThree = ({ step, nextStep, prevStep, data, updateAddons }) => {
	const [selectedCheckBoxes, setSelectedCheckBoxes] = useState([]);
	console.log(data);
	
	const checkboxObj = [
		{ tag: 'online_service', description: 'Access to multiplayer games', monthlyPrice: 1, yearlyPrice: 10},
		{ tag: 'larger_storage', description: 'Extra 1TB of cloud save',  monthlyPrice: 2, yearlyPrice: 20 },
		{ tag: 'customizable_profile', description: 'Custom theme on your profile', monthlyPrice: 2, yearlyPrice: 20  }
	];

	const toggleCheckbox = (tag) => {
		const existing = selectedCheckBoxes.find(item => item.tag === tag);
		if (existing) {
			setSelectedCheckBoxes(prev => prev.filter(item => item.tag !== tag));
		} else {
			const newItem = checkboxObj.find(item => item.tag === tag);
			if (newItem) {
				setSelectedCheckBoxes(prev => [...prev, newItem]);
			}
		}
	};
	
	useEffect(()=>{
		updateAddons(selectedCheckBoxes);
	}, [selectedCheckBoxes])

	return (
		<article className='form-step-three relative h-full py-3'>
			<FormHeader step={step} />
			<div className='form-step-body flex flex-col gap-3 justify-center'>
				{checkboxObj.map((item) => {
					const isChecked = data.addOns.some(checkbox => checkbox.tag === item.tag);
					return (
						<label
							key={item.tag}
							htmlFor={item.tag}
							className={`form-checkbox-group flex items-center justify-between border rounded-md cursor-pointer ${isChecked ? 'selected-checkbox' : ''
								}`}
						>
							<div className='flex items-center gap-3'>
								<input
									type="checkbox"
									name={item.tag}
									id={item.tag}
									className="form-checkbox"
									checked={isChecked}
									onChange={() => toggleCheckbox(item.tag)}
								/>
								<span className="form-checkbox-wrapper"></span>
								<div>
									<span className='checkbox-title font-medium capitalize text-md'>
										{item.tag.replace('_', ' ')}
									</span>
									<span className='checkbox-desc text-sm font-normal block'>
										{item.description}
									</span>
								</div>
							</div>
							<div className='form-checkbox-price text-sm font-light'>
								 +{data.plan.isYearly ? item.yearlyPrice : item.monthlyPrice}/{data.plan.isYearly ? 'yr' :'mo'}
							</div>
						</label>
					);
				})}
			</div>
			<FormFooter nextStep={nextStep} currentStep={step} prevStep={prevStep} />
		</article>
	);
};

export default StepThree;