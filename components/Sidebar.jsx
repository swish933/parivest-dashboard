import {
	HomeIcon,
	InvestmentIcon,
	Parivest,
	ParivestLogo,
	SavingsIcon,
	UsersIcon,
	WalletIcon,
	AdminIcon,
	PasswordIcon,
	LogoutIcon,
} from './Icons';

const Sidebar = () => {
	return (
		<div className='flex flex-col bg-white lg:min-w-[16.938rem] h-screen '>
			<div className='flex gap-x-2 mx-6 mt-6'>
				<span>
					<ParivestLogo />
				</span>
				<span className='hidden lg:block'>
					<Parivest />
				</span>
			</div>
			<div className='flex flex-col grow overflow-scroll overscroll-contain'>
				<div className='text-[#8C94A1] mt-20 text-base flex flex-col grow gap-y-10'>
					<div className=' mx-2'>
						<p className='cursor-pointer flex gap-x-4 ml-4 my-4'>
							<HomeIcon />
							<span className='hidden lg:block'>Home</span>
						</p>
					</div>
					<div className='text-[#295AA9] overflow-hidden flex rounded-lg mx-2 bg-[#E7EEF9]'>
						<div className='w-2 bg-[#295AA9]'></div>
						<p className='cursor-pointer flex gap-x-4 ml-4 my-4'>
							<UsersIcon />
							<span className='hidden lg:block'>Users</span>
						</p>
					</div>
					<div className='mx-2'>
						<p className='cursor-pointer flex gap-x-4 ml-4 my-4'>
							<InvestmentIcon />
							<span className='hidden lg:block'>Investment</span>
						</p>
					</div>
					<div className='mx-2'>
						<p className='cursor-pointer flex gap-x-4 ml-4 my-4'>
							<SavingsIcon />
							<span className='hidden lg:block'>Savings</span>
						</p>
					</div>
					<div className='mx-2'>
						<p className='cursor-pointer flex gap-x-4 ml-4 my-4'>
							<WalletIcon />
							<span className='hidden lg:block'>Wallet</span>
						</p>
					</div>
					<div className=' mx-2'>
						<p className='cursor-pointer flex gap-x-4 ml-4 my-4'>
							<AdminIcon />
							<span className='hidden lg:block'>Admins</span>
						</p>
					</div>
				</div>

				<div className='flex flex-col text-[#8C94A1]'>
					<span className='border border-[#C8CCD2] m-6' />
					<div className='mx-2'>
						<p className='cursor-pointer flex gap-x-4 ml-4 my-4'>
							<PasswordIcon />
							<span className='hidden lg:block'>Change Password</span>
						</p>
					</div>
					<div className='mx-2'>
						<p className='cursor-pointer flex gap-x-4 ml-4 my-4'>
							<LogoutIcon />
							<span className='hidden lg:block'>Logout</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
