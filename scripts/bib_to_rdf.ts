import { generatePublication } from '../src/lib/index';
import { DataFactory } from 'rdf-data-factory';
import * as RDF from '@rdfjs/types';
import { rdfSerializer } from 'rdf-serialize';
import { streamifyArray } from 'streamify-array';
import { exit } from 'process';

const DF: RDF.DataFactory = new DataFactory();

const scholarlyArticleTerm = DF.namedNode('https://schema.org/ScholarlyArticle');
const urlTerm = DF.namedNode('https://schema.org/url');
const nameTerm = DF.namedNode('https://schema.org/name');
const authorTerm = DF.namedNode('https://schema.org/author');
const yearTerm = DF.namedNode('https://schema.org/datePublished');
const isPartOfTerm = DF.namedNode('https://schema.org/isPartOf');
const rdfType = DF.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type');

const bibFile = Bun.file('./resume/works.bib');
const bibString = await bibFile.text();

const publicationEntries = generatePublication(bibString);

let triples: RDF.Quad[] = [];

for (const publication of publicationEntries) {
	const id = DF.blankNode();
	const pubicationTriples = [
		DF.quad(id, rdfType, scholarlyArticleTerm),
		DF.quad(id, nameTerm, DF.literal(publication.title)),
		DF.quad(id, urlTerm, DF.literal(publication.url)),
		DF.quad(id, yearTerm, DF.literal(`${publication.year}-01-01`)),
		DF.quad(id, isPartOfTerm, DF.literal(publication.venue))
	];
	for (const author of publication.authors) {
		const authorTriple = DF.quad(id, authorTerm, DF.literal(author));
		pubicationTriples.push(authorTriple);
	}
	triples = triples.concat(pubicationTriples);
}

const textStream = rdfSerializer.serialize(streamifyArray(triples), { contentType: 'text/turtle' });

textStream
	.pipe(process.stdout)
	.on('data', (data) => console.log(data))
	.on('error', (error) => {
		throw new Error(error);
	})
	.on('end', () => {
		exit(0);
	});
