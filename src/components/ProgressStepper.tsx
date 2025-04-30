import { createSignal, For } from 'solid-js';

interface Step {
  text: string;
  status: 'pending' | 'success';
  icon?: string;
}

interface ProgressStepperProps {
  steps: Step[];
}

const ProgressStepper = (props: ProgressStepperProps) => {
  return (
    <div class="w-[1258px] bg-white p-4 rounded-lg shadow-sm mb-4">
      <div class="relative flex items-center w-full gap-x-2">
        {/* Progress Lines */}
        <div class="absolute top-3 left-0 w-full flex gap-x-2">
          <For each={props.steps}>
            {(step, index) => (
              <div class="flex-1 flex items-center gap-x-2">
                <div class="flex-1">
                  {index() <= props.steps.length - 1 && (
                    <div class="h-[7px] w-full">
                      <div
                        class={`h-full ${
                          step.status === 'success'
                            ? 'bg-purple-600'
                            : 'bg-gray-300'
                        }`}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </For>
        </div>

        {/* Steps Text and Icons */}
        <For each={props.steps}>
          {(step, index) => (
            <div class="flex-1">
              <div class="flex flex-col">
                {/* Empty div for spacing where circles used to be */}
                <div class="h-6" />

                {/* Step text with circle and icon */}
                <div class="mt-2 flex items-center gap-1 pl-1">
                  <span class="w-[89px] h-[18px] text-left font-inter font-semibold text-[12px] leading-[18px] tracking-[0%]">{step.text}</span>
                  {step.status === 'success' && (
                    <div class="flex items-center justify-center w-4 h-4 rounded-full bg-purple-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-3 h-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default ProgressStepper; 