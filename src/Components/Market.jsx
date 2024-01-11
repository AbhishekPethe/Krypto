import React, { useEffect, useState } from 'react'
import {AiOutlineSwapRight} from "react-icons/ai"
import { Link } from 'react-router-dom';



// const data = [
//   {
//     "id": "tron",
//     "symbol": "trx",
//     "name": "TRON",
//     "image": "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066",
//     "current_price": 0.076824,
//     "market_cap": 6879913510,
//     "market_cap_rank": 11,
//     "fully_diluted_valuation": 6879928256,
//     "total_volume": 179117457,
//     "high_24h": 0.076903,
//     "low_24h": 0.076208,
//     "price_change_24h": 0.00030956,
//     "price_change_percentage_24h": 0.40458,
//     "market_cap_change_24h": 35159522,
//     "market_cap_change_percentage_24h": 0.51367,
//     "circulating_supply": 89527333549.8949,
//     "total_supply": 89527525440.7442,
//     "max_supply": null,
//     "ath": 0.231673,
//     "ath_change_percentage": -66.91485,
//     "ath_date": "2018-01-05T00:00:00.000Z",
//     "atl": 0.00180434,
//     "atl_change_percentage": 4148.04628,
//     "atl_date": "2017-11-12T00:00:00.000Z",
//     "roi": {
//       "times": 39.43390480762915,
//       "currency": "usd",
//       "percentage": 3943.3904807629146
//     },
//     "last_updated": "2023-08-08T19:16:17.029Z"
//   },
//   {
//     "id": "matic-network",
//     "symbol": "matic",
//     "name": "Polygon",
//     "image": "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
//     "current_price": 0.690953,
//     "market_cap": 6428675544,
//     "market_cap_rank": 12,
//     "fully_diluted_valuation": 6898113504,
//     "total_volume": 295453697,
//     "high_24h": 0.692406,
//     "low_24h": 0.65795,
//     "price_change_24h": 0.03221809,
//     "price_change_percentage_24h": 4.8909,
//     "market_cap_change_24h": 289314766,
//     "market_cap_change_percentage_24h": 4.71246,
//     "circulating_supply": 9319469069.28493,
//     "total_supply": 10000000000,
//     "max_supply": 10000000000,
//     "ath": 2.92,
//     "ath_change_percentage": -76.39285,
//     "ath_date": "2021-12-27T02:08:34.307Z",
//     "atl": 0.00314376,
//     "atl_change_percentage": 21798.82579,
//     "atl_date": "2019-05-10T00:00:00.000Z",
//     "roi": {
//       "times": 261.71986851530676,
//       "currency": "usd",
//       "percentage": 26171.986851530677
//     },
//     "last_updated": "2023-08-08T19:16:14.836Z"
//   },
//   {
//     "id": "polkadot",
//     "symbol": "dot",
//     "name": "Polkadot",
//     "image": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644",
//     "current_price": 5.06,
//     "market_cap": 6378075962,
//     "market_cap_rank": 13,
//     "fully_diluted_valuation": 6786930817,
//     "total_volume": 98837795,
//     "high_24h": 5.08,
//     "low_24h": 4.93,
//     "price_change_24h": 0.120259,
//     "price_change_percentage_24h": 2.43584,
//     "market_cap_change_24h": 157475115,
//     "market_cap_change_percentage_24h": 2.53151,
//     "circulating_supply": 1262146224.22451,
//     "total_supply": 1343053791.85456,
//     "max_supply": null,
//     "ath": 54.98,
//     "ath_change_percentage": -90.81633,
//     "ath_date": "2021-11-04T14:10:09.301Z",
//     "atl": 2.7,
//     "atl_change_percentage": 87.18616,
//     "atl_date": "2020-08-20T05:48:11.359Z",
//     "roi": null,
//     "last_updated": "2023-08-08T19:16:23.329Z"
//   },
//   {
//     "id": "litecoin",
//     "symbol": "ltc",
//     "name": "Litecoin",
//     "image": "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",
//     "current_price": 84.48,
//     "market_cap": 6200185548,
//     "market_cap_rank": 14,
//     "fully_diluted_valuation": 7084022619,
//     "total_volume": 579947270,
//     "high_24h": 85.04,
//     "low_24h": 81.36,
//     "price_change_24h": 3.07,
//     "price_change_percentage_24h": 3.77685,
//     "market_cap_change_24h": 219197022,
//     "market_cap_change_percentage_24h": 3.6649,
//     "circulating_supply": 73519751.9834713,
//     "total_supply": 84000000,
//     "max_supply": 84000000,
//     "ath": 410.26,
//     "ath_change_percentage": -79.46422,
//     "ath_date": "2021-05-10T03:13:07.904Z",
//     "atl": 1.15,
//     "atl_change_percentage": 7233.47468,
//     "atl_date": "2015-01-14T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2023-08-08T19:16:19.544Z"
//   },
//   {
//     "id": "shiba-inu",
//     "symbol": "shib",
//     "name": "Shiba Inu",
//     "image": "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446",
//     "current_price": 0.00000942,
//     "market_cap": 5557468343,
//     "market_cap_rank": 15,
//     "fully_diluted_valuation": 9429925153,
//     "total_volume": 334137297,
//     "high_24h": 0.00000962,
//     "low_24h": 0.00000888,
//     "price_change_24h": 4.43978e-7,
//     "price_change_percentage_24h": 4.94854,
//     "market_cap_change_24h": 281010114,
//     "market_cap_change_percentage_24h": 5.32573,
//     "circulating_supply": 589336682165748.6,
//     "total_supply": 999987846875420,
//     "max_supply": null,
//     "ath": 0.00008616,
//     "ath_change_percentage": -89.05676,
//     "ath_date": "2021-10-28T03:54:55.568Z",
//     "atl": 5.6366e-11,
//     "atl_change_percentage": 16727186.29233,
//     "atl_date": "2020-11-28T11:26:25.838Z",
//     "roi": null,
//     "last_updated": "2023-08-08T19:16:14.836Z"
//   },
//   {
//     "id": "wrapped-bitcoin",
//     "symbol": "wbtc",
//     "name": "Wrapped Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744",
//     "current_price": 29875,
//     "market_cap": 4844564802,
//     "market_cap_rank": 16,
//     "fully_diluted_valuation": 4844564802,
//     "total_volume": 126191793,
//     "high_24h": 29887,
//     "low_24h": 28967,
//     "price_change_24h": 853.2,
//     "price_change_percentage_24h": 2.93983,
//     "market_cap_change_24h": 140769941,
//     "market_cap_change_percentage_24h": 2.99269,
//     "circulating_supply": 162105.58767567,
//     "total_supply": 162105.58767567,
//     "max_supply": 162105.58767567,
//     "ath": 70643,
//     "ath_change_percentage": -57.82123,
//     "ath_date": "2021-11-10T14:40:19.650Z",
//     "atl": 3139.17,
//     "atl_change_percentage": 849.18365,
//     "atl_date": "2019-04-02T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2023-08-08T19:16:13.910Z"
//   },
//   {
//     "id": "bitcoin-cash",
//     "symbol": "bch",
//     "name": "Bitcoin Cash",
//     "image": "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492",
//     "current_price": 240.62,
//     "market_cap": 4678447648,
//     "market_cap_rank": 17,
//     "fully_diluted_valuation": 5045861475,
//     "total_volume": 464589354,
//     "high_24h": 248.62,
//     "low_24h": 234.94,
//     "price_change_24h": 3.51,
//     "price_change_percentage_24h": 1.47954,
//     "market_cap_change_24h": 53893795,
//     "market_cap_change_percentage_24h": 1.16538,
//     "circulating_supply": 19470887.3966508,
//     "total_supply": 21000000,
//     "max_supply": 21000000,
//     "ath": 3785.82,
//     "ath_change_percentage": -93.65567,
//     "ath_date": "2017-12-20T00:00:00.000Z",
//     "atl": 76.93,
//     "atl_change_percentage": 212.19264,
//     "atl_date": "2018-12-16T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2023-08-08T19:16:23.037Z"
//   },
//   {
//     "id": "uniswap",
//     "symbol": "uni",
//     "name": "Uniswap",
//     "image": "https://assets.coingecko.com/coins/images/12504/large/uni.jpg?1687143398",
//     "current_price": 6.12,
//     "market_cap": 4616291461,
//     "market_cap_rank": 18,
//     "fully_diluted_valuation": 6124297694,
//     "total_volume": 95422273,
//     "high_24h": 6.13,
//     "low_24h": 5.82,
//     "price_change_24h": 0.288313,
//     "price_change_percentage_24h": 4.94345,
//     "market_cap_change_24h": 224519086,
//     "market_cap_change_percentage_24h": 5.11227,
//     "circulating_supply": 753766667,
//     "total_supply": 1000000000,
//     "max_supply": 1000000000,
//     "ath": 44.92,
//     "ath_change_percentage": -86.41497,
//     "ath_date": "2021-05-03T05:25:04.822Z",
//     "atl": 1.03,
//     "atl_change_percentage": 492.3419,
//     "atl_date": "2020-09-17T01:20:38.214Z",
//     "roi": null,
//     "last_updated": "2023-08-08T19:16:21.890Z"
//   },
//   {
//     "id": "avalanche-2",
//     "symbol": "avax",
//     "name": "Avalanche",
//     "image": "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1670992574",
//     "current_price": 12.69,
//     "market_cap": 4389615381,
//     "market_cap_rank": 19,
//     "fully_diluted_valuation": 9125135046,
//     "total_volume": 127849519,
//     "high_24h": 12.71,
//     "low_24h": 12.39,
//     "price_change_24h": 0.269091,
//     "price_change_percentage_24h": 2.16603,
//     "market_cap_change_24h": 92188621,
//     "market_cap_change_percentage_24h": 2.14521,
//     "circulating_supply": 346353567.198679,
//     "total_supply": 433073002.769168,
//     "max_supply": 720000000,
//     "ath": 144.96,
//     "ath_change_percentage": -91.26606,
//     "ath_date": "2021-11-21T14:18:56.538Z",
//     "atl": 2.8,
//     "atl_change_percentage": 352.00037,
//     "atl_date": "2020-12-31T13:15:21.540Z",
//     "roi": null,
//     "last_updated": "2023-08-08T19:16:23.918Z"
//   },
//   {
//     "id": "the-open-network",
//     "symbol": "ton",
//     "name": "Toncoin",
//     "image": "https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1670498136",
//     "current_price": 1.27,
//     "market_cap": 4369129451,
//     "market_cap_rank": 20,
//     "fully_diluted_valuation": 6470111838,
//     "total_volume": 23701469,
//     "high_24h": 1.27,
//     "low_24h": 1.2,
//     "price_change_24h": 0.066348,
//     "price_change_percentage_24h": 5.50581,
//     "market_cap_change_24h": 227859103,
//     "market_cap_change_percentage_24h": 5.50215,
//     "circulating_supply": 3438127515.14249,
//     "total_supply": 5091419190.91631,
//     "max_supply": null,
//     "ath": 5.29,
//     "ath_change_percentage": -76.08105,
//     "ath_date": "2021-11-12T06:50:02.476Z",
//     "atl": 0.519364,
//     "atl_change_percentage": 143.664,
//     "atl_date": "2021-09-21T00:33:11.092Z",
//     "roi": null,
//     "last_updated": "2023-08-08T19:16:16.409Z"
//   }
// ]

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Loading = () => {
  return (
    <h1 className='text-5xl lg:text-9xl text-center'>
      Loading....
    </h1>
  )
}

const ScrollHere = () => {
  return (
    <div className='flex justify-end items-center gap-3 mr-10  md:hidden'>
      Scroll <AiOutlineSwapRight />
    </div>
  )
}

const Market = () => {


  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading , setLoading] = useState(true)
  
  const url= `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h&locale=en`

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        const data = await resp.json();
        setData(data)
        setLoading(false);
      }
      catch (error) {
        console.log(error);
        setLoading(true);
        setData([])
      }
    }
    fetchData();
  },[url])

  return (
    <div className="w-full text-white flex flex-col gap-16 mt-20 lg:mt-40" id="Market">
      <h1 className="text-4xl md:text-6xl text-center">Market Update</h1>

      <div className=" flex flex-row gap-5 lg:mx-auto">
        <div className=" flex flex-col gap-5 lg:gap-10 ">
          <h1 className="lg:text-lg">Coin</h1>
          {data.map((each, i) => {
            return (
              <Link to={`/coins/${each.id}`}
               
                key={i}
                className="flex gap-5 hover:cursor-pointer group relative"
              >
                <img src={each.image} alt="" className="w-[30px] h-[30px]" />
                <h1 className="w-[180px] overflow-hidden md:w-[400px] mr-10 lg:text-2xl">
                  {each.id}
                </h1>
                <AiOutlineSwapRight className="hidden text-4xl lg:group-hover:block absolute right-20 hover:translate-x-4 transition-all duration-1000" />
              </Link>
            );
          })}
        </div>
        <div className="flex flex-row gap-14 lg:gap-40 w-full overflow-x-scroll lg:text-lg">
          <div className="flex flex-col gap-[26px] lg:gap-11">
            <h1>Price</h1>
            {data.map((each, i) => {
              return (
                <h1 key={i} className="">
                  ${each.current_price.toFixed(3)}
                </h1>
              );
            })}
          </div>
          <div className="flex flex-col gap-[26px] lg:gap-11">
            <span className="w-36">24h Change</span>
            {data.map((each, i) => {
              return (
                <h1
                  key={i}
                  className={`${
                    each.price_change_percentage_24h > 0
                      ? "text-green-500"
                      : "text-red-600"
                  }`}
                >
                  {each.price_change_percentage_24h}%
                </h1>
              );
            })}
          </div>
          <div className="flex flex-col gap-[26px] lg:gap-11">
            <h1>Market Cap</h1>
            {data.map((each, i) => {
              return <h1 key={i}>${numberWithCommas(each.market_cap)}</h1>;
            })}
          </div>
          <div className="flex flex-col gap-[26px] lg:gap-11">
            <span className="max-sm:mr-10">Rank</span>
            {data.map((each, i) => {
              return (
                <h1
                  key={i}
                  className={`${
                    each.price_change_percentage_24h > 0
                      ? "text-green-500"
                      : "text-red-600"
                  }`}
                >
                  #{each.market_cap_rank}
                </h1>
              );
            })}
          </div>
        </div>
      </div>

      
      {/* Loading  */}
      
      {loading && <Loading />}

      <ScrollHere />
      
      {/* Pagination  */}
      <div className="flex flex-row gap-5 justify-center text-black text-2xl">
        {Array.from({ length: 5 }, (_, index) => {
          return (
            <button
              className={` w-14 h-14 rounded-full ${index + 1 === currentPage ? "bg-purple-600" : 
            "bg-white"}`}
              key={index}
              onClick={() => {
                setCurrentPage(index + 1),
                window.scrollTo({
                    top: 1900,
                    behavior: "smooth",
                });
             
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Market