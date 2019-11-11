import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { SearchComponent } from "./search/search.component";
import { StarsComponent } from "./stars/stars.component";
import { ProductService } from "./shared/product.service";
import { ProductDescriptionComponent } from "./product-description/product-description.component";
import { SellerInfoComponent } from "./seller-info/seller-info.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductDetailComponent,
    SearchComponent,
    StarsComponent,
    ProductDescriptionComponent,
    SellerInfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
