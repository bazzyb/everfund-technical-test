import { PropsWithChildren, createContext, useState } from 'react'

export const NonprofitsList = [
  {
    id: 0,
    name: 'Planting Trees for Tomorrow',
  },
  {
    id: 1,
    name: 'Paws for a Cause',
  },
  {
    id: 2,
    name: 'Sports for All',
  },
]

export type NonpofitType = {
  id: number
  name: string
}

interface NonProfitContextValue {
  nonprofit: NonpofitType
  setNonProfit: React.Dispatch<React.SetStateAction<NonpofitType>>
}

// id
export const NonProfitContext = createContext<
  NonProfitContextValue | undefined
>(undefined)

export function NonProfitProvider({
  children,
}: PropsWithChildren<Record<never, never>>) {
  const [nonprofit, setNonProfit] = useState<NonpofitType>(NonprofitsList[0])

  return (
    <NonProfitContext.Provider value={{ nonprofit, setNonProfit }}>
      {children}
    </NonProfitContext.Provider>
  )
}

export const useNonProfitContext = () => {
  const nonProfitContext = React.useContext(NonProfitContext)
  if (nonProfitContext === undefined) {
    throw new Error('useOnboardingContext must be inside a NonProfitContext')
  }
  return nonProfitContext
}
