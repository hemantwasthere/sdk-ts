import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Icons } from "./Icons";
import { Button } from "./ui/button";
import VesuDeposit from "./vesu-deposit";

const Hero: React.FC = () => {
  return (
    <div className="flex h-screen float-left w-full items-center justify-between">
      <img
        src="/hero/bg-grid-pattern.svg"
        className="pointer-events-none absolute right-0 top-0 z-0 select-none"
        alt="bg-grid-pattern"
      />

      <img
        src="/hero/coins.svg"
        className="pointer-events-none absolute bottom-5 left-[46%] z-0 -translate-x-1/2 select-none"
        alt="coins"
      />

      <div className="z-10 -mt-16 flex flex-col items-start gap-3 text-[#DADADA]">
        <h1 className="bg-gradient-to-r from-[#FFFFFF] to-[#EC796B] bg-clip-text text-[64.54px] font-semibold leading-[77.45px] text-transparent">
          The In-App bridge
          <br />
          for Starknet
        </h1>

        <p className="mt-2 text-[18px] font-semibold leading-[21.6px]">
          Seamlessly bridge your funds from other chains to Starknet dApps
          <br />
          in a single step
        </p>

        <div className="mt-4 flex items-center gap-2 text-[18px] font-medium leading-[23.91px]">
          Supporting chains:{" "}
          <p className="text-[#2FDB81]">
            Ethereum <span className="text-sm text-[grey]">(more coming soon)</span>
          </p>
        </div>

        <div className="mt-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                style={{
                  background:
                    "linear-gradient(180deg, #7151EB 0%, #C078FF 100%), radial-gradient(29.19% 139.29% at 51.96% 8.93%, #80A6FC 0%, rgba(113, 81, 235, 0) 100%)",
                }}
                className="h-[49px] rounded-[40px] px-6 text-white"
              >
                Try it out now
              </Button>
            </DialogTrigger>
            <DialogContent
              closeClassName="text-white"
              className="max-h-[100vh] overflow-y-auto overflow-x-hidden border border-indigo-400 bg-[#211D31] font-dmSans sm:max-w-[475px] lg:max-h-none"
            >
              <DialogHeader>
                <DialogTitle className="flex flex-col items-center gap-2 text-center text-3xl font-normal text-white/80">
                  <span className="">Deposit to</span>
                  <Icons.vesuNamedLogo />
                </DialogTitle>
                <p className="text-[grey] mt-24">This popup showcases the option to perform a one-step ETH deposit into Vesu (Sepolia) using either Bridge Mode or Starknet Mode.</p>
              </DialogHeader>
              <VesuDeposit />
            </DialogContent>
          </Dialog>
        </div>

        {/* <div className="mt-32 space-y-4">
          <p className="text-sm font-medium leading-[18.59px] text-[#DADADA]">
            DApps which already integrated us
          </p>
          <div className="flex w-full items-center gap-4">
            <Icons.endurNamedLogo />
            <Icons.vesuNamedLogo />
          </div>
        </div> */}
      </div>

      <div className="pointer-events-none z-10 -mt-24 select-none">
        <img src="/hero/easyleap-illustration.svg" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
