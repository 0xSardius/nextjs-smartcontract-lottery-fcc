import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddresses } from "../constants";
import { useEffect } from "react";

export default function LotteryEntrance() {
  const { chainId: chainIdHex } = useMoralis();
  console.log(parseInt(chainIdHex));
  const chainId = parseInt(chainIdHex);
  const raffleAddress =
    chainIdHex in contractAddresses ? contractAddresses[chainId][0] : null;
  //   const { runContractFunction: enterRaffle } = useWeb3Contract({
  //     abi: abi,
  //     contractAddress: raffleAddress,
  //     functionName: "enterRaffle",
  //     params: {},
  //     msgValue:
  //   });

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getEntranceFee",
    params: {},
  });

  useEffect(() => {
    if (isWeb3Enabled) {
      async function updateUI() {
        cons;
      }
    }
  }, [isWeb3Enabled]);
  return (
    <div>
      <h1>Lottery Entrance</h1>
    </div>
  );
}
