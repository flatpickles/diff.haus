import { validate } from '$lib/DiffValidation.js';
import { supabase, type SupabaseError } from '$lib/supabaseClient.js';
import { text } from '@sveltejs/kit';
import ShortUUID from 'short-uuid';

function textResponse(message: string, status = 200): Response {
	// todo: more formatting stuff, and maybe a "no format" param option
	const boldMessage = `\x1b[1m${message}\x1b[0m\n`;
	return text(boldMessage, {
		status,
		headers: {
			'Content-Type': 'text/plain'
		}
	});
}

export async function POST(event) {
	// Retrieve and validate diff
	const data = await event.request.text();
	if (!validate(data)) {
		return textResponse("ERROR: input doesn't seem to be a diff", 400);
	}

	// Insert the diff into the database
	const uuid = ShortUUID().generate();
	const diffData = { id: uuid, diff: data, created_at: new Date() };
	try {
		const { error } = await supabase.from('diffs').insert([diffData]);
		if (error) {
			throw error;
		}
	} catch (error) {
		const supabaseError = error as SupabaseError;
		if (supabaseError.message) {
			return textResponse(`ERROR: ${supabaseError.message}`, 500);
		} else {
			return textResponse('ERROR: An unknown error occurred', 500);
		}
	}

	// Return the diff link
	const sourceURL = new URL(event.request.url);
	const diffURL = `${sourceURL.origin}/d/${uuid}`;
	return textResponse(diffURL, 201);
}
