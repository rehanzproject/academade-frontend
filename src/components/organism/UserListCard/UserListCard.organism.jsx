import React from "react";
import { getRandomBorderColor } from "../../../utils/helper/helperMethod";
import AnonymousIcon from "../../atoms/Icons/AnonymousIcon.atom";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import useHTTP from "../../../utils/hooks/useHTTP";

function UserListCard({ id, course_id, name, modules, member_count }) {
  const randomBorderColor = getRandomBorderColor();
  const { getRequest } = useHTTP();
  const { data, isLoading } = useSWR(
    `/api/v1/admin/who/enrolled/course?name=${name}&course_id=${course_id}`,
    getRequest
  );
  const exportToExcel = async (name) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("User Data");
console.log(name);
    // Add course name at the top
    worksheet.mergeCells("A1:E1"); // Adjusted to merge cells A1 to E1
    worksheet.getCell("A1").value = name
    // worksheet.getCell("A1").font = { size: 16, bold: true };

    // Add some padding row for clarity
    worksheet.addRow([]);
    worksheet.addRow([]);

    // Add column headers
    worksheet.columns = [
      { header: "Nama", key: "name", width: 20 },
      { header: "NIM", key: "nim", width: 15 },
      { header: "Prodi", key: "prodi", width: 30 },
      { header: "Score", key: "score", width: 15 },
      { header: "Email", key: "email", width: 30 },
    ];

    // Add headers explicitly
    worksheet.getRow(5).values = ["Nama", "NIM", "Prodi", "Score", "Email"];
    worksheet.getRow(5).font = { bold: true };

    // Add row data
    if (data && data.data) {
      data.data.forEach((item) => {
        worksheet.addRow({
          name: item.user.name,
          nim: item.user.nim,
          prodi: item.user.prodi,
          score: item.score,
          email: item.user.email,
        });
      });
    }

    // Generate buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Save the buffer
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, `${name}_enrolled_users.xlsx`);
  };

  return (
    <>
      <div
        className={`p-4 my-4 rounded-xl shadow-lg border-l-4 ${randomBorderColor}`}
      >
        <div className="grid grid-cols-3">
          <div>
            <Link
              key={id}
              to={`/reporting/${name}`}
              state={{ course_modules: modules, course_id: course_id }}
            >
              <h1 className="text-xl font-bold">{name}</h1>
            </Link>
          </div>
          <div className="flex items-center pt-5 pl-2">
            <AnonymousIcon />
            <p className="text-2xl font-bold pt-1">{member_count ?? 0}</p>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="px-2 py-1 rounded-md bg-primary-50 text-white flex items-center"
              onClick={() => exportToExcel(name)}
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Export
            </button>
          </div>
        </div>
        <div className="flex py-4 -mt-4 gap-5 text-gray-500 text-sm">
          <p>{modules?.length} Material</p>
          <p>{modules?.length} Content</p>
        </div>
      </div>
    </>
  );
}

export default UserListCard;
