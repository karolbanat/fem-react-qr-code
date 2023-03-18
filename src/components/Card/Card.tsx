import './Card.css';

interface CardProps {
	imageSrc: string;
	imageAlt: string;
	heading: string;
	text: string;
}

function Card({ imageSrc, imageAlt = '', heading, text }: CardProps) {
	return (
		<article className='card'>
			<img src={imageSrc} alt={imageAlt} className='card__image' />
			<h1 className='card__heading'>{heading}</h1>
			<p>{text}</p>
		</article>
	);
}

export default Card;
