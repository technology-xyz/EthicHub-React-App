import React ,{useState} from "react"
import { useHistory } from "react-router"


const Landing = () => {
    const [addressEth, setAddressEth] = useState("")
    const history = useHistory()
    const handleClick = () => {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(async (accounts: string[]) => {
        console.log(accounts[0]);
        setAddressEth(accounts[0]);
        
      })
      history.push('/bonds')
    }
    return (
        <div className="relative w-screen h-screen max-h-screen bg-gradient-to-b from-yellow-700  to-yellow-400">
        <header className="absolute w-screen flex justify-between p-8 z-50">
          <img className="h-8" src="./logotext.svg" alt="logo" />
          <button 
            className="bg-green-600 rounded-xl p-3 flex justify-center items-center h-12 text-white"
            onClick={handleClick}
            >
            Connect to a wallet
          </button>
        </header>
  
        <main className="absolute w-full  h-4/5 flex justify-center items-center z-40">
          <div className="flex-col justify-around w-1/2">
            <div className="flex-col justify-around my-16">
              <h1 className="text-white text-8xl text-center font-bold">
                Invest in Ethic NFT Bonds with DAI
              </h1>
              <p className="text-white text-center">
                Provide Stablecoin Loans to Real Farmers and Earn Interest.
              </p>
            </div>
            <div className="w-full flex justify-between my-16">
              <div className="bg-gray-900 w-56 h-60 rounded-xl flex flex-col items-center justify-around">
                <h3 className="text-white text-center">Sustainable</h3>
                <img className=" w-20" src="./logo.svg" alt="logo" />
              </div>
              <div className="bg-gray-900 w-56 h-60 rounded-xl flex flex-col items-center justify-around">
                <h3 className="text-white text-center">
                  Fixed Stablecoin Yields
                </h3>
                <img src="./coins.svg" alt="crypto coins" />
              </div>
              <div className="bg-gray-900 w-56 h-60 rounded-xl flex flex-col items-center justify-around">
                <h3 className="text-white text-center">
                  Backed by Balancer Asset Managers
                </h3>
                <img src="./balancer.svg" alt="balancer vector" />
              </div>
            </div>
          </div>
        </main>
        <div className="absolute w-full h-full z-0">
          <img
            className="absolute bottom-0 right-0 z-50 w-full"
            src="./palms.svg"
            alt="palms"
          />
          <img
            className="absolute bottom-0 right-0  z-40 w-full"
            src="./mountains.svg"
            alt="montains"
          />
          <img
            className="absolute bottom-0 right-0 z-0 w-full"
            src="./clouds1.svg"
            alt="clouds"
          />
          <img
            className="absolute bottom-52 right-0 z-0 w-full"
            src="./clouds2.svg"
            alt="clouds"
          />
        </div>
      </div>
    )
}

export default Landing