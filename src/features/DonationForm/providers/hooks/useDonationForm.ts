import { useContext } from 'react';
import {
  DonationFormContext,
  DonationFormContextType,
} from '../DonationFormProvider';

export const useDonationForm = (): DonationFormContextType => {
  const context = useContext(DonationFormContext);

  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
};
