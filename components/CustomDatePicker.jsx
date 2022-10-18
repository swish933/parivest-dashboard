import { forwardRef } from 'react';
import { CalendarIcon } from './Icons';
import DatePicker from 'react-datepicker';

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(({ value, onClick }, ref) => (
	<div className='border-b-2 pb-3 flex gap-x-[1.688rem]' ref={ref}>
		{value ? value : 'dd/mm/yyyy'}
		<span className='cursor-pointer' onClick={onClick}>
			<CalendarIcon />
		</span>
	</div>
));

const CustomDatePicker = ({
	isMonthPicker,
	sDate,
	setDate,
	setMonthPicker,
}) => {
	return isMonthPicker ? (
		<DatePicker
			selected={sDate}
			onChange={(date) => {
				setMonthPicker(false);
				setDate(date);
			}}
			customInput={<CustomInput />}
			dateFormat='dd/MM/yyyy'
			fixedHeight
			showPopperArrow={false}
			shouldCloseOnSelect={false}
			showMonthYearPicker
		/>
	) : (
		<DatePicker
			selected={sDate}
			onChange={(date) => {
				setMonthPicker(true);
				setDate(date);
			}}
			customInput={<CustomInput />}
			dateFormat='dd/MM/yyyy'
			fixedHeight
			showPopperArrow={false}
		/>
	);
};

export default CustomDatePicker;
