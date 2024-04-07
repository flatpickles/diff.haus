import { validate } from '$lib/DiffValidation.js';
import { text } from '@sveltejs/kit';

export async function POST(event) {
	const data = await event.request.text();
	if (validate(data)) {
		return text('itz a diff\n');
	} else {
		return text('itz not a diff\n', {
			status: 400
		});
	}
}
