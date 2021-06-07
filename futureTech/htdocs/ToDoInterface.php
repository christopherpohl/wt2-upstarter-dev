<?php


final class ToDoInterface {

    private $connection;

    public function __construct(PDO $connection){
        $this->connection = $connection;
    }

    public function selectToDos(){
        $sql = "SELECT * FROM ToDo;";
        return $this->connection->query($sql);
    }

    public function deleteToDo($id){

        $sql = "DELETE FROM ToDo WHERE id = ? RETURNING *;";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute([$id]);
        return $stmt;
    }

    public function insertToDo($todo){
        $sql = "INSERT INTO ToDo(descr) VALUES(?) RETURNING *;";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute([$todo["descr"]]);
        return $stmt;
    }

}