import './App.css'
import StepTwo from './component/Steptwo/StepTwo'
import Sidebar from './component/SideBar/Sidebar'
import StepOne from './component/StepOne/StepOne'
import StepThree from './component/StepThree/StepThree'
import StepFour from './component/StepFour/StepFour'
import StepFive from './component/StepFive/StepFive'
import { useState } from 'react'

function App() {

	const [step, setStep] = useState(1);
	const nextStep = () => setStep(prev => prev + 1);
	const prevStep = () => setStep(prev => prev - 1);
	
	const [formData, setFormData] = useState({
		userInfo: {
			name: '',
			mail: '',
			phone: ''
		},
		plan: {
			type: '',
			price: 0,
			isYearly: false
		},
		addOns: [],
	});

	const updateUserInfo = (key, value) =>{
		setFormData(prev =>({
			...prev, 
			userInfo:{
				...prev.userInfo,
				[key]:value
			}
		}))
	}
	
	const updatePlan = (planType, price, isYearly) => {
		setFormData(
			prev => ({
				...prev,
				plan:{
					type:planType,
					price:price,
					isYearly:isYearly
				}
			})
		)
	}

	const updateAddons = (addons) =>{
		setFormData(prev => ({
		...prev,
		addOns:addons
		}))
	}


	const renderStep = () => {
		switch (step) {
			case 1:
				return <StepOne step={step} nextStep={nextStep} data={formData.userInfo} updateUserInfo={updateUserInfo}/>;
			case 2:
				return <StepTwo step={step} nextStep={nextStep} prevStep={prevStep} data={formData.plan} updatePlan={updatePlan}/>;
			case 3:
				return <StepThree step={step} nextStep={nextStep} prevStep={prevStep} updateAddons={updateAddons} data={formData}/>;
			case 4:
				return <StepFour step={step} nextStep={nextStep} prevStep={prevStep} data={formData} goToStep={setStep}/>;
			case 5:
				return <StepFive step={step}/>;
			default:
				return <div>Invalid Step</div>;
		}
	};
	return (
		<>
			<div className='form-container rounded-xl m-5'>
				<main className='form-content flex gap-3'>
					<aside className='form-menu flex-1'>
						<Sidebar activeStep={step} />
					</aside>
					<section className='flex-2'>
						{renderStep()}
					</section>
				</main>
			</div >
		</>
	)
}

export default App
