import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { IQuestions } from 'src/app/core/model/questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {


  constructor(private _QuestionsService: QuestionsService) { }

  QuestionsTable: IQuestions[] = [];

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this._QuestionsService.allQuestions().subscribe({
      next: (value) => {
        console.log(value)
        this.QuestionsTable = value
      },
    })
  }


}
