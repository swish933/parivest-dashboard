import { useState } from 'react';
import Options from './Options';
import Topbar from './Topbar';
import UsersTable from './UsersTable';
import { userData } from '../data/userInfo';

const Dashboard = () => {
	const [users] = useState([...userData]);

	return (
		<>
			<Topbar location={'Users'} />
			<div className='bg-[#F1F4FA] flex flex-col overflow-scroll'>
				<div className='rounded-t-lg grow bg-white mt-4 mx-4 lg:mt-10 lg:mx-10'>
					<Options />
					<UsersTable data={users} rowsPerPage={8} />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
