export interface PortfolioParam {
  title: string;
  author: string;
  category: string;
  isPublic: boolean;
  password: string;
  files: File[];
}

export interface UpdatePortfolioParam {
  title: string;
  author: string;
  category: string;
  isPublic: boolean;
}
