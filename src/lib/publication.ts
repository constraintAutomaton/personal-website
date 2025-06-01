import { parseBibtex } from '@dataset.sh/bibtex-parser';

export interface IPublication {
	authors: string[];
	year: number;
	venue: string;
	url: string;
	title: string;
}

export function generatePublication(bibtex: string): IPublication[] {
	const publicationEntries: IPublication[] = [];
	const entries = parseBibtex(bibtex);
	for (const entry of entries) {
		if (entry.author === undefined) {
			throw new Error(`author is missing in ${entry}`);
		}

		if (entry.year === undefined) {
			throw new Error(`year is missing in ${entry}`);
		}
		if (entry.url === undefined) {
			throw new Error(`url is missing in ${entry}`);
		}
		if (entry.title === undefined) {
			throw new Error(`title is missing in ${entry}`);
		}
		let venue: string | undefined = undefined;
		if ('type' in entry && entry.type === 'article') {
			venue = entry.journal;
		}
		if ('type' in entry && entry.type === 'inproceedings') {
			venue = entry.booktitle;
		}
		if (venue === undefined) {
			throw new Error(`venue is missing in ${entry}`);
		}
		const publication: IPublication = {
			authors: entry.author,
			year: entry.year,
			url: entry.url,
			title: entry.title,
			venue
		};
		publicationEntries.push(publication);
	}
	return publicationEntries;
}
