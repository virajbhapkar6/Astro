interface TableRow {
  category: string;
  codeOfFixedAssets: string;
  nameOfFixedAssets: string;
  capitalizationStartDate: string;
  bookValue: string;
  recoverableAmount: string;
  valueInUse: string;
  netFairValue: string;
  impairmentToBe: string;
  provisionFor: string;
  additionalImpairment: string;
  basisFor: string;
}

const ProvisionTable = () => {
    // Empty data for the table rows
    const emptyRows: TableRow[] = Array(2).fill({
      category: "-",
      codeOfFixedAssets: "-",
      nameOfFixedAssets: "-",
      capitalizationStartDate: "-",
      bookValue: "-",
      recoverableAmount: "-",
      valueInUse: "-",
      netFairValue: "-",
      impairmentToBe: "-",
      provisionFor: "-",
      additionalImpairment: "-",
      basisFor: "-",
    })
  
    return (
      <div>
        <div class="w-[1218px] h-[48px] p-2">
          <h2 class="font-inter font-bold text-[16px] leading-[150%] tracking-[0%] text-gray-800">Provision for impairment calculation</h2>
          <h3 class="font-inter font-semibold text-[16px] leading-[150%] tracking-[0%] text-gray-700">Table 2</h3>
        </div>
  
        <div class="p-4 overflow-x-auto">
          <table class="w-[1218px] h-[150px] border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 w-full text-sm rounded-lg">
            <thead>
              <tr class="w-[64.125px] h-[54px] font-inter font-semibold text-[12px] leading-[150%] tracking-[0%] text-center text-gray-800 bg-purple-80">
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center rounded-tl-lg">Category of fixed assets</th>
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">Code of fixed assets</th>
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">Name of fixed assets</th>
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">Capitalization start date</th>
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">Book value</th>
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">Recoverable amount</th>
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">Value in use</th>
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">Net fair value</th>
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">Impairment to be provided for in the end of the period</th>
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">Provision for impairment recognized in the end of the period</th>
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">Additional impairment to be provided for the current period</th>
                <th class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center rounded-tr-lg">Basis for impairment (reference file)</th>
              </tr>
            </thead>
            <tbody>
              {emptyRows.map((row: TableRow, index: number) => (
                <tr class="bg-white border-t border-gray-400 w-[84.125px] h-[30px] p-[10px] gap-[10px] border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400">
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.category}</td>
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.codeOfFixedAssets}</td>
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.nameOfFixedAssets}</td>
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.capitalizationStartDate}</td>
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.bookValue}</td>
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.recoverableAmount}</td>
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.valueInUse}</td>
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.netFairValue}</td>
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.impairmentToBe}</td>
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.provisionFor}</td>
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.additionalImpairment}</td>
                  <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">{row.basisFor}</td>
                </tr>
              ))}
              <tr class="bg-white border-t border-gray-400 w-[84.125px] h-[30px] p-[10px] gap-[10px] border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400">
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center rounded-bl-lg">-</td>
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">-</td>
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">-</td>
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">-</td>
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">-</td>
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">-</td>
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">-</td>
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">-</td>
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">-</td>
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">-</td>
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center">-</td>
                <td class="p-2 border-r border-gray-400   border-t border-gray-400 border-b border-gray-400 border-l border-gray400 text-center rounded-br-lg">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default ProvisionTable
  