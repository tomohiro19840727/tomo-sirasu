import React from 'react'

function Body() {
  return (
    <div className='bg-green-100'>
      <section className='text-gray-700' id='home'>
    <div className='flex containermx-auto py-20 px-5 flex-col md:flex-row items-center '>
      <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
        <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>やあ!
          <br />
          僕の名前は『しらす』だよ!
          <br />
          岩木家のアイドルなんだ！
        </h1>
        <p className='mb-8 leading-relaxed text-xl'>僕はいつもみんなの帰りを待っているんだよ！！けど、忙しい時に触られると思わず噛んでしまうんだ（汗汗）！ でも、家族みんなを癒すために毎日頑張ってるよ!! どうかよろしくね！!</p>
        <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
      </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src='./img/17306487455166.jpg' alt='' />
        </div>
    </div>
   </section>
    </div>
  )
}

export default Body
