import StockPriceGraph from "./Charts";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
export default function Invest({ fundDetails, change, aumchange }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="text-white w-[95%] m-auto">
      <div className="py-[40px]">
        <h1 className="text-3xl text-bold">{fundDetails.fundName}</h1>
        <a href="#">{fundDetails.fundAddress}</a>
      </div>{" "}
      <div className="flex items-center">
        {" "}
        <h1 className="text-white text-2xl text-bold py-[20px]">Overview</h1>
        <button
          class="h-[38px] mx-[30px] bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-500 text-white font-bold px-4 py-2 rounded-lg"
          onClick={openModal}
        >
          Invest
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black border p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-200"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You're about invest funds in to this fund, your fund will
                      be secure in Canto Index Vaults and will be able to
                      withdraw anytime!
                    </p>
                  </div>
                  <div class="flex items-center mt-2">
                    <p class="py-2.5 px-3 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">
                      $NOTE
                    </p>
                    <input
                      type="text"
                      placeholder="100"
                      class="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Invest Now
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-25  p-4 rounded-lg ">
        <div className="p-[20px] ml-[20px] mb-[30px] flex flex-row justify-between">
          <div>
            <p className="text-gray-300 text-[24px]">Asset under management</p>
            <p>
              <span className="text-bold text-[20px] text-green-300">
                {fundDetails.aum}
              </span>
            </p>
          </div>
          <div>
            {change.startsWith("+") ? (
              <p className="text-bold text-[20px] text-green-300">
                ROI &nbsp; {change}
              </p>
            ) : (
              <p className="text-red-500 text-bold text-[20px]">
                {" "}
                ROI &nbsp; {change}
              </p>
            )}
            {aumchange.startsWith("+") ? (
              <p className="text-bold text-[20px] text-green-300">
                AUM {aumchange}
              </p>
            ) : (
              <p className="text-red-500 text-bold text-[20px]">
                {" "}
                AUM {aumchange}
              </p>
            )}
          </div>
        </div>
        <StockPriceGraph asset={"MSFT"} />
      </div>
    </div>
  );
}
