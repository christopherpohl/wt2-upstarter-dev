<?php


final class UserInterface {

    private $connection;

    public function __construct(PDO $connection){
        $this->connection = $connection;
    }

    public function selectUsers(){
        $sql = "SELECT * FROM User;";
        return $this->connection->query($sql);
    }
 
    public function selectUserByID($id){
        $sql = "SELECT * FROM User WHERE id = ?;";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute([$id]);
        return $stmt;
    }


    public function selectUserByUsername($username){
        $sql = "SELECT * FROM User WHERE benutzername = ?;";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute([$username]);
        return $stmt;
    }

    public function addUser($array){
        $sql = "INSERT INTO Abo_Profil VALUES (4);";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute();
        return $stmt;

    }



}