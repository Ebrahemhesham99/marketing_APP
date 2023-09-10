import { Component , EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
products:any = [];
categories:any = [];
cardproducts:any = {};

constructor(private service : ProductsService){}
ngOnInit() {
  this.getproducts();
  this.getcategories();
  
}
getproducts(){
  this.service.getAllProducts().subscribe((data:any)=>{
   this.products = data;
  })
}
getcategories(){
  this.service.getAllcategories().subscribe((data:any)=>{
   this.categories = data;
  },error =>{
    console.log(error);
  })
  
}
filtercat(event:any){
  let key = event.target.value;
  if(key == "All"){
    this.getproducts();
  }
  else{
  this.getProductByCategory(key)}
}
getProductByCategory(key:string){
  this.service.getProductsByCategory(key).subscribe((data:any) =>{
    this.products = data;
})
}
addtocart(event:any){
  if("cart" in localStorage){
  this.cardproducts = JSON.parse(localStorage.getItem("cart")!);
  let existing = this.cardproducts.find((item:any) => item.item.id == event.item.id)
  if(existing) {
    alert("Product is already in your cart")
  }else {
    this.cardproducts.push(event)
    localStorage.setItem("cart" , JSON.stringify(this.cardproducts))
  }
} else {
  this.cardproducts.push(event)
  localStorage.setItem("cart" , JSON.stringify(this.cardproducts))
}
}
}



