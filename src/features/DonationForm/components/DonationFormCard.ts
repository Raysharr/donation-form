import styled from 'styled-components';

import Card from '~/components/Card';

const DonationFormCard = styled(Card)`
  max-width: 600px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 100%;
  }
`;

export default DonationFormCard;
