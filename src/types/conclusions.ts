export interface Conclusion {
  text: string;
  preparation: string;
  review: string | string[];
}

export interface HeaderItem {
  text: string;
  className: string;
  hasIcon?: boolean;
}

export interface ConclusionsTableData {
  conclusions: Conclusion[];
  headers: HeaderItem[];
} 