import Image from 'next/image';
import { RefreshIcon, NotifIcon } from './Icons';
import adminImg from '../public/adminImg.png';

const Topbar = ({ location }) => {
	return (
		<div className='bg-white min-h-[5.813rem] w-full flex flex-wrap items-center justify-between gap-x-6 px-12'>
			<p className='text-[#295AA9] text-xl md:text-[2rem] font-normal grow'>
				{location}
			</p>
			<div className='flex items-center gap-x-[1.67rem]'>
				<RefreshIcon />
				<NotifIcon />
				<div className='flex items-center gap-x-2'>
					<div className='flex flex-col'>
						<p className='text-[#3A3F47] font-medium text-base lg:text-xl'>
							Mikel Arteta
						</p>
						<p className='text-[#616976] font-normal text-xs lg:text-sm'>
							Super admin
						</p>
					</div>
					<Image
						src={adminImg}
						placeholder='blur'
						alt='Image of admin user'
						width={45}
						height={45}
					/>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
