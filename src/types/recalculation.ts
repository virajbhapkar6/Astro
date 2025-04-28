export interface RecalculationItem {
  category: string;
  closingBalance: string;
  expectedDepreciation: string;
  actualDepreciation: string;
  difference: string;
  result: string;
  expectedAccumulated: string;
  actualAccumulated: string;
  differenceAccumulated: string;
  resultAccumulated: string;
  notes: boolean;
}

export interface RecalculationTotal {
  closingBalance: string;
  expectedDepreciation: string;
  actualDepreciation: string;
  difference: string;
  result: string;
  expectedAccumulated: string;
  actualAccumulated: string;
  differenceAccumulated: string;
  resultAccumulated: string;
}

export interface HeaderItem {
  text: string;
  colSpan?: number;
  className: string;
}

export interface RecalculationData {
  items: RecalculationItem[];
  total: RecalculationTotal;
  headers: {
    mainHeader: HeaderItem[];
    subHeader: HeaderItem[];
  };
} 