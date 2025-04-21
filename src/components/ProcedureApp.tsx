import { createSignal } from "solid-js";

//API call to fetch notes
async function fetchNotes() {
  const response = await fetch("/api/notes");
  const data = await response.json();
  return data;
}

type Author = {
  name: string;
  avatar: string;
  color: string;
};

type Note = {
  id: string;
  author: Author;
  daysAgo: number;
  content: string;
};

export default function ProcedureApp() {
  const [showModal, setShowModal] = createSignal(false);
  const [notes, setNotes] = createSignal<Note[]>([]);
  const [loading, setLoading] = createSignal(true);
  const [error, setError] = createSignal("");

  const fetchAndSetNotes = async () => {
    try {
      setLoading(true);
      const data = await fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Failed to load notes");
    } finally {
      setLoading(false);
    }
  };

  const handleShowModal = () => {
    fetchAndSetNotes();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Trigger Button */}
      <div class="fixed left-70 top-70">
        <button 
          onClick={handleShowModal}
          class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          View Procedure
        </button>
      </div>

      {/* Modal */}
      {showModal() && (
        <div class="flex items-center justify-center">
          <div class="bg-white rounded-xl border border-gray-200 shadow-xl max-w-5xl relative p-3 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            {/* Procedure Header */}
            <div class="flex items-center space-x-180">
            <h1 class="text-2xl font-semibold text-gray-800">Procedure #2</h1>
            <img src="/avatars/icons.png"
                  alt="icon"
                  class="w-25 h-6"/>
            </div>
            <div class="flex items-center space-x-139 py-1">
            <h2 class="text-lg text-gray-500 mt-1 mb-3 font-medium">
              Material Additions & Dispositions Verification
            </h2>
            <span class="bg-blue-400 text-sm px-3 py-1 rounded-full">Basic</span>
            </div>        
              
            {/* Description and Tags */}
            <div class="mb-4 border-b border-b-gray-400 pb-4">
              <div class="space-y-2">
                <p class="text-gray-700">
                  <span class="font-medium">Description:</span> Determine whether fixed assets are properly recorded.
                </p>
                <div class="flex items-center space-x-2">
                <p class="text-gray-700 font-medium">Assertions to be met:</p>               
                  <span class="w-9 h-7 bg-[#10B981] font-bold text-green-900 text-sm px-3 py-1 rounded-full">C</span>
                  <span class="bg-purple-400 font-bold text-purple-800 text-sm px-3 py-1 rounded-full">R/O</span>
                </div>
              </div>
            </div>

            {/* Procedure Step */}
            <div class="border-b border-b-gray-400 mb-4 pb-4">
              <h3 class="text-gray-800 font-semibold mb-3">Perform the following procedure:</h3>
              <div class="flex items-start space-x-4">
                <div class="w-20 h-5 bg-gray-800 text-white text-sm flex items-center justify-center mt-1 rounded-full">
                  1
                </div>
                <p class="text-gray-700">
                  Consider whether all significant additions, including self-constructed assets, and dispositions
                  (sales, retirements, abandonments, or damages) are appropriately reflected in the accounting records
                  and whether material additions are the property of the company based on your understanding of the
                  company, inquiries of management, and work performed in other areas (such as the review of minutes
                  of board of directors and audit committee meetings, review of significant new lease or other
                  contracts, physical observation, and tests of additions and dispositions).
                </p>
              </div>
            </div>

            {/* Notes Section */}
              <div class="flex items-center mb-4 space-x-1">
                <h3 class="text-gray-800 font-semibold text-lg">Notes</h3>
                <img src="/avatars/info_icon.png"
                  alt="icon"
                  class="w-6 h-6"/>
              </div>

              {loading() ? (
                <p class="text-center text-gray-500 py-4">Loading notes...</p>
              ) : error() ? (
                <p class="text-center text-red-500 py-4">{error()}</p>
              ) : (
                <div class="grid gap-4 md:grid-cols-2">
                  {notes().map((note) => (
                    <div class="shadow border border-gray-300 rounded-lg p-4">
                      <div class="flex items-center space-x-4">
                        <img
                          src={note.author.avatar}
                          alt={note.author.name}
                          class="w-10 h-10 rounded-full border"
                        />
                        <div>
                        <div class="flex items-center space-x-60">
                          <p class="font-semibold text-gray-800">{note.author.name}</p>
                          <img src="/avatars/more_icon.png"
                              alt="icon"
                              class="w-14 h-6"/>
                          </div>
                          <p class="text-sm text-gray-500">{note.daysAgo} days ago</p>
                        </div>
                      </div>
                      <p class="mt-3 text-gray-700">{note.content}</p>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
}
