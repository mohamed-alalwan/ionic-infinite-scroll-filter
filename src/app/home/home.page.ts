import { Component, ViewChild } from '@angular/core';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('content') content!: IonContent;

  public products: any = [];
  public shownProducts: any = [];
  public currentPage: number = 1;
  public itemsPerPage: number = 10;

  public sort: any = null;
  public search: any = null;

  constructor() {}

  ngOnInit(): void {
    this.appendProducts();
    this.loadMore(null);
  }

  async ngAfterViewInit(): Promise<void> {
    const scrollElement = await this.content.getScrollElement();
    scrollElement.style.paddingBottom = '0';
  }

  appendProducts(): void {
     // Add dummy data
     this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Mascara',
      ItemName: 'Lash Extension Stain Mascara',
      Price: 9,
      FullScanPath: 'https://app2.mallats.com/cdn/48/InvMaster_20385_319703.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Electronics',
      SubCategoryName: 'Air Purifier & Accessories',
      ItemName: 'Philips AIR PURIFIERS',
      Price: 199.99,
      ItemCode: 'AMF220/95',
      FullScanPath: 'https://app2.mallats.com/cdn/85/AMF220_95.jpg',
    });

     this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName:'Lipstick',
      ItemName: 'Matte Lipstick',
      Price: 12.99,
      FullScanPath: 'https://m.maccosmetics.co.uk/media/export/cms/products/640x600/mac_sku_M300_640x600_0.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Clothing',
      SubCategoryName: 'T-Shirts',
      ItemName: 'Plain White T-Shirt',
      Price: 15.99,
      FullScanPath: 'https://assets.vogue.com/photos/6155e84f0bdae89cd6b1a0d0/master/w_1280%2Cc_limit/slide_4.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Facial Cleansers',
      ItemName: 'Foaming Cleanser',
      Price: 8.99,
      FullScanPath: 'https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/products-v3/foaming-facial-cleanser/700x875/cerave_foaming-facial-cleanser-12oz_front-700x875-v2.jpg?rev=65284ac19a2b43fa9a03b8b4bd555826&w=500&hash=DFD9D3111EA3EC3623900DD163ACF34E',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Electronics',
      SubCategoryName: 'Headphones',
      ItemName: 'Wireless Headphones',
      Price: 79.99,
      FullScanPath: 'https://cdn.shopify.com/s/files/1/0679/1312/2071/products/Untitled-14_8aeda913-768f-458f-bc68-c3cc6c418938.png?v=1683105617&width=1260',
    });

    // even more
    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Electronics',
      SubCategoryName: 'Smartphones',
     ItemName: 'Samsung Galaxy S21',
      Price: 899.99,
      FullScanPath: 'https://image-us.samsung.com/us/smartphones/galaxy-s21/Gallery-images-Palette/O1-White/PDP-O1-White-lockup-01-1600x1200.jpg?$product-details-jpg$',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Hair Care',
      ItemName: 'Argan Oil Shampoo',
      Price: 14.99,
      FullScanPath: 'https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/o/g/ogx-renewing-argan-oil-of-morocco-shampoo-385ml.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Clothing',
      SubCategoryName: 'Jeans',
      ItemName: 'Skinny Jeans',
      Price: 49.99,
      FullScanPath: 'https://img.mytheresa.com/1094/1236/66/jpeg/catalog/product/2b/P00685055.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Foundation',
      ItemName: 'Liquid Foundation',
      Price: 19.99,
      FullScanPath: 'https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/c/l/clinique-anti-blemish-solutions-liquid-foundation-02-fresh-ivory-30ml.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Electronics',
      SubCategoryName: 'Laptops',
      ItemName: 'Dell XPS 13',
      Price: 1299.99,
      FullScanPath: 'https://microless.com/cdn/products/b2a8047ff858d7090f8b5161876fc5d8-hi.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Electronics',
      CategoryName: 'Computers',
      SubCategoryName: 'Laptops',
      ItemName: 'Apple MacBook Pro',
      Price: 1499.99,
      FullScanPath: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Lip Care',
      ItemName: 'Lip Balm',
      Price: 4.99,
      FullScanPath: 'https://akns-images.eonline.com/eol_images/Entire_Site/20221014/rs_1024x759-221114152038-lip-care-2.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Clothing',
      SubCategoryName: 'Dresses',
      ItemName: 'Maxi Dress',
      Price: 39.99,
      FullScanPath: 'https://ounass-bh.atgcdn.ae/small_light(of=webp,q=90)/pub/media/catalog/product//2/1/215805656_green_in.jpg?1676659025.8581',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Nail Care',
      ItemName: 'Nail Polish Set',
      Price: 12.99,
      FullScanPath: 'https://static.zara.net/photos///2021/I/2/1/p/4400/002/012/2/w/1126/4400002012_6_1_1.jpg?ts=1634640583696',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Home',
      SubCategoryName: 'Furniture',
      ItemName: 'Sofa',
      Price: 599.99,
      FullScanPath: 'https://www.ikea.com/bh/en/images/products/angersby-2-seat-sofa-knisa-light-grey__0770896_pe755642_s5.jpg?f=xs',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Perfume',
      ItemName: 'Eau de Parfum',
      Price: 59.99,
      FullScanPath: 'https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/c/h/chloe-nomade-eau-de-parfum-naturelle.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Electronics',
      SubCategoryName: 'Cameras',
      ItemName: 'Canon EOS R',
      Price: 2399.99,
      FullScanPath: 'https://cdn.shopify.com/s/files/1/0679/1312/2071/products/sony.-ZVE10LB-C-1.jpg?v=1668600506&width=1260',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Home',
      SubCategoryName: 'Bedding',
      ItemName: 'Comforter Set',
      Price: 89.99,
      FullScanPath: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/812gzF9c2XL._AC_SS450_.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Eye Care',
      ItemName: 'Eye Cream',
      Price: 24.99,
      FullScanPath: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/lmi/lmi10116/v/15.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Clothing',
      SubCategoryName: 'Shoes',
      ItemName: 'Sneakers',
      Price: 59.99,
      FullScanPath: 'https://cdn.shopify.com/s/files/1/0037/0658/5123/products/1_aa7d9520-a44d-4a15-9147-63cecf796e45_250x250@2x.jpg?v=1602342993',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty& Health',
      SubCategoryName: 'Hair Styling',
      ItemName: 'Ceramic Hair Straightener',
      Price: 39.99,
      FullScanPath: 'https://cdn11.bigcommerce.com/s-1xo6r218zd/images/stencil/1280x1280/products/126/1949/ST-1600_Progloss_Steamcare_Hair_Straightener_Main__43931.1648141889.jpg?c=1',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Home',
      SubCategoryName: 'Kitchen Appliances',
      ItemName: 'Air Fryer',
      Price: 99.99,
      FullScanPath: 'https://media.extra.com/i/aurora/100223852_100_01?w=800&h=800&img404=missing_product&v=false',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Makeup Brushes',
      ItemName: 'Brush Set',
      Price: 14.99,
      FullScanPath: 'https://static.beautytocare.com/media/catalog/product/cache/global/image/85e4522595efc69f496374d01ef2bf13/f/l/flormar-makeup-brush-set.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Electronics',
      SubCategoryName: 'Tablets',
      ItemName: 'iPad Air',
      Price: 599.99,
      FullScanPath: 'https://www.apple.com/newsroom/images/product/ipad/standard/Apple-iPad-Air-hero-color-lineup-220308_big.jpg.slideshow-xlarge.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Home',
      SubCategoryName: 'Decor',
      ItemName: 'Wall Clock',
      Price: 29.99,
      FullScanPath: 'https://www.ikea.com/bh/en/images/products/bondis-wall-clock-low-voltage-black__0638616_pe699035_s5.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Facial Care',
      ItemName: 'Facial Cleansing Brush',
      Price: 39.99,
      FullScanPath: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51Y0cidk15L._SL1500_.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Clothing',
      SubCategoryName: 'Accessories',
      ItemName: 'Sunglasses',
      Price: 19.99,
      FullScanPath: 'https://www.montblanc.com/variants/images/42247633208661467/A/w2500.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Body Care',
      ItemName: 'Body Lotion',
      Price: 12.99,
      FullScanPath: 'https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/s/e/sebamed-rich-moisturizing-body-lotion-400ml.jpg',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Home',
      SubCategoryName: 'Cleaning Supplies',
      ItemName: 'Vacuum Cleaner',
      Price: 149.99,
      FullScanPath: 'https://media.extra.com/s/aurora/100315013_800/Geepas-Cordless-Vacuum-Cleaner%2C-Rechargeable%2C-30-Mins-Usage%2C-Grey?locale=en-GB,en-*,*&$Listing-Product-2x$',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Cosmetics',
      CategoryName: 'Beauty & Health',
      SubCategoryName: 'Eyelashes',
      ItemName: 'False Eyelashes',
      Price: 9.99,
      FullScanPath: 'https://cdn.shopify.com/s/files/1/0077/2364/7027/products/3_720x_75509108-662d-463a-9136-d6c89f7bdc9c_1200x1200.jpg?v=1664584255',
    });

    this.products.push({
      CustomerCategoryTypeTitle: 'Department Store',
      CategoryName: 'Electronics',
      SubCategoryName: 'Headphones',
      ItemName: 'Bose QuietComfort 35 II',
      Price: 299.99,
      FullScanPath: 'https://m.media-amazon.com/images/I/81+jNVOUsJL.jpg',
    });

  }

  getProducts(): any[] {
    if(this.search){
      return this.products.filter((product:any) => product.ItemName.toLowerCase().includes(this.search.toLowerCase()));
    }
    return this.products;
  }

  loadMore(event: any) {
    setTimeout(() => {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;

      // load the next set of items from your existing array of products
      const nextItems = this.getProducts().slice(startIndex, endIndex);

      // append the next set of items to the existing items
      this.shownProducts = [...this.shownProducts, ...nextItems];

      // increment the page number
      this.currentPage++;

      event?.target.complete();
    }, 500);
  }

  restartInfiniteScroll(): void {
    this.currentPage = 1;
    this.shownProducts = [];
    this.loadMore(null);
  }

  setSort(event: any): void {
    this.sort = event.target.value;
    console.log(this.sort);

    this.restartInfiniteScroll();

    if(this.sort === '0') {
      this.products.sort((a:any, b:any) => b.Price - a.Price);
    } else if (this.sort === '1') {
      this.products.sort((a:any, b:any) => a.Price - b.Price);
    }
  }

  setSearch(event: any): void {
    this.search = event.target.value;
    console.log(this.search);

    this.restartInfiniteScroll();
  }
}
