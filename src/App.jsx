import './App.css'

function App() {
  return (
    <>
   <header className='text-gray-700 border-b border-gray-400'>
    <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
      <a href='#' className="font-medium text-gray-900 mb-4 md:mb-0">
        <span className='text-xl ml-3'>Sirasu</span>
      </a>
      <nav className='md:ml-auto text-base'>
        <a href='#home' className='mr-5 hover:text-blue-400 duration-300'>home</a>
        <a href='#About' className="mr-5 hover:text-blue-400 duration-300" >About</a>
        <a href='#Skills' className="mr-5 hover:text-blue-400 duration-300" >Skills</a>
        <a href='#Blog' className="mr-5 hover:text-blue-400 duration-300" >Blog</a>
      </nav>
    </div>
   </header>
   
   <section className='text-gray-700' id='home'>
    <div className='flex containermx-auto py-20 px-5 flex-col md:flex-row items-center '>
      <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
        <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>Hi!
          <br />
          I'm Sirasu
          <br />
          The idol of the Iwaki family
        </h1>
        <p className='mb-8 leading-relaxed'>I'm always waiting for everyone to come home, but when I'm busy and touched, I can't help but bite! "But I'm doing my best every day to heal everyone."</p>
        <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
      </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src='./img/17306487455166.jpg' alt='' />
        </div>
    </div>
   </section>

   <section className='text-gray-700 border-t border-gray-200'>
    <div className='container px-5 py-24 mx-auto'>
      <div className='text-center md-20'>
        <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About me</h1>
        <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, numquam? Quas, illum unde, iure excepturi quod amet, ipsam tempora doloremque veritatis culpa rerum rem ipsum sint vero. Praesentium, quibusdam quas!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, cumque optio, cum impedit sed laboriosam mollitia deserunt autem possimus et porro nemo sit rerum corporis maiores. Quia nihil necessitatibus amet!
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, cumque optio, cum impedit sed laboriosam mollitia deserunt autem possimus et porro nemo sit rerum corporis maiores. Quia nihil necessitatibus amet!
      </p>
      </div>

      <div className='flex flex-wrap'>
        <div className='md:w-1/3 p-4'>
          <div className='bg-gray-200 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-green-500 text-white rounded-full'>
              <svg width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
    fill="currentColor"
  />
</svg>
              </div>
             <h2 className='text-gray-900 text-lg font-medium ml-2'>sirsu content</h2>
            </div>
             <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum molestiae incidunt, ratione consequuntur perferendis dignissimos ea fugit eligendi minima aliquam.
              </p>
                  <a href='#' className='flex mt-3 text-green-500 items-center'>もっとみる
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                        </svg>  
                  </a>
             </div>
          </div>
        </div>
        <div className='md:w-1/3 p-4'>
          <div className='bg-gray-200 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-green-500 text-white rounded-full'>
              <svg width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
    fill="currentColor"
  />
</svg>
              </div>
             <h2 className='text-gray-900 text-lg font-medium ml-2'>sirsu content</h2>
            </div>
             <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum molestiae incidunt, ratione consequuntur perferendis dignissimos ea fugit eligendi minima aliquam.
              </p>
                  <a href='#' className='flex mt-3 text-green-500 items-center'>もっとみる
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                        </svg>  
                  </a>
             </div>
          </div>
        </div>
        <div className='md:w-1/3 p-4'>
          <div className='bg-gray-200 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-green-500 text-white rounded-full'>
              <svg width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
    fill="currentColor"
  />
</svg>
              </div>
             <h2 className='text-gray-900 text-lg font-medium ml-2'>sirsu content</h2>
            </div>
             <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum molestiae incidunt, ratione consequuntur perferendis dignissimos ea fugit eligendi minima aliquam.
              </p>
                  <a href='#' className='flex mt-3 text-green-500 items-center'>もっとみる
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                        </svg>  
                  </a>
             </div>
          </div>
        </div>
      </div>
    </div>
   </section>

   <section className='text-gray-700 border-t border-gray-200'>
    <div className='container px-5 py-24 mx-auto flex flex-wrap'>
      <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
        <img src='./img/17306474921351.jpg' alt='' className='rounded md:w-1/2 lg:max-w-lg w-5/6'/>
      </div>
       <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2 '>
        <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
        <div className='w-full'>
          <h2>大人しさ</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "25%" }}>25%</div>
          </div>
          <h2>親密度</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "75%" }}>75%</div>
          </div>
          <h2>怒りやすさ</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "85%" }}>85%</div>
          </div>
          <h2>愛され度</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "95%" }}>95%</div>
          </div>
        </div>
       </div>
    </div>

   </section>
    </>

  )
}

export default App
