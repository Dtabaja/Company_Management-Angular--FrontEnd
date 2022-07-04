import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[] = []
  lastPage!:number;

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.load();
  }
   load(page =1):void{
    this.productService.all(page).subscribe(
       (res:any)=>
      {
        this.products = res.data;
        this.lastPage = res.data.last_page

      }
    )
    
  }

    delete(id:number):void{
    if(confirm("Are you sure you want to delete the Record?")){
    this.productService.delete(id).subscribe(
      () => this.products = this.products.filter(p => p.id !== id),
    );
      // ()=>
    

  }
  }
}
