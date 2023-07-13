
const Hero = () => {

    const heroHeadText = "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
    const heroSubText = "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]"

    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div>
                    <h1 className={`${heroHeadText} text-white`}>
                        Hi, I'm <span className='text-[#915EFF]'>Roniy</span>
                    </h1>
                    <p className={`${heroSubText} mt-2 text-white-100`}>
                        <span className='text-rose-500'>A Full Stack Developer</span>  <br />
                        I develop 3D visuals, user <br className='sm:block hidden' />
                        interfaces and web applications
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero
