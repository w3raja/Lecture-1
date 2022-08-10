import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { Abc } from 'src/app/entitites/abc.entity';
import { IProduct } from 'src/app/entitites/product.entity';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products!: IProduct[];
  pText = '';
  btn: boolean = true; //Hidden = true

  notification: boolean = false;

  showImage:boolean = true;

  toogleImage(){
    this.showImage = !this.showImage;
  }

  number: any;
  event: any;
  constructor() {}
  ngOnInit(): void {
    this.products = this.getProducts();
    console.log(this.products);
  }

  checkQty(event:any) {
    this.number = event.target.value;
    if (this.number >= 20) {
      this.btn = false; //Hidden = false
    } else {
      this.btn = true;
    }
  }

  onBuy(event:any, p:any){
    console.log(event);
    console.log(p);
    this.notification = true;
  }



  getProducts(): IProduct[] {
    return [
      {
        Id: '1',
        Title: 'Pen',
        Image: 'https://icons.veryicon.com/png/Object/Vintage/Ink%20Pen.png',
        Price: 200,
        Color: 'Red',
        inStock: true,
        Agency: 'Abc',
        Quantity: 30,

      },
      {
        Id: '2',
        Title: 'Pencil',
        Image: 'https://icons.veryicon.com/png/Object/Vintage/Ink%20Pen.png',
        Price: 100,
        Color: 'Blue',
        inStock: false,
        Agency: 'Xyz',
        Quantity: 120,
      },
      {
        Id: '3',
        Title: 'Book',
        Image: 'https://icons.veryicon.com/png/Object/Vintage/Ink%20Pen.png',
        Price: 2000,
        Color: 'White',
        inStock: true,
        Agency: 'Abc',
        Quantity: 5,
      },
      {
        Id: '4',
        Title: 'Bat',
        Image: 'https://icons.veryicon.com/png/Object/Vintage/Ink%20Pen.png',
        Price: 1200,
        Color: 'Black',
        inStock: false,
        Agency: 'Abc',
        Quantity: 40,
      },
      {
        Id: '5',
        Title: 'Ball',
        Image: 'https://icons.veryicon.com/png/Object/Vintage/Ink%20Pen.png',
        Price: 200,
        Color: 'Blue',
        inStock: false,
        Agency: 'Xyz',
        Quantity: 10,
      },
    ];
  }

  ngOnDestroy(): void {}
}

// pipe ia function
// trafsomr an input to output

// without chnaging the underlyiing structute of the input
