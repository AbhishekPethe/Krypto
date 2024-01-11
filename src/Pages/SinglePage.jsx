import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function numberWithCommas(x) {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const SinglePage = () => {
  
  const { id } = useParams();

  const [data , setData] = useState([])

  const fetchData = async () => {
    try {
      const resp = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`)
      const result = await resp.json();
      setData(result)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  } , [])

  return (
    <div className='text-white flex flex-col mt-20 gap-10 lg:mt-40 lg:flex-row lg:justify-around mx-10 mb-20'>
      <div className='flex flex-col gap-5 items-center'>
        <img src={data?.image?.large} alt="" className='h-[280px] w-[280px]' />
        <h1 className='text-4xl md:text-5xl'>{data?.name}</h1>
        <p className='text-xl'>Rank : #{data?.market_cap_rank}</p>
      </div>

      <hr className='w-full md:w-[20px] text-white my-6 md:hidden' />
      
      <div className='flex flex-col gap-5 lg:w-[70%]'>
        <div className='flex flex-row flex-wrap gap-6 justify-center text-xl lg:text-2xl '>
          <p>24h change : <span className={`${data?.market_data?.price_change_percentage_24h < 0 ? "text-rose-600" : " text-green-500"}`}>
            {data?.market_data?.price_change_percentage_24h}%
          </span>
          </p>
          <p >Price : <span className={`${data?.market_data?.price_change_percentage_24h < 0 ? "text-rose-600" : " text-green-500"}`}>
            $ {numberWithCommas(data?.market_data?.current_price?.usd)}
          </span>
          </p>
          <p>Symbol : {data?.symbol}</p>
        </div>
        <div className='max-sm:h-[200px] md:h-[350px] overflow-y-scroll h-full leading-10 tracking-wide '>
          {
            data?.description?.en?.length > 2
              ?
              <p dangerouslySetInnerHTML={{ __html: data?.description?.en }} className='desc' />
                :
              <p className='text-2xl text-center mt-10'>No Description is Available</p>
          }
            
       
        </div>

      </div>

    </div>
  )
}

export default SinglePage