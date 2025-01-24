export * from './tmdb';

interface Collection {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  adult: boolean;
  video: boolean;
  original_language: string;
  genre_ids: number[];
}

export interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails extends Movie {
  tagline: string;
  runtime: number;
  status: string;
  budget: number;
  revenue: number;
  homepage: string | null;
  imdb_id: string | null;
  genres: Genre[];
  belongs_to_collection: Collection | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
}
