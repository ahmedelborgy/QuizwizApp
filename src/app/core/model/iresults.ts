export interface IResultsQuiz {
  quiz: {
    _id: string;
    code: string;
    title: string;
    description: string;
    status: string;
    instructor: string;
    group: string;
    questions_number: number;
    schedule: Date;
    duration: number;
    score_per_question: number;
    type: string;
    difficulty: string;
    updatedAt: Date;
    createdAt: Date;
    __v: number;
    closed_at: Date;
  }
  participants: any[]; // Assuming participants can be of any type
}
