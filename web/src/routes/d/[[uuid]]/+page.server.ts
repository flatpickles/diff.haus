import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async ({ params }) => {
	// Go home if no uuid is supplied
	if (!params.uuid) {
		return redirect(303, '/');
	}

	// Go home if there's no diff with that uuid
	const { data } = await supabase.from('diffs').select('*').eq('id', params.uuid);
	if (!data || !data.length) {
		return redirect(303, '/');
	}

	// Render the stored diff
	return {
		diff: data[0].diff,
		uuid: params.uuid
	};
};
