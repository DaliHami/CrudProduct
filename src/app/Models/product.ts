
export interface Product extends ProductPost {
  id: string;
}

export interface ProductPost {
  name : string;
  description : string;
  date : Date ;
  price :number;
}
