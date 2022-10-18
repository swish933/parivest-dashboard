import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ children }) {
	return (
		<div className='flex h-screen'>
			<Sidebar />
			{children}
		</div>
	);
}
