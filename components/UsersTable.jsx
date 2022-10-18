import Link from 'next/link';
import { useState } from 'react';
import useTable from '../hooks/useTable';
import UserTableFooter from './UserTableFooter';

const UsersTable = ({ data, rowsPerPage }) => {
	const [page, setPage] = useState(1);
	const { slice, range } = useTable(data, page, rowsPerPage);
	return (
		<>
			<div className='overflow-x-auto border-[#D6D9DD] border-t my-6'>
				<table className='w-full select-none border-collapse border-spacing-0 table-auto'>
					<thead className='text-[#1B3C71]'>
						<tr className='h-[4.313rem]'>
							<th className='text-left py-8 p-2'>Date joined</th>
							<th className='text-left py-8 p-2'>User ID</th>
							<th className='text-left py-8 p-2'>Name</th>
							<th className='text-left py-8 p-2'>Email address</th>
							<th className='text-left py-8 p-2'>Phone no.</th>
							<th className='text-left py-8 p-2'>Status</th>
							<th className='text-left py-8 p-2'>Action</th>
						</tr>
					</thead>
					<tbody>
						{slice?.map((el) => (
							<tr
								className='h-[4.313rem] text-[#131518] odd:bg-[#F3F6FC]'
								key={el.id}
							>
								<td className='p-2'>{el.date}</td>
								<td className='text-[#1A8DD9] p-2'>{el.id}</td>
								<td className='p-2'>{el.name}</td>
								<td className='p-2'>{el.email}</td>
								<td className='p-2'>{el.mobile}</td>
								<td
									className={`${
										el.status === 'Approved'
											? 'bg-[#DEEDE5] text-[#5CA37B]'
											: el.status === 'Pending'
											? 'bg-[#F8F2D4] text-[#DABC29]'
											: 'bg-[#D4E2F8] text-[#296DDA]'
									} py-2 px-3 rounded-full flex justify-center mt-4  `}
								>
									{el.status}
								</td>
								<Link
									href={{
										pathname: `/userprofile/[slug]`,
										query: { slug: `${el.id}` },
									}}
								>
									<td className='text-[#65ACB0] p-2 cursor-pointer'>View</td>
								</Link>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<UserTableFooter range={range} setPage={setPage} page={page} />
		</>
	);
};

export default UsersTable;
