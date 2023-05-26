import { Component, ViewChild } from '@angular/core';
import {IonContent, IonSelect} from '@ionic/angular';
import { ListsService } from '../lists.service';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('content') content!: IonContent;
  @ViewChild('listSelector') listSelector!: IonSelect;

  //lists
  public favorites: any = [];
  public wishlist: any = [];
  public customlists: any = [];

  //set first selection
  public selectedList: any = '0';

  //infinite scrolling
  public shownProducts: any = [];
  public currentPage: number = 1;
  public itemsPerPage: number = 10;

  //filter
  public sort: any = null;
  public search: any = null;

  constructor(
    private listsService: ListsService
  ) {}

  ngOnInit(): void {
    //append lists
    this.listsService.init();

    this.favorites = this.listsService.favorites;
    this.wishlist = this.listsService.wishlist;
    this.customlists = this.listsService.customlists;

    //load more
    this.loadMore();
  }

  /* fix infinite scroll glitch */
  async ngAfterViewInit(): Promise<void> {
    const scrollElement = await this.content.getScrollElement();
    scrollElement.style.paddingBottom = '0';
  }

  getAverageReviewRating(): number {
    // Generate a random number between 0 and 5
    const rating = Math.random() * 5;

    // Round the rating to either 1 decimal place or integer
    const roundedRating = Math.random() < 0.5 ? Math.round(rating) : Math.round(rating * 10) / 10;

    return roundedRating;
  }

  //get lists
  getFavorites(): any[] {
    if(this.sort === '0') {
      this.favorites.sort((a:any, b:any) => b.Price - a.Price);
    } else if (this.sort === '1') {
      this.favorites.sort((a:any, b:any) => a.Price - b.Price);
    }

    if(this.search){
      return this.favorites.filter((product:any) => product.ItemName.toLowerCase().includes(this.search.toLowerCase()));
    }
    return this.favorites;
  }

  getWishlist(): any[] {
    if(this.sort === '0') {
      this.wishlist.sort((a:any, b:any) => b.Price - a.Price);
    } else if (this.sort === '1') {
      this.wishlist.sort((a:any, b:any) => a.Price - b.Price);
    }

    if(this.search){
      return this.wishlist.filter((product:any) => product.ItemName.toLowerCase().includes(this.search.toLowerCase()));
    }
    return this.wishlist;
  }

  getOneCustomList(i: number): any[] {
    if(this.sort === '0') {
      this.customlists[i].Products.sort((a:any, b:any) => b.Price - a.Price);
    } else if (this.sort === '1') {
      this.customlists[i].Products.sort((a:any, b:any) => a.Price - b.Price);
    }

    if(this.search){
      return this.customlists[i].Products.filter((product:any) => product.ItemName.toLowerCase().includes(this.search.toLowerCase()));
    }
    return this.customlists[i].Products;
  }

  getProducts(): any[] {
    if (this.selectedList === '0') {
      return this.getFavorites();
    } else if (this.selectedList === '1') {
      return this.getWishlist();
    } else if (this.selectedList.includes('2')) {
      return this.getOneCustomList(parseInt(this.selectedList.replace('2-', ''), 10));
    }
    return [];
  }

  /* select list */
  selectList(): void {
    this.sort = '';
    this.search = '';
    this.selectedList = this.listSelector.value;
    this.restartInfiniteScroll();
  }

  /* infinite scrolling */
  loadMore(event: any = null) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    // load the next set of items from your existing array of favorites
    const nextItems = this.getProducts().slice(startIndex, endIndex);

    // append the next set of items to the existing items
    this.shownProducts = [...this.shownProducts, ...nextItems];

    // increment the page number
    this.currentPage++;

    event?.target.complete();
  }

  restartInfiniteScroll(): void {
    this.currentPage = 1;
    this.shownProducts = [];
    this.loadMore();
  }

  /* filteration */
  setSort(event: any): void {
    this.sort = event.target.value;

    this.restartInfiniteScroll();
  }

  setSearch(event: any): void {
    this.search = event.target.value;

    this.restartInfiniteScroll();
  }

  /* delete */
  deleteItem(i: number): void {
    if(this.selectedList === '0') {
      this.favorites.splice(this.favorites.findIndex((p: any) => this.shownProducts[i].ItemName === p.ItemName), 1);
    } else if (this.selectedList === '1') {
      this.wishlist.splice(this.wishlist.findIndex((p: any) => this.shownProducts[i].ItemName === p.ItemName), 1);
    } else if (this.selectedList.includes('2')) {
      this.customlists[parseInt(this.selectedList.replace('2-', ''), 10)].Products.splice(this.customlists[parseInt(this.selectedList.replace('2-', ''), 10)].Products.findIndex((p: any) => this.shownProducts[i].ItemName === p.ItemName), 1);
    }

    this.restartInfiniteScroll();
  }
}
