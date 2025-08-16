import Buyable from './Buyable';


export default class Movie implements Buyable {
  readonly id: number;
  readonly name: string;       
  readonly price: number;         
  readonly country: string[];    
  readonly slogan: string;        
  readonly genres: string[];      
  readonly duration: number;     
  readonly originalTitle?: string; 

  constructor(params: {
    id: number;
    name: string;
    price: number;
    year: number;
    country: string | string[];
    slogan: string;
    genres: string | string[];
    duration: number;          
    originalTitle?: string;
  }) {
    this.id = params.id;
    this.name = params.name;
    this.price = params.price;
    this.year = params.year;
    this.country = Array.isArray(params.country) ? params.country : [params.country];
    this.slogan = params.slogan;
    this.genres = Array.isArray(params.genres) ? params.genres : [params.genres];
    this.duration = params.duration;
    this.originalTitle = params.originalTitle;
  }


  get card() {
    const country = this.country.join(', ');
    const genres = this.genres.join(', ');
    const hours = Math.floor(this.duration / 60);
    const mins = this.duration % 60;
    const time = hours ? `${hours} ч ${mins} мин` : `${mins} мин`;
    return {
      title: this.name,
      subtitle: this.originalTitle ? `${this.originalTitle} • ${this.year}` : String(this.year),
      metaTop: `${country} • ${genres}`,
      tagline: this.slogan,     
      time,
      price: this.price,
    };
  }
}
