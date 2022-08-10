import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  data: [][] | undefined;
  ngOnInit(): void {
   
  }
  getData(){
   
  }
  onFileChange(event:any){
    const target: DataTransfer=event.target;
    const reader:FileReader=new FileReader();
    reader.onload=(e: any)=>{
      const str:String = e.target.result;
      const wb: XLSX.WorkBook=XLSX.read(str,{type:'binary'})
      const wsName:string=wb.SheetNames[0];
      const ws:XLSX.WorkSheet=wb.Sheets[wsName];
      console.log(ws);
      this.data=(XLSX.utils.sheet_to_json(ws,{header:1}))
     
      for (let i = 0; i <=this.data.length; i++) {
        console.log(this.data[i]);
      }
      
    };
    reader.readAsBinaryString(target.files[0]);
    
  }
  
}
