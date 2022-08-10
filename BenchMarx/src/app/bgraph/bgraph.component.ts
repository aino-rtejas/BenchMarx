import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-bgraph',
  templateUrl: './bgraph.component.html',
  styleUrls: ['./bgraph.component.scss']
})
export class BGraphComponent implements OnInit {
  title:any | undefined;
  name:String="";
  chart1: any;
  chart2: any;
  time : (number)[]=[];
  memorey : (number)[]=[];
  constructor(private Route:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.chart1 = document.getElementById('myChart');
    this.chart2 = document.getElementById('myChart2');
    this.title=this.Route.snapshot.params['id'];
        switch(this.title) { 
          case "Addition": { 
            this.time=[6558466, 7405033, 333342];
            this.memorey=[287016, 12128256, 164000];
             break; 
          } 
          case "Subtraction": { 
            this.time=[3018851, 3172191, 345524];
            this.memorey=[287048, 12259328, 164000];
             break; 
          }
          case "Multiplication": { 
            this.time=[3411082, 4209065, 299450];
            this.memorey=[287072, 12214272, 164000];
            break; 
          } 
          case "Division": { 
            this.time=[3548517, 4217876, 399300];
            this.memorey=[287016, 12230656, 164000];
            break; 
          }
          case "Modulus": { 
            this.time=[3380595, 4169374, 499383];
            this.memorey=[287016, 12099584, 164000 ];
            break; 
          }
          case 'Assignment(=)': { 
            this.time=[3014001, 3170973, 347142];
            this.memorey=[287536, 12214272, 164000];
             break; 
          } 
          case 'Addition(+=)': { 
            this.time=[3569661, 3439795, 589536];
            this.memorey=[287416, 12132352, 162000];
             break; 
          } 
          case 'Subtraction(-=)': { 
            this.time=[3271262, 3284158, 716670];
            this.memorey=[287432, 12189696, 164000];
             break; 
          }
          case 'Multiplication(*=)': { 
            this.time=[4020782, 4162388, 495186];
            this.memorey=[287440, 12296192, 162000];
            break; 
          } 
          case 'Modulus(%=)': { 
            this.time=[3175684, 3175735, 356609];
            this.memorey=[287408, 12120064,162000];
            break; 
          }
          case 'Division_"/="': { 
            this.time=[3753431, 4111780, 301534];
            this.memorey=[287416, 12288000, 165000 ];
            break; 
          }
          case "One-Dimentional": { 
            this.time=[3644560, 13211532, 424197];
            this.memorey=[286872, 30785536, 165000];
             break; 
          } 
          case "Multi-Dimentional": { 
            this.time=[3548517, 4217876, 399300];
            this.memorey=[287016, 12230656, 164000];
             break; 
          }
          case "For": { 
            this.time=[7529922, 10025544, 444496];
             this.memorey=[286760, 30597120, 162000];
            break; 
          }
          case "If": { 
            this.time=[3324452, 6656859, 693781];
            this.memorey=[286448, 30535680, 163000];
            break; 
          }     
          case "If-Else": { 
            this.time=[3215427, 6643118, 527213];
            this.memorey=[286712, 30593024, 162000];
            break; 
          }
          case "Nested-If-Else":{
            this.time=[3504435, 6367687, 306876];
             this.memorey=[286640, 30863360, 162000];
            break;
          }
          case "Switch":{
            this.time=[3078211, 6234290, 336081];
            this.memorey=[286568, 30617600, 161000];
            break;
          } 
          case "Read-File":{
            this.time=[25201141, 52849700, 639293];
            this.memorey=[437192, 11939840, 164000];
            break;
          }
          case "Write-File":{
            this.time=[4244683, 4485167, 410737];
            this.memorey=[287776, 11829248, 165000];
            break;
          }
          case "Abstraction":{
            this.time=[5122987, 8885877, 402140];
            this.memorey=[329424, 11882496, 162000];
            break;
          }  
          case "Encapsulation":{
            this.time=[5727579, 9999549, 327923];
            this.memorey=[287544, 11767808, 162000];
            break;
          }
          case "Inheritance":{
            this.time=[3649544, 8921310, 350484];
             this.memorey=[287696, 11771904, 162000];
            break;
          }  
          case "Interface":{
            this.time=[3336995, 5888943, 338151];
            this.memorey=[287072, 11886592, 164000];
            break;
          } 
          case "Polymorphism":{
            this.time=[3823711, 3967162, 567169];
            this.memorey=[287024, 30625792, 163000];
            break;
          }  
          case "Split-String":{
            this.time=[35581742, 47957507, 339666];
            this.memorey=[286608, 30769152, 166000];
            break;
          } 
          case "Trim-String":{
            this.time=[3563553, 9174304, 467274];
            this.memorey=[286480, 30720000, 164000];
            break;
          }
          case "Thread":{
            this.time=[3426803, 3687511, 620630];
            this.memorey=[4222760, 11931648, 3846000];
            break;
          } 
          
          case "AND":{
            this.time=[3328968, 4242650, 310103];
            this.memorey=[287256, 12300288, 164000];
            break;
          } 
          case "OR":{
            this.time=[3394052, 4165886, 335857];
            this.memorey=[287256, 12230656, 164000];
            break;
          }  
          case "XOR":{
            this.time=[3421398, 4171776, 333745];
            this.memorey=[287256, 12173312, 162000];
            break;
          } 
          case "Left-Shift":{
            this.time=[3458473, 4250300, 336299];
            this.memorey=[287264, 12242944, 164000];
            break;
          }
          case "Right-Shift":{
            this.time=[4018739, 4229340, 306911];
            this.memorey=[287264, 12300288, 163000];
            break;
          } 
          case "AND(&&)":{
            this.time=[3421398, 4171776, 333745];
            this.memorey=[287256, 12173312, 162000];
            break;
          } 
          case "OR(||)":{
            this.time=[3458473, 4250300, 336299];
            this.memorey=[287264, 12242944, 164000];
            break;
          }
          case "NOT(!)":{
            this.time=[4018739, 4229340, 306911];
            this.memorey=[287264, 12300288, 163000];
            break;
          } 
          
          case "Equal(==)":{
            this.time=[3823992, 4174678, 311225];
            this.memorey=[287520, 12152832, 164000];
            break;
          } 
          case "Geater(>)":{
            this.time=[3426221, 4164121, 535837];
            this.memorey=[287552, 12259328, 164000];
            break;
          }
          case "Greater-Equal(>=)":{
            this.time=[3344671, 4163093, 288976];
            this.memorey=[287608, 12238848, 164000];
            break;
          } 
          case "Less(<)":{
            this.time=[3689382, 4166359, 334813];
            this.memorey=[287520, 12124160, 162000];
            break;
          } 
          case "Less-Equal(<=)":{
            this.time=[3390999, 4243657, 359624];
            this.memorey=[287584, 12177408, 163000];
            break;
          }
          case "Not-Equal(!=)":{
            this.time=[3711027, 4258574, 441903];
            this.memorey=[287544, 12132352, 163000];
            break;
          } 
          case "DB-Creation":{
            this.time=[332226111, 45913317, 11394685];
            this.memorey=[5249432, 26116096, 224000];
            break;
          }
          case "Create-Table":{
            this.time=[291685685, 149470574, 17267826];
            this.memorey=[5150664, 24772608, 223000];
            break;
          }
          case "Insert":{
            this.time=[425578495, 20873133, 15790688];
            this.memorey=[5250136, 24940544, 211000];
            break;
          }
          case "Select":{
            this.time=[327286493, 4655607, 1148265];
            this.memorey=[5404312, 24813568, 211000];
            break;
          }
          case "Update":{
            this.time=[318455133, 18863771, 17486316];
            this.memorey=[5399328, 24834048, 215000];
            break;
          }
          case "Delete":{
            this.time=[318861569, 19832225, 16668098];
            this.memorey=[5399440, 24719360, 210000];
            break;
          }
          default: { 
             //statements; 
             break; 
          } 
       } 
    
       Chart.register(...registerables);
       this.loadChart();
      
  }
  
  
  loadChart(): void {
    
    new Chart(this.chart1, {
      
      type: 'bar',
      data: {
        labels: ['Java', 'Python', 'Go'],
        datasets: [{
          label: 'Time',
          data:this.time,
          //data: [777377, 3680467, 522810],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Time',font:{size: 15} }
          },
          x: { title: { display: true, text: 'Languages',font:{size: 15} }}
          
        },
        plugins: {
          title: {
              display: true,
              text: 'Average Time Graph'
          }
      }
      }
    })

    new Chart(this.chart2, {
      type: 'bar',
      data: {
        labels: ['Java', 'Python', 'Go'],
        datasets: [{
          label: 'Memorey',
          data: this.memorey,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Memory' ,font:{size: 15}}
          },
          x: { title: { display: true, text: 'Languages',font:{size: 15} }}
        },
        plugins: {
          title: {
              display: true,
              text: 'Memorey Usage Graph'
          }
      }
        

      }
    })
   
  }
}
