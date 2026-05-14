import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  @Input() columnHeaders: string[] = [];
  @Input() data: any[] = [];
  @Output() rowClick = new EventEmitter<any>();
  dataKeys: string[] = [];

  ngOnChanges() {
    if (this.data.length > 0) {
      this.dataKeys = Object.keys(this.data[0]);
    }
  }

  onRowClick(user: any) {
    this.rowClick.emit(user);

    let trs = document.querySelectorAll('tr')[user.userId]
    let ps = trs.querySelectorAll('p')

    for (let i = 0; i < this.data.length+1; i++){
      let untrs = document.querySelectorAll('tr')[i]
      let unps = untrs.querySelectorAll('p')
      untrs.classList.remove('black')
      for (let g = 0; g < unps.length; g++){
        if (g % 2 ===0){
          unps[g].classList.remove('sudatuda')
        }
        else{
          unps[g].classList.remove('tudasuda')
        }
      }
    }

    trs.classList.add('black')
    for (let s = 0; s < ps.length; s++){
      if (s % 2 === 0 && s != 0){
        ps[s].classList.add('sudatuda')
      }
      else{
        if (s != 0){
          ps[s].classList.add('tudasuda')
        }
        
      }
    }
  }
}