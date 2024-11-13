import React, { lazy, Suspense } from "react";
import useSWR from "swr";
import {
  transformDate,
  transformDateDashboard,
} from "../../utils/helper/helperMethod";
import FavoriteCourse from "../../components/organism/FavoriteCourse/FavoriteCourse.organism";
import HeaderDashboard from "../../components/organism/HeaderDashboard/HeaderDashboard.organism";
import OrdersTable from '../../components/organism/RecentOrders/OrdersTable.organism';
import useHTTP from "../../utils/hooks/useHTTP";

function DashboardView() {
  const { getRequest } = useHTTP();
  const { data: dataStats, isLoading: dataStatsLoading } = useSWR(
    "/api/v1/admin/stats",
    getRequest
  );
  const { data: dataHistory, isLoading: dataHistoryLoading } = useSWR(
    "/api/v1/admin/checkout/history/all?size=8&page=1",
    getRequest
  );
  const { data: dataCourses, isLoading: dataCoursesLoading } = useSWR(
    "/api/v1/admin/course?size=20&page=1",
    getRequest
  );
  const orderData = dataHistory?.data?.map((value) => {
    return {
      ...value,
      paid: value?.cancel ? value?.cancel : value?.paid,
      date: transformDateDashboard(value?.createdAt),
    };
  }) || [];

  return (
    <section className="flex flex-col gap-6 me-8">
      <HeaderDashboard dataStats={dataStats} />

      <section className="flex gap-10 ">
        <OrdersTable newData={orderData} />

        <FavoriteCourse dataCourses={dataCourses} />
      </section>
    </section>
  );
}

export default DashboardView;
