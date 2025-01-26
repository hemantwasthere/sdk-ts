import { Chain as ChainSN } from "@starknet-react/chains";
import { useState, createContext, useContext, ReactNode } from "react";
import { sepolia as sepoliaSN } from "@starknet-react/chains";
import { ReviewModalProps } from "@lib/components/connect/review-modal";

/**
 * The mode of interaction with the Starknet DApp.
 * Bridge mode is used when the the action will be performed on source (e.g. L1) chain to bridge into Starknet
 * Starknet mode is used when the action will be performed on Starknet chain only
 * None mode is used when no action is being performed (happens when no account is connected)
 */
export enum InteractionMode {
  Bridge = 'Bridge',
  Starknet = 'Starknet',
  None = 'None'
}

export interface ChainsConfig {
  starknet: ChainSN
}

interface SharedContext {
  mode: InteractionMode;
  setMode: (value: InteractionMode) => void;
  isModeSwitchedManually: boolean;
  setModeSwitchedManually: (value: boolean) => void;
  chains: ChainsConfig,
  setChains: (value: ChainsConfig) => void,
  reviewModalProps: ReviewModalProps;
  setReviewModalProps: (value: ReviewModalProps) => void;
}

const SharedStateContext = createContext({
  mode: InteractionMode.None,
  setMode: () => {},
  isModeSwitchedManually: false,
  setModeSwitchedManually: () => {},
  chains: {
    starknet: sepoliaSN
  },
  setChains: () => {},
  reviewModalProps: {
    isOpen: false,
    tokensIn: [],
    tokensOut: [],
    onContinue: () => {}
  },
  setReviewModalProps: () => {}
} as SharedContext);

export const SharedStateProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState(InteractionMode.None);
  const [isModeSwitchedManually, setModeSwitchedManually] = useState(false);
  const [chains, setChains] = useState<ChainsConfig>({
    starknet: sepoliaSN
  });
  const [reviewModalProps, setReviewModalProps] = useState<ReviewModalProps>({
    isOpen: false,
    tokensIn: [],
    tokensOut: [],
    onContinue: () => {}
  });

  return (
    <SharedStateContext.Provider value={{ mode, chains, reviewModalProps, setReviewModalProps, setChains, setMode, isModeSwitchedManually, setModeSwitchedManually }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  const context = useContext(SharedStateContext);

  if (!context) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }

  return context;
};

