import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})
export class PrimengComponent {
  value: number[]=[];
  num1:number[]=[];
  num2:number[]=[];
  // basicData: any;

  // basicOptions: any;
  documentStyle = getComputedStyle(document.documentElement);
  textColor = this.documentStyle.getPropertyValue('--text-color');
  textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
  surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');
  basicData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            label: 'Sales',
            data: [540, 325, 702, 620],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
        }
    ]
};
basicOptions = {
  plugins: {
      legend: {
          labels: {
              color: this.textColor
          }
      }
  },
  scales: {
      y: {
          beginAtZero: true,
          ticks: {
              color: this.textColorSecondary
          },
          grid: {
              color: this.surfaceBorder,
              drawBorder: false
          }
      },
      x: {
          ticks: {
              color: this.textColorSecondary
          },
          grid: {
              color: this.surfaceBorder,
              drawBorder: false
          }
      }
  }
};
  files:TreeNode[]=[
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
          {
              key: '0-0',
              label: 'Work',
              data: 'Work Folder',
              icon: 'pi pi-fw pi-cog',
              children: [
                  { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                  { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
              ]
          },
          {
              key: '0-1',
              label: 'Home',
              data: 'Home Folder',
              icon: 'pi pi-fw pi-home',
              children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
          }
      ]
  },
  ];
  events:TreeNode[]=[
    {
      key: '1',
      label: 'Event',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
          {
              key: '0-1',
              label: 'Meeting',
              data: 'Work Folder',
              icon: 'pi pi-fw pi-cog',
              children: [
                  { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                  { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
              ]
          },
          {
              key: '0-2',
              label: 'Product Launch',
              data: 'Home Folder',
              icon: 'pi pi-fw pi-home',
              children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
          }
      ]
  },
  ];
  selectedCities:String[]=[];
  availableProducts: any[]=[
    {
      id: '1',
      name: 'Bamboo Watch',
      price: 100,
      category: 'Accessories',
      quantity: 24,
      
  },
  {
    id:'2',
    name:'Black Watch',
    category:'Accessories',
    quantity:61,
    price:200
  },
  {
    id:'4',
    name:"Blue Band",
    category:"Fitness",
    quantity:25,
    price:1500
  },
  {
    id:'4',
    name:"T-shirts",
    category:'Clothing',
    quantity:100,
    price:250
  },
  {
    id:'5',
    name:"Laptop",
    category:"Accessories",
    quantity:10,
    price:50000
  },
  ];

selectedProducts: any[]=[];

draggedProduct: any;
cols:any=[];

products:any=[
  {
    id: '1',
    name: 'Bamboo Watch',
    price: 100,
    category: 'Accessories',
    quantity: 24,
    
},
{
  id:'2',
  name:'Black Watch',
  category:'Accessories',
  quantity:61,
  price:200
},
{
  id:'4',
  name:"Blue Band",
  category:"Fitness",
  quantity:25,
  price:1500
},
{
  id:'4',
  name:"T-shirts",
  category:'Clothing',
  quantity:100,
  price:250
},
{
  id:'5',
  name:"Laptop",
  category:"Accessories",
  quantity:10,
  price:50000
},
];



// ngOnInit() {
  
//   this.selectedProducts = [];
//         this.availableProducts = [
//             {id:'1', name: 'Black Watch'},
//             {id:'2', name: 'Bamboo Watch'}
//         ]

//   this.cols = [
//       { field: 'code', header: 'Code' },
//       { field: 'name', header: 'Name' },
//       { field: 'category', header: 'Category' },
//       { field: 'quantity', header: 'Quantity' }
//   ];
// }
dragStart(product: any) {
  this.draggedProduct = product;
}

drop() {
  if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
      this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
      this.draggedProduct = null;
  }
}
dragEnd() {
  this.draggedProduct = null;
}

findIndex(product:any) {
  let index = -1;
  for (let i = 0; i < this.availableProducts.length; i++) {
      if (product.id === this.availableProducts[i].id) {
          index = i;
          break;
      }
  }
  return index;
}


}
