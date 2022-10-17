import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Parivest Dashboard</title>
				<meta name='description' content='Dashboard for parivest' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='flex'>
				<Sidebar></Sidebar>
				<div className='w-full'>
					<Topbar />
				</div>
			</div>
		</div>
	);
}
