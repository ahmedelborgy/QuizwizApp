import { Component } from '@angular/core';
// import { ResultsService } from '../services/results.service';
import { ToastrService } from 'ngx-toastr';
import { IResultsQuiz } from 'src/app/core/model/iresults';
import { ResultsService } from '../../instructor/services/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  tableData: IResultsQuiz[] = [];


  constructor(private _ResultsService: ResultsService, private _ToastrService: ToastrService) { }

  ngOnInit(): void {
    this.allResults();
  }



  allResults() {

    this._ResultsService.getResults().subscribe({
      next: (res) => {
        console.log(res);
        this.tableData = res
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {
      }
    })
  }




}
