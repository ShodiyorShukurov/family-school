const AudienceSection = () => {
	const cards = [
		{
			img: '/img1.png',
			text: 'Farzandida intizom va mas’uliyatni urishsiz shakllantirmoqchi bo‘lgan ota-onalar uchun.',
		},
		{
			img: '/img2.png',
			text: 'O‘smir farzandi bilan ishonchli munosabat qurib, janjal o‘rniga tushunish va hamkorlikni xohlaydiganlar uchun.',
		},
		{
			img: '/img3.png',
			text: 'Band bo‘lsa-da, oilada tinchlik, mehr va barqaror tartibni yaratishni istaydigan ota-onalar uchun.',
		},
	]

	return (
		<section className='rounded-b-[60px] relative'>
			<img src="/section-bg.png" alt="section background" className='absolute bottom-[-60px] right-0 w-[300px] h-[300px] object-cover -z-10' />

			<div className='container'>
				<h2 className='text-3xl md:text-[72px] leading-[140%] text-white text-center mb-10'>
					DASTUR <span className='text-[#D5AB65]'>KIMLAR UCHUN</span>
				</h2>

				<ul className='grid md:grid-cols-3 gap-8'>
					{cards.map((card, index) => (
						<li key={index} className='text-center'>
							<div className='flex justify-center mb-4'>
								<img
									src={card.img}
									alt={`card-${index}`}
									className='w-[250px] h-[250px] object-contain rounded-full border-[20px] border-[#D5AB65]'
								/>
							</div>
							<p className='text-white text-[18px]'>{card.text}</p>
						</li>
					))}
				</ul>

				<div className='relative cursor-pointer md:w-[400px] mx-auto mt-16'>
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
		</section>
	)
}

export default AudienceSection
