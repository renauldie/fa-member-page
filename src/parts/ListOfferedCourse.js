import React, { useEffect } from 'react';


export default function ListOfferedCourse({ data }) {
	return (
		<>
		{console.log(data.key)}
			<option value={data.id}>{data.course.name.toString()}</option>
		</>
	);
}

