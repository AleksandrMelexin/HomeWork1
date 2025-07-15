export enum Priority {
  low = "низкий",
  medium = "средний",
  high = "высокий",
}

export enum Status {
  todo = "необходимо сделать",
  inProgress = "в процессе",
  done = "выполнена",
}

export enum Category {
  bug = "баг",
  feature = "фича",
  documentation = "документация",
  refactor = "рефакторинг",
  test = "тест",
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  category: Category;
  status: Status;
  priority: Priority;
}
