import Stack from '~/components/Stack';

import DonationFormCardHeader from './components/DonationFormHeader/DonationFormCardHeader';
import DonationFormInputs from './components/DonationFormInputs/DonationFormInputs';
import DonationFormCard from './components/DonationFormCard';
import DonationFormAmountsInfo from './components/DonationFormAmountsInfo/DonationFormAmountsInfo';
import DonationFormActions from './components/DonationFormActions/DonationFormActions';
import DonationFormCardContent from './components/DonationFormCardContent/DonationFormCardContent';
import DonationFormProvider from './providers/DonationFormProvider';

function DonationForm() {
  return (
    <DonationFormCard>
      <DonationFormCardHeader />

      <DonationFormCardContent>
        <Stack direction={'column'} spacing={'xxl'}>
          <DonationFormProvider>
            <DonationFormInputs />

            <DonationFormAmountsInfo />

            <DonationFormActions />
          </DonationFormProvider>
        </Stack>
      </DonationFormCardContent>
    </DonationFormCard>
  );
}

export default DonationForm;
