// カレンダー処理のリクエスト

import { axiosMock } from "../data/axiosMock";
import { StudyRecord } from "../types/Calendar";

// 選択月のカレンダーの学習記録を取得
export const getMonthlyStudyRecord = async () => {
  try {
    const result = await axiosMock.get("/calendar/month");
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

// 選択日のカレンダーの学習記録を取得
export const getToDayStudyRecords = async () => {
  try {
    const result = await axiosMock.get<StudyRecord[]>("/calendar/month");
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
