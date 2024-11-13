import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { getBgColor, option } from "./constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ThreeDotIcon from "../../atoms/Icons/ThreeDotIcon";
import Modal from "../../molecules/Modal/Modal.molecul";
import useHTTP from "../../../utils/hooks/useHTTP";

function ChapterCard({
  module_id,
  name,
  description,
  video,
  onClick,
  courseId,
  score = null,
  isReporting = false,
}) {
  const { deleteRequest } = useHTTP();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const handleDelete = async () => {
    toast.loading(`Deleting ${name} module...`);
    try {
      await deleteRequest(`/api/v1/admin/module?id=${module_id}`);
      toast.dismiss();
      toast.info(`Succesfully deleted ${name} module!`, { autoClose: 1500 });
    } catch (error) {
      console.log(error.message);
    }
    closeModal();
  };

  const handleClick = (value) => {
    if (value === "Delete") {
      setIsOpen(true);
      return;
    }

    if (value === "Quiz") {
      navigate(`/course/${courseId}/chapter/${module_id}/quiz`);
    }

    if (value === "Update") {
      navigate(`/course/${courseId}/new-chapter`, {
        state: {
          createNewChapter: false,
          data: {
            id_course: courseId,
            module_id,
            name,
            description,
            video,
          },
        },
      });
    }
  };
  return (
    <section className="flex items-center justify-between p-3 bg-light-blue-10 shadow-gray-600 shadow-md rounded-xl">
      <section
        onClick={onClick}
        className={onClick ? "cursor-pointer" : "cursor-default"}
      >
        <h2>{name}</h2>
      </section>

      <section className="relative flex items-center">
        {isReporting ? (
          <p
            className={`font-bold  mr-10 uppercase ${
              score ? "text-success-30" : "text-danger-30"
            }`}
          >
            {score ?? "no score"}
          </p>
        ) : (
          <>
            <Menu>
              <Menu.Button>
                <ThreeDotIcon width={20} height={20} />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 flex flex-col w-24 gap-1 p-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {option.map((value) => (
                    <Menu.Item key={value} as={Fragment}>
                      {({ active }) => (
                        <button
                          type="button"
                          className={`text-center cursor-pointer rounded-md ${
                            active && `text-white ${getBgColor(value)}`
                          }`}
                          onClick={() => handleClick(value)}
                        >
                          {value}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            <Modal
              isOpen={isOpen}
              header="Delete Confirmation"
              primaryButtonName="Delete"
              handleSecondary={closeModal}
              handlePrimary={handleDelete}
              btnPrimaryClassName="bg-danger-70 hover:bg-danger-90"
            >
              <section className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure want to delete chapter{" "}
                  <span className="font-semibold">{name}</span>?
                </p>
              </section>
            </Modal>
          </>
        )}
      </section>
    </section>
  );
}

export default ChapterCard;
