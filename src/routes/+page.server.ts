import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const url = `https://duckduckgo.com/?q=${data.get('search_terms')}&ia=web`;
		throw redirect(303, url);
	}
} satisfies Actions;
