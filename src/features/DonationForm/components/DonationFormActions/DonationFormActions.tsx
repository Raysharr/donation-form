import styled from 'styled-components';
import Button from '~/components/Button';
import ShowOn from '~/components/ShowOn';
import Typography from '~/components/Typography/Typography';

const DonationFormActionsContainer = styled.div`
  display: flex;
  gap: 11px;
`;

const DonationFormActionsActionContainer = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacings.sm}px;
  display: flex;
`;

function DonationFormActions() {
  return (
    <DonationFormActionsContainer>
      <ShowOn device={'desktop'}>
        <DonationFormActionsActionContainer>
          <Button
            variant={'outlined'}
            onClick={() => console.log('Cancel clicked!!!')}
          >
            <Typography variant={'body1'} weight={'regular'}>
              Cancel
            </Typography>
          </Button>
        </DonationFormActionsActionContainer>
      </ShowOn>

      <DonationFormActionsActionContainer>
        <Button onClick={() => console.log('Continue clicked!!!')}>
          <Typography variant={'body1'} weight={'regular'} color={'white'}>
            Continue
          </Typography>
        </Button>
      </DonationFormActionsActionContainer>
    </DonationFormActionsContainer>
  );
}

export default DonationFormActions;
