import { FiAlertCircle } from "solid-icons/fi"
import myimage from '../assets/Avtar1.jpg'

interface Indicator {
  description: string;
  evaluation: string;
  judgmentalBasis: string;
}

const JudgmentTable = () => {
  const externalIndicators: Indicator[] = [
    {
      description:
        "The market value of long-term assets drops significantly, which was significantly lower than the expected price in normal range",
      evaluation: "i",
      judgmentalBasis: "None noted",
    },
    {
      description:
        "There is a significant adverse change in the scope or mode of use of long-term assets or their material condition",
      evaluation: "i",
      judgmentalBasis: "None noted",
    },
    {
      description:
        "Major adverse changes in the technological, market, economic, or legal environment in which an entity operates may affect the value of long-term assets",
      evaluation: "N/A",
      judgmentalBasis: "",
    },
  ]

  const internalIndicators: Indicator[] = [
    {
      description:
        "The operating results are significantly lower than the budget, or significantly lower than the budget in the subsequent period",
      evaluation: "i",
      judgmentalBasis: "None noted",
    },
    {
      description:
        "Cost accumulation exceeding the initial expected amount for the purchase or construction of long-term assets",
      evaluation: "i",
      judgmentalBasis: "None noted",
    },
    {
      description:
        "Loss of current operation or cash flow, and loss of previous operation or cash flow, or forecasting indicating continuous loss",
      evaluation: "N/A",
      judgmentalBasis: "",
    },
    {
      description: "Assets",
      evaluation: "N/A",
      judgmentalBasis: "",
    },
    {
      description: "Long-term assets are obsolete or damaged",
      evaluation: "",
      judgmentalBasis: "",
    },
  ]

  const getEvaluationBadge = (evaluation: string) => {
    if (evaluation === "N/A") {
      return <div class="text-center font-inter font-extrabold text-[14px] leading-[150%] tracking-[0%] text-red-500">N/A</div>
    }
    return (
      <div class="flex justify-center">
        <FiAlertCircle class="h-5 w-5 text-red-500" />
      </div>
    )
  }

  return (
    <div class="bg-white rounded-lg shadow-md">
      <div class="p-4">
        <h2 class="font-inter font-bold text-[16px] leading-[150%] tracking-[0%] text-gray-800">Judgment of long-term asset impairment</h2>
        <h2 class="font-inter font-semibold text-[16px] leading-[150%] tracking-[0%] text-gray-700">Table 1</h2>
      </div>

      <div class="p-4">
        <table class="w-full border">
          <thead>
            <tr class="bg-gray-100 text-sm">
              <th class="p-2 text-center w-1/2 font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700 border-r">External Indicators</th>
              <th class="p-2 text-center w-1/6 font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700 border-r">Evaluation</th>
              <th class="p-2 text-center w-1/3 font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700">Judgmental basis</th>
            </tr>
          </thead>
          <tbody>
            {externalIndicators.map((indicator: Indicator) => (
              <tr class="border-t">
                <td class="p-2 font-inter font-normal text-[12px] leading-[150%] tracking-[0%] text-gray-700 border-r">{indicator.description}</td>
                <td class="p-2 font-inter font-normal text-[12px] leading-[150%] tracking-[0%] text-gray-700 border-r">{getEvaluationBadge(indicator.evaluation)}</td>
                <td class="p-2 font-inter font-normal text-[12px] leading-[150%] tracking-[0%] text-gray-700 text-center">{indicator.judgmentalBasis}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table class="w-full border mt-4">
          <thead>
            <tr class="bg-gray-100 text-sm">
              <th class="p-2 text-center w-1/2 font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700 border-r">Internal Indicators</th>
              <th class="p-2 text-center w-1/6 font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700 border-r">Evaluation</th>
              <th class="p-2 text-center w-1/3 font-inter font-semibold text-[14px] leading-[150%] tracking-[0%] text-gray-700">Judgmental basis</th>
            </tr>
          </thead>
          <tbody>
            {internalIndicators.map((indicator: Indicator) => (
              <tr class="border-t">
                <td class="p-2 font-inter font-normal text-[12px] leading-[150%] tracking-[0%] text-gray-700 border-r">{indicator.description}</td>
                <td class="p-2 font-inter font-normal text-[12px] leading-[150%] tracking-[0%] text-gray-700 border-r">{getEvaluationBadge(indicator.evaluation)}</td>
                <td class="p-2 font-inter font-normal text-[12px] leading-[150%] tracking-[0%] text-gray-700 text-center">{indicator.judgmentalBasis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JudgmentTable
