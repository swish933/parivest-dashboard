const UserTableFooter = ({ range, setPage, page }) => {
	const handleNext = () => {
		if (page === range.length) return;
		setPage(page + 1);
	};

	const handlePrev = () => {
		if (page === 1) return;
		setPage(page - 1);
	};

	return (
		<div className='mt-4 mb-2 bg-white flex flex-col mx-4 items-end'>
			<div className='flex flex-col gap-y-4'>
				<div className='flex gap-x-4'>
					<button className='bg-[#7FBABD] p-2 rounded' onClick={handlePrev}>
						Prev
					</button>
					<button className='bg-[#7FBABD] p-2 rounded' onClick={handleNext}>
						Next
					</button>
				</div>
				<span className='text-[#131518] self-center'>
					{page} of {range.length}
				</span>
			</div>
		</div>
	);
};

export default UserTableFooter;
