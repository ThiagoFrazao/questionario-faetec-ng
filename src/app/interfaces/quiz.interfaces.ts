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
  pergunta: QuizQuestion;
  resposta: QuizOption;
}
