const RecommendedPost = async ({title,date,slug,tags,description,author,bannerURL}) => {

    return (
<div className="flex flex-col justify-center h-screen">
	<div
		className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
		<div className="w-full md:w-1/3 bg-white grid place-items-center">
			<img src={bannerURL} alt="tailwind logo" className="rounded-xl" />
    </div>
			<div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div className="flex justify-between item-center">
					<p className="text-gray-500 font-medium hidden md:block">Vacations</p>
					<div className="">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path fillRule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clipRule="evenodd" />
						</svg>
					</div>
					<div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
						Superhost</div>
				</div>
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">{title}</h3>
                    <p className="md:text-lg text-gray-500 text-base">{description}</p>
				<p className="text-xl font-black text-gray-800">
					$110
					<span className="font-normal text-gray-600 text-base">/night</span>
				</p>
			</div>
		</div>
	</div>
    );
}

export default RecommendedPost;