import { Xmark } from "./IconUtility";

export interface IModal {
  modal: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const LogoutModal = ({ modal, onClose = () => {}, onDelete }: IModal) => {
  return (
    <div
      className="fixed inset-0 z-40"
      style={{ display: modal ? "block" : "none" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <div className="relative animodal-inner">
          <div className="rounded-lg bg-white border w-[300px] lg:w-[500px] border-stone-500 overflow-hidden px-5 py-5">
            <div
              onClick={onClose}
              className="text-black flex justify-end cursor-pointer"
            >
              <Xmark />
            </div>

            <div className="text-center">Are you sure you want to Logout</div>

            <div className="flex justify-center">
              <div className="text-center md:text-left">
                <button
                  onClick={onClose}
                  className="mt-4 mr-4 bg-[#7717D7] hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                  type="submit"
                >
                  No
                </button>
                <button
                  onClick={onDelete}
                  className="mt-4 mr-3 bg-red-600 hover:bg-red-500 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                  type="submit"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
