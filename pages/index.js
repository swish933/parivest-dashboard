import Head from 'next/head';
import Dashboard from '../components/Dashboard';
import Sidebar from '../components/Sidebar';
import DashboardLayout from '../layouts/dashboardLayout';

// export async function getServerSideProps(context) {
// 	const res = await fetch(`https://parivest-mock-api.herokuapp.com/`);
// 	const data = await res.json();
// 	console.log(data);
// 	return {
// 		props: { data },
// 	};
// }

export default function Home() {
	return (
		<>
			<Head>
				<title>Parivest Dashboard</title>
				<meta name='description' content='Dashboard for parivest' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='w-full flex flex-col'>
				<Dashboard />
			</main>
		</>
	);
}

Home.Layout = DashboardLayout;
