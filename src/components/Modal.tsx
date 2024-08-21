import { SuccessMark } from "./IconUtility";

export interface IModal {
  modal: boolean;
  message: string;
  onClose: () => void;
}

const Modal = ({ modal, onClose, message }: IModal) => {
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
              x
            </div>

            <div>
              <div className="flex justify-center">
                <SuccessMark />
              </div>

              <div className="mt-6 text-center text-sm">{message}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
