import React from 'react'

const Gift = () => {
	const items = [
		'Ilmiy asoslangan, amalda ishlaydigan tarbiya usullari – har kuni qo‘llab natija ko‘rasiz.',
		'Haftasiga 5 marta kuchli ekspertlardan jonli darslar – savollaringizga javob olasiz.',
		'Har bir dars yozib olinadi va 1 yil davomida qayta ko‘rish imkoniyati – istalgan payt qaytib o‘rganasiz.',
		'Shoira Isakovani shaxsan o‘zi bilan muloqot – istalgan savolingizga bevosita javob olish imkoniyati.',
		'Expertlar bilan uchrashuvlar — real hayotda muloqot va amaliy mashg‘ulotlar',
	]

	return (
		<div className='min-h-screen py-[120px] relative'>

			{/* Background Image */}
			<img
				src='/gift-bg.png'
				alt='Gift Background'
				className='absolute top-[-50px] left-0 w-[400px] h-[400px] -z-10'
			/>

			<img src="/gift-bg-2.png" alt="Gift" className="gift-bg" />

			{/* Content */}

			<div className='container'>
				<div
					style={{
						background: 'linear-gradient(90deg, #FFF7E0 0%, #FFE6A7 100%)',
					}}
					className='rounded-[40px] md:rounded-[55px] w-full flex  flex-col-reverse lg:flex-row md:gap-0'
				>
					{/* Left Side: Image */}

					<img src='/gift.png' alt='Gift' className='w-[150px] md:w-80' />

					{/* Right Side: Text */}
					<div className='px-4 lg:pr-16 py-6 md:py-16'>
						<h2 className='text-[30px] md:text-[48px] leading-[140%] text-center mb-6 text-[#624E2C]'>
							SIZNI NIMALAR KUTMOQDA
						</h2>
						<ul className='grid md:grid-cols-2 gap-4'>
							{items.map((item, index) => (
								<li
									key={index}
									className='flex items-center gap-3 bg-[#FFFFFF] px-3 rounded-[18px]'
								>
									<div className='text-[#E5C88C] text-[28px] manrope-bold'>
										{String(index + 1).padStart(2, '0')}
									</div>
									<p className='text-[#616161] text-[18px] leading-[140%] manrope-regular py-2'>
										{item}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gift
