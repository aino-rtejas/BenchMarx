import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Router } from '@angular/router';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Arithmatic Operation',
    children: [{name: 'Addition'}, {name: 'Subtraction'}, {name: 'Multiplication'},{name: 'Division'},{name: 'Modulus'}],
  },
  {
    name: 'Assignment Operator',
    children: [{name: 'Assignment(=)'},{name: 'Addition(+=)'}, {name: 'Subtraction(-=)'}, {name: 'Multiplication(*=)'},{name: 'Division(/=)'},{name: 'Modulus(%=)'}],
  },
  {
    name: 'Array',
    children: [{name: 'One-Dimentional'}, {name: 'Multi-Dimentional'}],
  },

  {
    name: 'String',
    children: [{name: 'Split-String'}, {name: 'Trim-String'}],
  },
  {
    name: 'BitWise Operators',
    children: [{name: 'AND'}, {name: 'OR'},{name: 'XOR'}, {name: 'Left-Shift'},{name: 'Right-Shift'}],
  },
  {
    name: 'Logical Operators',
    children: [{name: 'AND(&&)'}, {name: 'OR(||)'},{name: 'NOT(!)'}],
  },
  {
    name: 'Relational Operators',
    children: [{name: 'Equal(==)'}, {name: 'Geater(>)'},{name:'Greater-Equal(>=)'},{name: 'Less(<)'},{name:'Less-Equal(<=)'},{name:'Not-Equal(!=)'}],
  },
  {
    name: 'Loops',
    children: [
      {
        name: 'For'
      }
    ],
  },
  {
    name: 'Conditional',
    children: [
      {
        name: 'If'
      },
      {
        name: 'If-Else'
      },
      {
        name: 'Nested-If-Else'
      },
      {
        name: 'Switch'
      },
    ],
  },
  {
    name: 'OOPS',
    children: [
      {
        name: 'Abstraction'
      },
      {
        name: 'Encapsulation'
      },
      {
        name: 'Inheritance'
      },
      {
        name: 'Interface'
      },
      {
        name: 'Polymorphism'
      },
    ],
  },

  {
    name: 'File Handling',
    children: [
      {
        name: 'Read-File'
      },
      {
        name: 'Write-File'
      }
    ],
  },
  {
    name: 'DataBase CURD',
    children: [
      {
        name: 'DB-Creation'
      },
      {
        name: 'Create-Table'
      },
      {
        name: 'Insert'
      },
      {
        name: 'Update'
      },
      {
        name: 'Select'
      },
      {
        name: 'Delete'
      },
    ],
  },

  {
    name: 'Thread',
  },
  
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {

  constructor(private router: Router) { 
    this.dataSource.data = TREE_DATA;
  }
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  
  onPress(name: String){
    
    this.router.navigate(["/graph",name]).then(() => {
      window.location.reload() });
   } 
    
 
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

  

