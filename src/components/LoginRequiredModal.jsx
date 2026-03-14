import { useNavigate } from "react-router-dom";

export default function LoginRequiredModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl text-center animate-scaleIn">
        <h3 className="text-xl font-bold mb-2">Login Required</h3>
        <p className="text-gray-600 mb-6">
          Please login to view full profile details.
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="flex-1 bg-indigo-600 text-white py-2 rounded-lg font-semibold"
          >
            Login
          </button>
          <button
            onClick={onClose}
            className="flex-1 border py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
