export interface MonthlyAllocation {
  month: string;
  overhead: string;
  selling: string;
  gAndA: string;
  rAndD: string;
  total: string;
  overheadPercent: string;
  sellingPercent: string;
  gAndAPercent: string;
  rAndDPercent: string;
}

export interface AllocationTotal {
  overhead: string;
  selling: string;
  gAndA: string;
  rAndD: string;
  total: string;
  overheadPercent: string;
  sellingPercent: string;
  gAndAPercent: string;
  rAndDPercent: string;
}

export interface HeaderItem {
  text: string;
  colSpan?: number;
  rowSpan?: number;
  className: string;
  hasArrow?: boolean;
}

export interface DepreciationAllocationData {
  monthlyAllocations: MonthlyAllocation[];
  totalRow: AllocationTotal;
  headers: {
    mainHeader: HeaderItem[];
    subHeader: HeaderItem[];
  };
} 