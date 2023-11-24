import styled from 'styled-components';

import Typography from '~/components/Typography/Typography';
import { useDonationForm } from '../../providers/hooks/useDonationForm';
import getMonthDifference from '~/lib/date/getMonthDifference';
import { useEffect, useState } from 'react';
import { formatAsCurrency } from '~/lib/textFormatter';

const DonationFormTotalAmountContainer = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding-top: 24px;
  }
`;

const DonationFormTotalAmountTypography = styled(Typography)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    &.h3 {
      font-size: 16px;
    }
  }
`;

const DonationFormTotalAmountValueTypography = styled(Typography)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    &.h1 {
      font-size: 24px;
    }
  }
`;

function DonationFormTotalAmount() {
  const [donationDurationInMonths, setDonationDurationInMonths] = useState(0);

  const [donationTotalAmountFomatted, setDonationTotalAmountFomatted] =
    useState('');

  const { donationAmount, donationUntilDate } = useDonationForm();

  // TODO: Refactor to use a custom hook
  useEffect(() => {
    if (!donationUntilDate) return;

    const months = getMonthDifference(new Date(), donationUntilDate);

    setDonationDurationInMonths(months);
  }, [donationUntilDate]);

  // TODO: Refactor to use a custom hook
  useEffect(() => {
    if (!donationDurationInMonths || !donationAmount) {
      setDonationTotalAmountFomatted('0');
      return;
    }

    const totalAmount = donationDurationInMonths * donationAmount;

    const totalAmountFormatted = formatAsCurrency(totalAmount.toString());

    setDonationTotalAmountFomatted(totalAmountFormatted);
  }, [donationDurationInMonths, donationAmount, donationTotalAmountFomatted]);

  return (
    <DonationFormTotalAmountContainer>
      <DonationFormTotalAmountTypography variant={'h3'} htmlTag={'span'}>
        Total Amount
      </DonationFormTotalAmountTypography>

      <DonationFormTotalAmountValueTypography variant={'h1'} htmlTag={'span'}>
        ${donationTotalAmountFomatted || 0}
      </DonationFormTotalAmountValueTypography>
    </DonationFormTotalAmountContainer>
  );
}

export default DonationFormTotalAmount;
