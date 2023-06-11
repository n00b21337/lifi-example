import { NFT, LiFiWidget } from "@lifi/widget";
import { useState, useEffect } from "react";

type Contract = {
  address: string;
  callData: string;
  gasLimit: string;
};

export const Widget = () => {
  const isLoading = false;
  const [contract, setContract] = useState<Contract | undefined>(undefined);

  useEffect(() => {
    setContract({
      address: "0x0c6D2c414A92D61fC2eA41942b4de319943F4E33",
      callData:
        "0x94bf804d0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a6b04affc92ba83d4b6ffaded0a58412892cf381",
      gasLimit: "570360",
    });
  }, []);

  const owner = {
    name: "Some",
    url: `https://opensea.io/`,
  };

  // This token determins what will be the price for NFT and in what currency
  const token = {
    address: "0x0000000000000000000000000000000000000000",
    amount: "11469534050179999",
    chainId: 5,
    symbol: "ETH",
    decimals: 18,
    name: "Ethereum",
    priceUSD: "",
  };

  return (
    <LiFiWidget
      contractComponent={
        <NFT
          isLoading={isLoading}
          imageUrl={
            "https://ipfs.io/ipfs/QmQDm9zumtAbMtJUGKy7SNmadDGZkdJUCuEmbmuSmXPkdX/images/1.png"
          }
          collectionName={"Managers"}
          assetName={"ManagersContract"}
          owner={owner}
          contract={contract}
          token={token}
        />
      }
      config={{
        variant: "nft",
        buildSwapUrl: true,
        toChain: 5,
        fromToken: "0x0000000000000000000000000000000000000000",
        containerStyle: {
          border: `0px solid rgb(234, 234, 234)`,
          borderRadius: "16px",
        },
        hiddenUI: ["history"],
        appearance: "dark",
        //   disableAppearance: true,
        sdkConfig: {
          apiUrl: "https://staging.li.quest/v1",
        },
      }}
      integrator="nextjs-example"
    />
  );
};
