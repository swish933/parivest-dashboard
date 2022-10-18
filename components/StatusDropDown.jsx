import { ChevronIcon } from './Icons';

const StatusDropDown = ({
	handleSetStatus,
	selectedStatus,
	handleShowDropdown,
	showDropdown,
}) => {
	return (
		<div
			className='flex z-30 gap-x-2 items-center select-none cursor-pointer relative w-max'
			onClick={handleShowDropdown}
		>
			<span className='text-xl'>{selectedStatus}</span>
			<ChevronIcon />

			{showDropdown && (
				<div className='absolute top-8 flex flex-col rounded-lg divide-y bg-white w-[20.625rem] min-h-[12.75rem] shadow-[6px_6px_20px_rgba(32,37,44,0.1)]'>
					<span className='pl-4 py-4' onClick={() => handleSetStatus('All')}>
						All
					</span>
					<span
						className='pl-4 py-4'
						onClick={() => handleSetStatus('Approved')}
					>
						Approved
					</span>
					<span
						className='pl-4 py-4'
						onClick={() => handleSetStatus('Pending')}
					>
						Pending
					</span>
					<span
						className='pl-4 py-4'
						onClick={() => handleSetStatus('In-review')}
					>
						In-review
					</span>
				</div>
			)}
		</div>
	);
};

export default StatusDropDown;
