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


  items:any[]=[
    {
      label: 'App Store',
      icon: 'data:image/png;base64,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'
  },
  {
      label: 'Screen-rcording',
      icon: 'data:image/png;base64,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'
  },
  {
      label: 'Photos',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJqQKZY-TvCsSOSrBpXpm6vZU9J8_vqY4HA&usqp=CAU'
  },
  {
      label: 'Screen-shot',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWpLoPb4LIN5TfaZ4VBB_zGgdzlDo7baTDm7k8KvZ&s'
  }
  ];
  position: string = 'right';

  positionOptions = [
      {
          label: 'Bottom',
          value: 'bottom'
      },
      {
          label: 'Top',
          value: 'top'
      },
      {
          label: 'Left',
          value: 'left'
      },
      {
          label: 'Right',
          value: 'right'
      }
  ];
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
