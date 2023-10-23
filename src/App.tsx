import DonationForm from './features/DonationForm/DonationForm';
import SimpleLayout from './layouts/SimpleLayout';
import RootProvider from './providers/RootProvider';

function App() {
  return (
    <RootProvider>
      <SimpleLayout>
        <DonationForm />
      </SimpleLayout>
    </RootProvider>
  );
}

export default App;
