interface Category {
  id: number;
  name: string;
  isSelect: boolean;
}

export interface CategoryProps {
  data: Category[];
}
