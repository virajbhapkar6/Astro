import { createSignal } from "solid-js"
import ImpairmentConclusion from "./ImpairmentConclusion"
import ImpairmentTest from "./ImpairmentTest"
import JudgmentTable from "./JudgmentTable"
import ProvisionTable from "./ProvisionTable"

const ImpairmentDashboard = () => {
  const [activeTab, setActiveTab] = createSignal("preparation")

  return (
    <div class="container mx-auto p-4 max-w-6xl">
      <ImpairmentConclusion />
      <div class="mt-6">
        <ImpairmentTest />
      </div>
      <div class="mt-6">
        <JudgmentTable />
      </div>
      <div class="mt-6">
        <ProvisionTable />
      </div>
    </div>
  )
}

export default ImpairmentDashboard
