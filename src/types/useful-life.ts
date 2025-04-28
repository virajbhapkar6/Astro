export interface AssetLifeItem {
  asset: string;
  usefulLifeMonth: string;
  usefulLife: string;
  agreeWithBook: string;
}

export interface HeaderItem {
  text: string;
  colSpan?: number;
  className: string;
}

export interface UsefulLifeData {
  assets: AssetLifeItem[];
  headers: {
    mainHeader: HeaderItem[];
    subHeader: HeaderItem[];
  };
} 