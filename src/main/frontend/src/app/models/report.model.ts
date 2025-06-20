export interface ReportModel {
  id?: number;
  quizId: number;
  userId: string;
  userIp: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  score: number;
}
