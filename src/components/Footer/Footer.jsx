import styles from './Footer.module.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {

	return (
		<footer className={styles.footer}>
			<h3>Escreva sobre o que você tem interesse!</h3>
			<p>
				Mini Blog &copy; 2022 || Desenvolvido por:&nbsp;&nbsp;
				<a href="https://github.com/GilbertoASJ" target="_blank">Gilberto Alves</a>
			</p>
		</footer>
	)
}

export default Footer;