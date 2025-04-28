export interface AssetItem {
  category: string;
  usefulLife2023: string;
  residualRate2023: string;
  depreciationRate2023: string;
  usefulLife2022: string;
  residualRate2022: string;
  depreciationRate2022: string;
}

export interface HeaderItem {
  text: string;
  colSpan?: number;
  className: string;
}

export interface DepreciationPolicyData {
  assets: AssetItem[];
  headers: {
    mainHeader: HeaderItem[];
    methodHeader: HeaderItem[];
    subHeader: HeaderItem[];
  };
} 