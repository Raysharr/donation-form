import React, { createContext, useMemo, useState } from 'react';

export type DonationFormContextType = {
  donationUntilDate?: Date;
  setDonationUntilDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  donationAmount?: number;
  setDonationAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const DonationFormContext = createContext<
  DonationFormContextType | undefined
>(undefined);

interface DonationFormProviderProps {
  children: React.ReactNode;
}

export default function DonationFormProvider({
  children,
}: DonationFormProviderProps) {
  const [donationUntilDate, setDonationUntilDate] = useState<Date>();

  const [donationAmount, setDonationAmount] = useState<number>();

  const contextValue = useMemo(
    () => ({
      donationUntilDate,
      setDonationUntilDate,
      donationAmount,
      setDonationAmount,
    }),
    [donationAmount, donationUntilDate],
  );

  return (
    <DonationFormContext.Provider value={contextValue}>
      {children}
    </DonationFormContext.Provider>
  );
}
