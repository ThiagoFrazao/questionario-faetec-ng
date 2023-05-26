interface QuizOption {
  id: number;
  response: number;
  description?: string;
}

export interface QuizQuestion {
  id: number;
  question?: string;
  image?: string;
  responses?: QuizOption[];
}
export interface UserResponse {
  perguntaId: number;
  respostaId: number;
}

export interface QuizError {
  message: string;
}

export interface QuestionData {
  name: string;
  value: number;
}

export interface GraphData {
  nome: string;
  dadosPerguntas: QuestionData[];
}
