import { IContact } from "../types/response/PrivateResponse";
import { Xmark } from "./IconUtility";

export interface IModal {
  modal: boolean;
  data: IContact | null;
  loading?: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteContactModal = ({
  modal,
  onClose,
  loading,
  data,
  onDelete,
}: IModal) => {
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

            <div>
              Are you sure you want to delete{" "}
              <strong>
                {data?.firstName} {data?.lastName}
              </strong>
              's contact?
            </div>

            <div className="flex justify-center">
              <div className="text-center md:text-left">
                <button
                  onClick={onClose}
                  className="mt-4 mr-3 bg-red-600 hover:bg-red-500 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                  type="submit"
                >
                  Close
                </button>
                <button
                  onClick={onDelete}
                  className="mt-4 bg-[#7717D7] hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                  type="submit"
                >
                  {loading === true ? "Submitting" : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteContactModal;
