import Stack from '~/components/Stack';
import DonationFormTotalAmount from '../DonationFormTotalAmount/DonationFormTotalAmount';
import DonationFormSummary from '../DonationFormSummary/DonationFormSummary';
import styled from 'styled-components';
import useMediaQuery from '~/hooks/useMediaQuery';
import { theme } from '~/theme/theme';

const DonationFormAmountsInfoStack = styled(Stack)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    border: 1px solid ${({ theme }) => theme.colors.blueGrey50};
    border-radius: 5px;
  }
`;

function DonationFormAmountsInfo() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobile}px)`);

  return (
    <DonationFormAmountsInfoStack
      direction={'column'}
      spacing={isMobile ? 'xl' : 'lg'}
    >
      <DonationFormTotalAmount />

      <DonationFormSummary />
    </DonationFormAmountsInfoStack>
  );
}

export default DonationFormAmountsInfo;
