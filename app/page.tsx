'use client';

import { apiClient } from "./_common/lib/aspida";
import useAspidaSWR from "@aspida/swr";

export default function Home() {
  const { data } = useAspidaSWR(apiClient.pet.findByStatus, "$get", {
    query: {
      status: ["available"]
    }
  })
  return (
    data?.map((item, index) => {
      return (
        <div key={item.name+index}>
          <div>{item.name}</div>
          <div>{item.status}</div>
        </div>
      )
    })
  );
}
