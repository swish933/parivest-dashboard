import '../styles/globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/customcalendar.css';

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || EmptyLayout;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
