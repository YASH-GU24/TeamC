import React from 'react'

function People({Title,Data}) {
  return (
    <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
                <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>{Title}</div>
                <div className='flex items-center justify-center w-full my-3 mx-auto mb-16'>
                    <input placeholder='Search results' defaultValue={""} onChange={(e) => {  }} className='w-11/12 md:w-3/4 p-2 text-lg rounded border-2 shadow-lg border-gray-300 focus:border-gray-400 focus:outline-none' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full place-items-center mx-auto'>
                    {
                        Data.map((item, i) => {
                            return (
                                <a key={i} class="flex flex-col flex-grow items-center content-center mt-0 text-inherit max-w-md" href="/" id="1RK1995NTS06">

                                    <div class="flex md:flex-row border-t-0 text-[rgba(0,105,140,1)] max-w-min py-8 text-left text-base items-center content-center px-[14px] xl:px-[18px]">
                                        <div class="w-32 h-32 xl:w-36 xl:h-36 flex-grow-0 flex-shrink-0">
                                            <img src={item.photo} class="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0" alt='...'/>
                                        </div>
                                        <div class="flex flex-col flex-grow leading-8 mr-5 md:mr-2 xl:mr-5 md:justify-start md:mt-0 ml-7 md:ml-2 xl:ml-9 md:mb-0 w-52">
                                            <div class="text-[22.5px]">{item.name}</div>
                                            <div class="font-semibold text-[rgba(0,0,0,0.7)] tracking-wide">{item.position}</div>
                                            <div class="font-normal text-[rgba(0,0,0,0.7)] tracking-wide">{item.name}</div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
  )
}

export default People
