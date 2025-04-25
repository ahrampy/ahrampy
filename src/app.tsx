import { Container } from './components/Container';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

export function App() {
	return (
		<Container>
			<Header />
			<MainContent />
		</Container>
	);
}
