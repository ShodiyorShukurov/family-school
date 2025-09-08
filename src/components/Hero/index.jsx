const Hero = () => {
	return (
		<section className='relative min-h-screen'>
			<img
				src='/hero-bg.png'
				alt='Hero Background'
				className='absolute inset-0 w-[200px] h-[200px] object-cover -z-20'
			/>

			<img
				src='/hero-bg2.png'
				alt='Hero Background'
				className='absolute inset-0 w-full h-full object-cover -z-10 lg:block hidden'
			/>
			<div className='container flex flex-col-reverse md:flex-row min-h-screen md:justify-between items-center pt-6 w-full'>
				<div>
					<h1
						className='text-[40px] md:text-[72px] leading-[100%] bg-gradient-to-b from-[#FEF5C9] to-[#D5AB65] bg-clip-text text-transparent w-full md:max-w-[500px]'
					>
						OTA-ONALAR AKADEMIYASI
					</h1>
					<p className='text-[18px] sm:text-[24px] text-[#FFFFFF] manrope-regular w-full max-w-[500px] mt-6 text-center md:text-left'>
						Hayotiy misollar, oddiy amallar va ilmiy yondashuvlar orqali
						bolangiz bilan munosabatni yaxshilash, tartib va intizomni mehr
						bilan o‘rnatishda yordam beradi
					</p>

					<div className='relative cursor-pointer md:w-[400px] mt-16'>
						<img
							className='absolute top-[50%] left-[-24px] transform -translate-y-1/2 w-[150px] h-[150px] '
							src='/button-img.png'
							alt='notebook icon'
							width={150}
							height={150}
						/>

						<button
							style={{
								background: 'linear-gradient(90deg, #F6E2A3 0%, #D4B483 100%)',
							}}
							type='submit'
							className='w-full pl-[40px] text-[#403211] md:text-[24px] py-4 rounded-[6px] manrope-bold cursor-pointer'
						>
							RO’YXATDAN O’TISH
						</button>
					</div>
				</div>

				<img
					src='/main-img.png'
					alt='main'
					className='w-full max-w-[320px] lg:max-w-[500px]  h-[320px]  sm:h-full object-contain border-[20px] border-[#D5AB65] lg:border-none rounded-full mb-10 md:mb-0'
				/>
			</div>
		</section>
	)
}

export default Hero
