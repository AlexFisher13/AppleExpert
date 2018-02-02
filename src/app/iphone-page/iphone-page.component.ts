import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphone-page',
  templateUrl: './iphone-page.component.html',
  styleUrls: ['./iphone-page.component.css']
})
export class IphonePageComponent implements OnInit {

  iphones = [
    {name: 'iPhone', description: '2007', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 3g', description: '2008', url:'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 3gs', description: '2009', url:'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 4', description: '2010', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 4s', description: '2011', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 5', description: '2012', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 5c', description: '2013', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 5s', description: '2013', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 6', description: '2014', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 6 Plus', description: '2014', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 6s', description: '2015', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 6s Plus', description: '2015', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone SE', description: '2016', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 7', description: '2016', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 7 Plus', description: '2016', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 8', description: '2017', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone 8 Plus', description: '2017', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
    {name: 'iPhone X', description: '2017', url: 'https://mobidevices.ru/images/2013/05/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-iPhone.jpeg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
