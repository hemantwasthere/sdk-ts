// import ConnectButtonDialog from "@/components/connect-button-dialog";
import Hero from "@/components/hero";
// import { useBalance } from "@/hooks/useBalance";

// import { ComplexButton } from "../lib/components/connect/ComplexButton";
// import { useBalance } from "../lib/hooks/useBalance";
import MaxWidthWrapper from "./components/max-width-wrapper";
import Navbar from "./components/navbar";

function App() {
  // const balanceInfo = useBalance({
  //   l2TokenAddress:
  //     "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
  // });

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#211D31] font-dmSans">
      <MaxWidthWrapper className="h-full">
        <Navbar />
        <Hero />
        {/* <h1>StarkPull</h1>
      <h3>Use Starknet dApps with funds on L1</h3>

      {/* <ComplexButton></ComplexButton> */}

        {/* <div className="my-9">
        <ConnectButtonDialog />
      </div> */}

        {/* {balanceInfo.isLoading ? "Loading..." : ""}
      {balanceInfo.isError ? "Error" : ""}
      {balanceInfo.data ? `Balance: ${balanceInfo.data.formatted}` : ""} */}
      </MaxWidthWrapper>
    </div>
  );
}

export default App;
