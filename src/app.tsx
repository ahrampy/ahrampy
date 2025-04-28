import { Container } from './Layout/Container';
import { Header } from './Layout/Header';
import { MainContent } from './Layout/MainContent';

export function App() {
	return (
		<Container>
			<Header />
			<MainContent />
		</Container>
	);
}
