import axios from "axios";
import { Todo } from "../types/Todo";

const URL = "http://localhost:8000";
export const getDailyTodos = async (selectDate: Date, userID: number) => {
  try {
    const year = selectDate.getFullYear();
    const month = selectDate.getMonth() + 1;
    const date = selectDate.getDate();

    const result = await axios.get<Todo[]>(
      `${URL}/todos/?year=${year}&month=${month}&date=${date}&user_id=${userID}`
    );
    return result.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const postLearningPlan = async (
  userID: number,
  todo: string,
  startDate: string,
  endDate: string,
  weekDay: string[],
  learningTime: string
) => {
  try {
    axios.post(`${URL}/todos`, {
      user_id: userID,
      todo_task: todo,
      start_date: startDate,
      end_date: endDate,
      learning_weekday: weekDay,
      learning_time: learningTime,
    });
  } catch (err: any) {
    throw new Error(err);
  }
};
