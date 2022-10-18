import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';
import { BackIcon } from '../../components/Icons';
import Topbar from '../../components/Topbar';
import DashboardLayout from '../../layouts/dashboardLayout';
import userImg from '../../public/userImg.png';

// export async function getServerSideProps(context) {
// 	const res = await fetch(`https://parivest-mock-api.herokuapp.com/id`);
// 	const data = await res.json();
// 	console.log(data);
// 	console.log(context.params);
// 	return {
// 		props: { data },
// 	};
// }

// eslint-disable-next-line react/display-name
const MyButton = forwardRef(({ onClick, href }, ref) => {
	return (
		<a href={href} onClick={onClick} ref={ref}>
			<BackIcon />
		</a>
	);
});

const Profile = () => {
	return (
		<main className='w-full bg-[#F1F4FA] flex flex-col'>
			<>
				<Topbar location={'User profile'} />
				<div className='bg-[#F1F4FA] flex flex-col overflow-scroll'>
					<div className='rounded-t-lg grow bg-white mt-4 mx-4 lg:mt-10 lg:mx-10'>
						<div className='flex justify-between flex-wrap select-none py-6 px-8'>
							<div className='flex items-center gap-x-2'>
								<Link href='/' passHref>
									<MyButton />
								</Link>
								<p className='text-[#295AA9] text-2xl'>John Doe</p>
							</div>
							<button className='bg-[#E7EEF9] p-4 text-sm text-[#295AA9]'>
								View profile status
							</button>
						</div>

						<div className='border-y px-8 py-8 '>
							<Image src={userImg} alt={'An image of a user'} />

							<p className='text-[#295AA9] text-2xl font-semibold mb-6'>
								Account details
							</p>
							<div className='flex flex-wrap gap-y-4 gap-x-10'>
								<div className='flex flex-col'>
									<span className='text-[#616976] text-sm lg:text-base'>
										User ID
									</span>
									<span className='text-[#081222] text-sm lg:text-xl'>
										P000063
									</span>
								</div>
								<div className='flex flex-col'>
									<span className='text-[#616976] text-sm lg:text-base'>
										First name
									</span>
									<span className='text-[#081222] text-sm lg:text-xl'>
										John
									</span>
								</div>
								<div className='flex flex-col'>
									<span className='text-[#616976] text-sm lg:text-base'>
										Last name
									</span>
									<span className='text-[#081222] text-sm lg:text-xl'>Doe</span>
								</div>
								<div className='flex flex-col'>
									<span className='text-[#616976] text-sm lg:text-base'>
										Email address
									</span>
									<span className='text-[#081222] text-sm lg:text-xl'>
										Johndoe@example.com
									</span>
								</div>
							</div>
						</div>

						<div className='border-b px-8 pt-4 pb-8'>
							<p className='text-[#295AA9] text-2xl font-semibold mb-6'>
								Investment profile
							</p>
							<div className='flex flex-col gap-y-8'>
								<div className='flex flex-wrap gap-y-4 gap-x-10'>
									<div className='flex flex-col gap-y-2'>
										<span className='text-[#616976] text-sm lg:text-base'>
											Annual income
										</span>
										<span className='text-[#081222] text-sm lg:text-xl'>
											$470.48
										</span>
									</div>
									<div className='flex flex-col gap-y-2'>
										<span className='text-[#616976] text-sm lg:text-base'>
											Investment goal
										</span>
										<span className='text-[#081222] text-sm lg:text-xl'>
											$470.48
										</span>
									</div>
									<div className='flex flex-col gap-y-2'>
										<span className='text-[#616976] text-sm lg:text-base'>
											Investment experience
										</span>
										<span className='text-[#081222] text-sm lg:text-xl'>
											None
										</span>
									</div>
									<div className='flex flex-col gap-y-2'>
										<span className='text-[#616976] text-sm lg:text-base'>
											Marital status
										</span>
										<span className='text-[#081222] text-sm lg:text-xl'>
											Single
										</span>
									</div>
									<div className='flex flex-col gap-y-2'>
										<span className='text-[#616976] text-sm lg:text-base'>
											Next of kin name
										</span>
										<span className='text-[#081222] text-sm lg:text-xl'>
											Kathryn Murphy
										</span>
									</div>
								</div>

								<div className='flex flex-wrap gap-y-4 gap-x-10'>
									<div className='flex flex-col gap-y-2'>
										<span className='text-[#616976] text-sm lg:text-base'>
											Next of kin phone
										</span>
										<span className='text-[#081222] text-sm lg:text-xl'>
											nil
										</span>
									</div>
									<div className='flex flex-col gap-y-2'>
										<span className='text-[#616976] text-sm lg:text-base'>
											Next of kin email
										</span>
										<span className='text-[#081222] text-sm lg:text-xl'>
											nil
										</span>
									</div>
									<div className='flex flex-col gap-y-2'>
										<span className='text-[#616976] text-sm lg:text-base'>
											Next of kin relationship
										</span>
										<span className='text-[#081222] text-sm lg:text-xl'>
											Sister
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</main>
	);
};

Profile.Layout = DashboardLayout;

export default Profile;
