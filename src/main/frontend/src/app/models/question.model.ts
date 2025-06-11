import {AnswerModel} from "./answer.model";

export interface QuestionModel {
    id: number;
    question: string;
    questionTitle: string;
    questionImage: string;
    type: string;
    answers: AnswerModel[];
    selectedAnswer?: AnswerModel;
}
