import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Modal({
  isOpen,
  header,
  children,
  primaryButtonName,
  handlePrimary,
  handleSecondary,
  btnPrimaryClassName,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={handleSecondary}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-dark-50 opacity-80" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-gray-900"
                >
                  {header}
                </Dialog.Title>

                {children}

                <section className="flex justify-end gap-3 mt-5">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-lg border border-transparent bg-dark-10 px-4 py-2 text-sm font-medium text-white hover:bg-dark-30 duration-500"
                    onClick={handleSecondary}
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className={`inline-flex justify-center rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-white duration-500 ${btnPrimaryClassName}`}
                    onClick={handlePrimary}
                  >
                    {primaryButtonName}
                  </button>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
