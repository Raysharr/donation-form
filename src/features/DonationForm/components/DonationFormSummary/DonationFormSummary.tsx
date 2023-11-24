import Alert from '~/components/Alert/Alert';
import Typography from '~/components/Typography/Typography';
import { useDonationForm } from '../../providers/hooks/useDonationForm';
import { getMonthNameFromDate } from '~/lib/date';
import months from '~/constants/months';
import { useEffect, useState } from 'react';
import { formatAsCurrency } from '~/lib/textFormatter';
import styled from 'styled-components';

const DonationFormSummaryTypography = styled(Typography)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    text-align: center;
    display: block;
  }
`;

function DonationFormSummary() {
  const { donationAmount, donationUntilDate } = useDonationForm();

  const [donationAmountFormatted, setDonationAmountFormatted] = useState('');

  const [monthName, setMonthName] = useState('');

  const [year, setYear] = useState<number>();

  // TODO: Refactor to use a custom hook
  useEffect(() => {
    if (!donationAmount) {
      setDonationAmountFormatted('0');
      return;
    }

    const donationAmountFormatted = formatAsCurrency(donationAmount.toString());

    setDonationAmountFormatted(donationAmountFormatted);
  }, [donationAmount]);

  // TODO: Refactor to use a custom hook
  useEffect(() => {
    if (!donationUntilDate) return;

    const monthName = getMonthNameFromDate(months, donationUntilDate);

    const year = donationUntilDate.getFullYear();

    setMonthName(monthName);

    setYear(year);
  }, [donationUntilDate]);

  return (
    <Alert severity={'info'}>
      <DonationFormSummaryTypography variant={'body3'}>
        You will be sending <strong>${donationAmountFormatted || 0}</strong>{' '}
        every month, until{' '}
        <strong>
          {monthName} {year}
        </strong>
        . Thank you!
      </DonationFormSummaryTypography>
    </Alert>
  );
}

export default DonationFormSummary;
