// place files you want to import through the `$lib` alias in this folder.

export * from './translations';

export interface IPublication {
    authors: string[];
    year: number;
    venue: string;
    url: string;
    title: string;
}