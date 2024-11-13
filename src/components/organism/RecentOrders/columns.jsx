import {
  makeRupiahValue,
  transformDate,
  transformDateDashboard,
} from "../../../utils/helper/helperMethod";
import Badge from "../../atoms/Badge";

export const LIST_COLUMN_ORDERS = [
  {
    Header: "ID",
    accessor: "id",
    Cell: ({ row: { original } }) => (
      <section>#{original?.id?.slice(0, 5)}</section>
    ),
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ row: { original } }) => <section>{original?.date}</section>,
  },
  {
    Header: "Course",
    accessor: "name",
    Cell: ({ row: { original } }) => (
      <section>{original?.course?.name}</section>
    ),
  },
  {
    Header: "Payment",
    accessor: "paid",
    Cell: ({ row: { original } }) => {
      const paidVal = original.cancel
        ? "cancel"
        : original.verify
        ? "paid"
        : "unpaid";
      return <Badge variant={paidVal} text={paidVal} />;
    },
  },
  {
    Header: "Total",
    accessor: "total",
    Cell: ({ row: { original } }) => {
      const price = makeRupiahValue(original?.course?.price);

      return (
        <section className="flex justify-center gap-3 font-bold">
          {price}
        </section>
      );
    },
  },
];
