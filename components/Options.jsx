import { useState } from 'react';
import CustomDatePicker from './CustomDatePicker';
import StatusDropDown from './StatusDropDown';

const Options = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [isStartMonthPicker, setStartMonthPicker] = useState(true);
	const [isEndMonthPicker, setEndMonthPicker] = useState(true);
	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedStatus, setSelectedStatus] = useState('All');

	const handleShowDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const handleSetStatus = (status) => {
		setSelectedStatus(status);
	};

	return (
		<div className='flex flex-col bg-white text-[#3A3F47] rounded-t-lg p-4 lg:p-8 gap-y-4 '>
			{/* <div className='border w-full'> */}
			<StatusDropDown
				selectedStatus={selectedStatus}
				handleSetStatus={handleSetStatus}
				handleShowDropdown={handleShowDropdown}
				showDropdown={showDropdown}
			/>
			<div className='flex gap-x-6 flex-wrap gap-y-3 mt-5 lg:mt-0'>
				<div className='flex items-center gap-x-2'>
					<p className='pb-3'>From </p>
					<CustomDatePicker
						isMonthPicker={isStartMonthPicker}
						setMonthPicker={setStartMonthPicker}
						sDate={startDate}
						setDate={setStartDate}
					/>
				</div>
				<div className='flex items-center gap-x-2'>
					<p className='pb-3'>To</p>
					<CustomDatePicker
						isMonthPicker={isEndMonthPicker}
						setMonthPicker={setEndMonthPicker}
						sDate={endDate}
						setDate={setEndDate}
					/>
				</div>
			</div>
		</div>
	);
};

export default Options;
