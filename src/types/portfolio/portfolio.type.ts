interface File {
  id: number;
  originalFileName: string;
  viewUrl: string;
  downloadUrl: string;
}

export interface PortfolioResponse {
  id: 0;
  title: string;
  author: string;
  category: string;
  createdAt: string;
  likes: number;
  files: File[];
  public: boolean;
}

export interface PortfolioListResponse {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  likes: number;
}
