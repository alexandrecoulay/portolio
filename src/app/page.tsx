import HomePage from '@/views';
import Provider from '@/context';

// Root route defaults to English
export default function Home() {
  return (
    <Provider initialLang="en">
      <HomePage />
    </Provider>
  );
}
