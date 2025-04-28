export interface HeaderItem {
  text: string;
  colSpan?: number;
  className: string;
}

export interface AnalyticsData {
  // Asset analytics item properties
  category?: string;
  closingBalance2023: string;
  actualDepreciation2023: string;
  percentDepreciation2023: string;
  closingBalance2022: string;
  actualDepreciation2022: string;
  percentDepreciation2022: string;
  flux: string;
  notes?: boolean;
}

export interface AnalyticsTableData {
  assets: AnalyticsData[];
  total: AnalyticsData;
  headers: {
    mainHeader: HeaderItem[];
    subHeader: HeaderItem[];
  };
} 