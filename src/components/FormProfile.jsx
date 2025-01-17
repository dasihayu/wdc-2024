export const FormInput = ({
	label,
	name,
	type = "text",
	value,
	onChange,
	required = false,
	disabled = false,
	placeholder = "",
	className = "",
}) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="text-sm text-gray-600">
				{label}
				{required && "*"}
			</label>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				disabled={disabled}
				placeholder={placeholder}
				className={`h-12 px-4 border rounded-lg border-gray-300 focus:outline-none focus:border-primary
          ${disabled ? "bg-gray-50" : ""}
          ${className}`}
			/>
		</div>
	);
};

export const FormSelect = ({
	label,
	name,
	value,
	onChange,
	options,
	required = false,
	disabled = false,
	placeholder = "Select an option",
	className = "",
}) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="text-sm text-gray-600">
				{label}
				{required && "*"}
			</label>
			<select
				name={name}
				value={value}
				onChange={onChange}
				disabled={disabled}
				className={`h-12 px-4 border rounded-lg border-gray-300 focus:outline-none focus:border-primary
          ${disabled ? "bg-gray-50" : ""}
          ${className}`}
			>
				<option value="">{placeholder}</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};
