import React, { useState } from 'react'
import './StepOne.css'
import FormHeader from '../FormHeader/FormHeader'
import FormFooter from '../FormFooter/FormFooter'

const StepOne = ({ nextStep, step, data, updateUserInfo }) => {
	const [errors, setErrors] = useState({
		name: '',
		mail: '',
		phone: ''
	})

	const validate = () => {
		let newErrors = { name: '', mail: '', phone: '' }
		let isValid = true

		if (!data.name.trim()) {
			newErrors.name = 'Name is required'
			isValid = false
		}

		if (!data.mail.trim()) {
			newErrors.mail = 'Email is required'
			isValid = false
		} else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.mail)) {
			newErrors.mail = 'Invalid email format'
			isValid = false
		}

		if (!data.phone.trim()) {
			newErrors.phone = 'Phone number is required'
			isValid = false
		} else if (!/^\d{10}$/.test(data.phone)) {
			newErrors.phone = 'Invalid phone number'
			isValid = false
		}

		setErrors(newErrors)
		return isValid
	}

	const handleNext = () => {
		if (validate()) {
			nextStep()
		}
	}

	return (
		<article className='form-step-one relative h-full py-3'>
			<FormHeader step={step} />
			<div className='form-step-body'>

				{/* Name Field */}
				<div className='form-group flex flex-col gap-2'>
					<div className='form-step-label flex justify-between'>
						<label htmlFor='form-field-name' className='text-sm'>Name</label>
						{errors.name && <p className='text-sm text-red-500'>{errors.name}</p>}
					</div>
					<input
						type='text'
						id='form-field-name'
						placeholder='e.g. Stephen King'
						value={data.name}
						name='name'
						onChange={(e) => updateUserInfo('name', e.target.value)}
						className={errors.name ? 'border-red-500' : ''}
					/>
				</div>

				{/* Email Field */}
				<div className='form-group flex flex-col gap-2'>
					<div className='form-step-label flex justify-between'>
						<label htmlFor='form-field-email' className='text-sm'>Email Address</label>
						{errors.mail && <p className='text-sm text-red-500'>{errors.mail}</p>}
					</div>
					<input
						type='email'
						id='form-field-email'
						placeholder='e.g. stephenking@lorem.com'
						value={data.mail}
						name='mail'
						onChange={(e) => updateUserInfo('mail', e.target.value)}
						className={errors.mail ? 'border-red-500' : ''}
					/>
				</div>

				{/* Phone Field */}
				<div className='form-group flex flex-col gap-2'>
					<div className='form-step-label flex justify-between'>
						<label htmlFor='form-field-number' className='text-sm'>Phone Number</label>
						{errors.phone && <p className='text-sm text-red-500'>{errors.phone}</p>}
					</div>
					<input
						type='tel'
						id='form-field-number'
						placeholder='e.g. 1234567890'
						value={data.phone}
						name='phone'
						onChange={(e) => updateUserInfo('phone', e.target.value)}
						className={errors.phone ? 'border-red-500' : ''}
					/>
				</div>
			</div>
			<FormFooter nextStep={handleNext} currentStep={step} />
		</article>
	)
}

export default StepOne
