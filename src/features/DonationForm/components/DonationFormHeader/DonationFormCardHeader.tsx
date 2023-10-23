import styled from 'styled-components';
import { CardHeader } from '~/components/Card';
import Stack from '~/components/Stack/Stack';
import Typography from '~/components/Typography/Typography';
import givingIconPath from './assets/giving.svg';
import { theme } from '~/theme/theme';
import useMediaQuery from '~/hooks/useMediaQuery';
import IconButton from '~/components/IconButton';
import ShowOn from '~/components/ShowOn';

const StackCenteredHorizontally = styled(Stack)`
  align-items: center;
`;

const TitlesStack = styled(Stack)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    align-items: center;
  }
`;

const MainTitleTypography = styled(Typography)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    &.h1 {
      font-size: 24px;
    }
  }
`;

const DonationFormCardHeaderContainer = styled(CardHeader)`
  background-color: ${({ theme }) => theme.colors.salmon};
  display: flex;
  gap: 4px;
  flex-direction: column;
  position: relative;
`;

const IconButtonCloseButton = styled(IconButton)`
  position: absolute;
  top: ${({ theme }) => theme.spacings.sm}px;
  right: ${({ theme }) => theme.spacings.sm}px;
  padding: ${({ theme }) => theme.spacings.sm}px;
  border-radius: 10px;

  &:hover {
    background-color: #f2d0c1;
  }
`;

function DonationFormCardHeader() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobile}px)`);

  return (
    <DonationFormCardHeaderContainer>
      <ShowOn device="mobile">
        <IconButtonCloseButton
          name={'close'}
          onClick={() => console.log('cancel clicked!!!')}
        />
      </ShowOn>

      <StackCenteredHorizontally
        direction={isMobile ? 'column' : 'row'}
        spacing={'md'}
      >
        <img src={givingIconPath} alt={'heart'} />

        <TitlesStack direction={'column'}>
          <MainTitleTypography variant={'h1'} color={'midnightPurple'}>
            The giving block
          </MainTitleTypography>

          <Typography variant={'body1'} family={'Inter'} color={'purpleGrey'}>
            Set up your donation goal!
          </Typography>
        </TitlesStack>
      </StackCenteredHorizontally>
    </DonationFormCardHeaderContainer>
  );
}

export default DonationFormCardHeader;
