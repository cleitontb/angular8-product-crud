import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductService } from '../Services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {  

  private products: Product[];

  constructor(private service: ProductService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getProducts().subscribe( products => { this.products = products } );
  }

  onClick(product: Product) {    
    this.service.deleteProduct(product).subscribe( response => {
      if(response.status == 'success'){        
        this.products = this.products.filter( p => {
          return p.id !== product.id;
        });
        this.toastr.success('Produto excluído com êxito!', 'Sucesso!');
      }
    } );
  }

}
