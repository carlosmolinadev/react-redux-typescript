export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  department?: string;
  city?: string;
  phone?: string;
  workPhone?: string;
  company?: string;
  avatar?: string;
  profession?: string;
  sellerType?: string;
  gender?: string;
}

//Extra information pagina principal
/*
Mis anuncios
Tips vender mas rapido
Interesados
Favoritos
Membresias
Herramientas
*/

export interface Advertisement {
  category: string;
  location: string;
  coordenates: string[];
  title: string;
  description: string;
  sellCondition: string;
  email: string;
  seller: string;
  phone: string;
  company?: string;
  address?: string;
  city?: string;
  webSite?: string;
  chatAvailable?: boolean;
  mainImage?: string;
  images?: string[];
  total: number;
  booster: null | string;
  postDate: Date;
  daysLeft: number;
  isDisabled: boolean;
}

export interface SearchOptions {
  title?: string;
  location?: string;
  sellCondition?: string;
  minimumPrice?: number;
  maximunPrice?: number;
  category?: string;
  categories?: string[];
}

export interface SearchPage {
  view: string;
  sort: string;
  notification: string;
  pagination: number;
}

export interface CarSearch extends SearchOptions {
  brand?: string;
  transmission?: string;
  fuel?: string;
}

export interface PropertySearch extends SearchOptions {
  rooms: number;
  size: number;
}

export interface JobsSearch {
  position: string;
  category: string;
  title: string;
  location: string;
  payment: number;
}
