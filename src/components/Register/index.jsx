import React, { useState } from 'react'

const Register = () => {

	const [form, setForm] = useState({ name: '', phone: '' })
	const [status, setStatus] = useState('idle')

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setStatus('sending')

		// ✅ Telefon raqami tekshiruvi
		const uzbekPhoneRegex = /^\+998\d{9}$/
		if (!uzbekPhoneRegex.test(form.phone)) {
			setStatus('error')
			alert('Пожалуйста, введите корректный номер в формате +998xxxxxxxxx')
			return
		}

		try {
			await fetch(`https://script.google.com/macros/s/AKfycbx6ui9lRSM354aM-5GWPgkhYY7W5ER85ziaNrPXAfYs-RhQV8W769yg2yquSQJ41EXP/exec`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					fullName: form.name,
					phoneNumber: form.phone,
				}),
				mode: 'no-cors',
				redirect: 'follow',
			})

			setStatus('success')
			setForm({ name: '', phone: '', company: '' })
		} catch {
			setStatus('error')
		}
	}

	return (
		<section className='min-h-screen register relative rounded-t-[60px] pt-[150px]'>
			<div className='container'>
				<div className='bg-[#1D1D1D] rounded-[20px] overflow-hidden flex flex-col-reverse md:flex-row  relative'>
					{/* Left Side - Image */}
					<div className='md:w-1/2  flex items-end justify-center pt-6 px-4 pb-0 md:pb-4'>
						<img
							src='/register.png'
							alt='Mother and Daughter'
							className='rounded-full object-cover w-full h-full border-[20px] border-[#D5AB65] mb-10 md:mb-0 '
						/>
					</div>

					{/* Right Side - Form */}
					<div className='md:w-1/2 p-8 text-white relative'>
						<h2 className='text-[40px] md:text-[56px] leading-[140%] mb-6 text-center'>
							RO'YXATDAN O'TING
						</h2>

						<form
							onSubmit={handleSubmit}
							className='flex flex-col justify-between  md:h-[400px]'
						>
							<div className='space-y-5'>
								<div className='relative'>
									<input
										name='name'
										type='text'
										placeholder='Ismingiz'
										value={form.name}
										onChange={handleChange}
										className='w-full pr-4 pl-14 py-4 rounded-[18px]  text-white border border-[#848484] focus:outline-none focus:ring-2 focus:ring-[#EDD7A1] manrope-regular'
									/>
									<img
										src='/user-icon.svg'
										alt='user icon'
										className='absolute top-[50%] left-4 transform -translate-y-1/2'
									/>
								</div>

								<div className='relative'>
									<input
										name='phone'
										type='tel'
										value={form.phone}
										onChange={handleChange}
										placeholder='Telefon raqamingiz'
										className='w-full pr-4 pl-14 py-4 rounded-[18px]  text-white border border-[#848484] focus:outline-none focus:ring-2 focus:ring-[#EDD7A1] manrope-regular'
									/>
									<img
										src='/user-icon.svg'
										alt='user icon'
										className='absolute top-[50%] left-4 transform -translate-y-1/2'
									/>
								</div>
							</div>

							<div className='relative cursor-pointer mt-16'>
								<img
									className='absolute top-[50%] left-[-24px] transform -translate-y-1/2 w-[150px] h-[150px] '
									src='/button-img.png'
									alt='notebook icon'
									width={150}
									height={150}
								/>

								<button
									style={{
										background:
											'linear-gradient(90deg, #F6E2A3 0%, #D4B483 100%)',
									}}
									type='submit'
									className='w-full pl-[40px] text-[#403211] md:text-[24px] py-4 rounded-[6px] manrope-bold cursor-pointer'
								>
									{status === 'sending'
										? 'Yuborilmoqda...'
										: 'RO’YXATDAN O’TISH'}
								</button>
							</div>
						</form>

						{/* Modal */}
						{status === 'success' && (
							<div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50'>
								<div className='bg-white text-black p-8 rounded-xl max-w-md text-center relative shadow-lg'>
									<button
										className='absolute top-3 right-4 text-xl font-bold'
										onClick={() => setStatus('idle')}
									>
										×
									</button>
									<h2 className='text-2xl font-bold mb-4'>
										Ro'yxatdan o'tganingiz uchun rahmat!
									</h2>
									<p className='mb-6 text-gray-700'>
										Yopiq Telegram kanalimizga qo'shiling. AI yangiliklari va
										kelgusi tadbirlar haqida xabardor bo‘ling.
									</p>
									<a
										href='https://t.me/YOUR_CHANNEL_USERNAME' // Bu yerga o'z kanal linkingizni qo'ying
										target='_blank'
										rel='noopener noreferrer'
										className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition'
									>
										Telegramga o‘tish
									</a>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Register
