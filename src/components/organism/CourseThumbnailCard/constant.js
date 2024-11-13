import {
  makeRupiahValue,
  transformDate,
} from "../../../utils/helper/helperMethod";

export const getDetailCardInfoContent = (data) => {
  return [
    {
      title: "Responsible",
      content: data?.user?.name || data?.create_by?.username,
    },
    {
      title: "Last Update",
      content: transformDate(new Date(data?.update_at || "2023-06-10")),
    },
    {
      title: "Members",
      content: data?.member_count ?? 0,
    },
    {
      title: "Price",
      content: makeRupiahValue(data?.price || 100000),
    },
    {
      title: "Coupon",
      content: data?.coupon ?? 'Belum ada kupon',
    },
  ];
};
