'use client';

import { useCallback } from "react";
import { apiClient } from "./_common/lib/aspida";
import useAspidaSWR from "@aspida/swr";

export default function Home() {
  // 何か適当なread系処理
  const { data } = useAspidaSWR(apiClient.pet.findByStatus, "$get", {
    query: {
      status: ["available"]
    }
    // headersのauthorization bearerに渡したい場合は、別途ラップして使い回す
  })

  // 何か適当なwrite系処理
  const handleAddPet = useCallback(async () => {
    await apiClient.pet.$post({
      body: {
        name: "hoge",
        photoUrls: ["https://example.com"]
      }
    })
  }, []);

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
