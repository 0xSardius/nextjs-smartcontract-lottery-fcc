import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddresses } from "../constants";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function LotteryEntrance() {
  const { chainId: chainIdHex } = useMoralis();
  console.log(parseInt(chainIdHex));
  const chainId = parseInt(chainIdHex);
  const raffleAddress =
    chainIdHex in contractAddresses ? contractAddresses[chainId][0] : null;
  const [entranceFee, setEntranceFee] = useState("0");
  const { runContractFunction: enterRaffle } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "enterRaffle",
    params: {},
    msgValue: entranceFee,
  });

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getEntranceFee",
    params: {},
  });

  useEffect(() => {
    if (isWeb3Enabled) {
      // try to read the raffle entrance fee
      async function updateUI() {
        const entranceFeeFromCall = await getEntranceFee(
          await getEntranceFee()
        ).toString();
        setEntranceFee(ethers.utils.formatUnits(entranceFeeFromCall, "ether"));
        console.log(entranceFee);
      }
      updateUI();
    }
  }, [isWeb3Enabled]);

  return (
    <div>
      gm Lottery Entrance!
      {raffleAddress ? (
        <div>
          <button
            onClick={async function () {
              await enterRaffle();
            }}
          >
            Enter Raffle
          </button>
          Entrance Fee: {ethers.utils.formatUints(entranceFee, "ether")} ETH
        </div>
      ) : (
        <div>No Raffle Address Detected</div>
      )}
    </div>
  );
}
