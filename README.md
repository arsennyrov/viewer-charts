Задание. 
Создать одностраничное веб-приложение для отображения списка диаграмм с использованием React и typescript.
Библиотеки, которые следует использовать:
- MUI/React Bootstrap/или другие;
- Вертикальные диаграммы;
- Любая другая библиотека на ваш выбор.

Подробности.
Пользовательский интерфейс должен быть отзывчивым.
Будет заголовок с двумя ссылками на два отдельных маршрута. Один из них должен быть активным связаны с текущим маршрутом.
«Режим просмотра» — это первый маршрут. Там будет список графиков и фильтр диапазона дат (фильтрация по датам). Выбранные даты должны повлиять на графики на странице. Фильтр диапазона дат должен быть скрыт, если мы не имеют графиков.
Данные для диаграмм могут быть сгенерированы случайным образом или получены через любой общедоступный API за один раз или для всех графиков. Каждое значение должно иметь поля «значение» и «дата». Значение по умолчанию для даты - 
диапазонный фильтр, который вы можете установить самостоятельно.
«Настройки» — второй маршрут. Там будет список графиков. Пользователи должны иметь возможность добавить новую диаграмму или изменить существующую. 
Эти настройки должны быть реализованы с модальным окном. Должна быть возможность изменить имя, тип (линия, сплайн, площадь...) и цвет для каждого из них. Также у нас должна быть возможность удалить диаграмму. После сохранения новые настройки оставаться.