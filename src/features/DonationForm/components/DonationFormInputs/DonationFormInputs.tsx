import DateInput from '~/components/DateInput';
import Icon from '~/components/Icon/Icon';
import MoneyInput from '~/components/MoneyInput/MoneyInput';
import Stack from '~/components/Stack/Stack';
import { useDonationForm } from '../../providers/hooks/useDonationForm';
import { useCallback } from 'react';
import useMediaQuery from '~/hooks/useMediaQuery';
import { theme } from '~/theme/theme';

function DonationFormInputs() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobile}px)`);

  const { donationAmount, setDonationAmount, setDonationUntilDate } =
    useDonationForm();

  const handleDonationDateUntilChange = useCallback(
    (date: Date) => {
      setDonationUntilDate(date);
    },
    [setDonationUntilDate],
  );

  const handleDonationAmountChange = useCallback(
    (amount: string) => {
      if (amount === '') {
        setDonationAmount(undefined);
        return;
      }

      setDonationAmount(parseFloat(amount));
    },
    [setDonationAmount],
  );

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      spacing={isMobile ? 'md' : 'xl'}
    >
      <MoneyInput
        initialValue={donationAmount?.toString()}
        onChange={handleDonationAmountChange}
        startIcon={<Icon name={'dolar'} />}
        label={'I can donate'}
      />

      <DateInput
        label={'Every month until'}
        onChange={handleDonationDateUntilChange}
      />
    </Stack>
  );
}

export default DonationFormInputs;
