import { Title } from '@angular/platform-browser';
import { Products } from './products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Products: any[] , searchVal:string): any[] {

    return  Products.filter((Product)=>Product.Title.toLowerCase().includes(searchVal.
      toLowerCase()));
  }

}
