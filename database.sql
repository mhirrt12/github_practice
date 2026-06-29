create DATABASE todo_app;
use todo_app;
create table todos(
    id int auto_increment primary key,
    task varchar(255) not null,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
);