import { useEffect, useState } from "react";

export const REQUEST_STATUS = {
  SUCCESS: "success",
  LOADING: "loading",
  FAILURE: "failure",
};

function useRequestDelay(delayTime = 1000, initialData = []) {
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    (async () => {
      try {
        await delay(delayTime);
        // throw "Had error";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    })();
  }, []);

  function updatedRecord(recordUpdated, doneCallback) {
    const newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });
    (async () => {
      try {
        await delay(delayTime);
        if (doneCallback) {
          doneCallback();
        }
        setData(newRecords);
      } catch (error) {
        console.log("there was an error", error);
      }
    })();
  }

  return { data, updatedRecord, requestStatus, error };
}

export default useRequestDelay;
