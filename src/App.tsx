import Card from './components/Card/Card';
import QRCode from './assets/image-qr-code.png';
import './App.css';

function App() {
	return (
		<main>
			<Card
				imageSrc={QRCode}
				imageAlt='Frontend Mentor Page QR Code'
				heading='Improve your front-end skills by building projects'
				text='Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
			></Card>
		</main>
	);
}

export default App;
