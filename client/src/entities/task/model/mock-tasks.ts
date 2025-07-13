import { ITask } from "../model/task";
import { Category, Status, Priority } from "../model/task";

export const initialTasks: ITask[] = [
    {
        id: '1',
        title: "Исправить ошибку входа в систему",
        description: "",
        category: Category.bug,
        status: Status.todo,
        priority: Priority.high
    },
    {
        id: '2',
        title: "Добавить темную тему",
        description: "Реализовать переключение между светлой и темной темами",
        category: Category.feature,
        status: Status.inProgress,
        priority: Priority.medium
    },
    {
        id: '3',
        title: "Обновить документацию API",
        description: "Добавить примеры для новых эндпоинтов",
        category: Category.documentation,
        status: Status.todo,
        priority: Priority.low
    },
    {
        id: '4',
        title: "Оптимизировать загрузку изображений",
        description: "Реализовать lazy loading для галереи",
        category: Category.refactor,
        status: Status.done,
        priority: Priority.medium
    },
    {
        id: '5',
        title: "Написать тесты для модуля авторизации",
        description: "",
        category: Category.test,
        status: Status.inProgress,
        priority: Priority.high
    },
    {
        id: '6',
        title: "Исправить баг с кэшированием данных",
        description: "Данные не обновляются после выхода из системы",
        category: Category.bug,
        status: Status.todo,
        priority: Priority.high
    },
    {
        id: '7',
        title: "Добавить поддержку SVG иконок",
        description: "Заменить PNG иконки на SVG",
        category: Category.feature,
        status: Status.todo,
        priority: Priority.low
    },
    {
        id: '8',
        title: "Рефакторинг модуля уведомлений",
        description: "Упростить логику обработки push-уведомлений",
        category: Category.refactor,
        status: Status.done,
        priority: Priority.medium
    },
    {
        id: '9',
        title: "Добавить руководство для новых разработчиков",
        description: "Описать процесс настройки окружения",
        category: Category.documentation,
        status: Status.inProgress,
        priority: Priority.low
    },
    {
        id: '10',
        title: "Протестировать производительность на мобильных устройствах",
        description: "Проверить время загрузки на iOS и Android",
        category: Category.test,
        status: Status.todo,
        priority: Priority.medium
    }
];