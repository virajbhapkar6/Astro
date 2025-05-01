import { createSignal } from "solid-js"
import { MoreVertical } from "lucide-solid"

export default function ImpairmentConclusion() {
  const [activeTab, setActiveTab] = createSignal("preparation")

  return (
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
      <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 class="text-lg font-medium text-gray-800">Impairment Conclusion</h2>
        <button class="px-3 py-1 bg-purple-600 text-white text-sm rounded-md flex items-center gap-1">
          View Team
          <div class="flex -space-x-2">
            <div class="w-5 h-5 rounded-full bg-red-500 border-2 border-white"></div>
            <div class="w-5 h-5 rounded-full bg-yellow-500 border-2 border-white"></div>
            <div class="w-5 h-5 rounded-full bg-green-500 border-2 border-white"></div>
          </div>
        </button>
      </div>

      <div class="flex justify-between items-center px-4 py-2 border-b border-gray-200">
        <div class="text-sm font-medium text-gray-700">Conclusions</div>
        <div class="flex items-center gap-4">
          <div class="text-sm font-medium text-gray-700">Preparation</div>
          <div class="text-sm font-medium text-gray-700">Review</div>
          <button class="text-gray-500">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      <div class="p-4 space-y-3">
        <div class="flex justify-between items-start">
          <p class="text-sm text-gray-700">The work has been performed in accordance with the audit program.</p>
          <div class="flex gap-1">
            <span class="px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-xs">WIP</span>
            <span class="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">REV</span>
            <button class="text-gray-500">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        <div class="flex justify-between items-start">
          <p class="text-sm text-gray-700">
            The work performed and the results obtained have been adequately documented.
          </p>
          <div class="flex gap-1">
            <span class="px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-xs">WIP</span>
            <button class="text-gray-500">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        <div class="flex justify-between items-start">
          <p class="text-sm text-gray-700">
            All necessary information has been collected for this presentation and disclosure in the financial
            statements.
          </p>
          <div class="flex gap-1">
            <span class="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">REV</span>
            <button class="text-gray-500">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        <div class="flex justify-between items-start">
          <p class="text-sm text-gray-700">
            Based on audit procedures performed, the above approaches have been met and without any material exceptions
            noted.
          </p>
          <div class="flex gap-1">
            <span class="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">REV</span>
            <button class="text-gray-500">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
