import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  id:any;
  data:any = [];
  constructor (private route:ActivatedRoute,private service:ProductsService){
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }
  
  getdetails(){
   return this.service.getProductDetails(this.id).subscribe((arr:any)=>{
     this.data = arr;
    })
  }
  ngOnInit():void{
      this.getdetails();
      console.log(this.getdetails())
 }
}
