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
        $sql = "SELECT * FROM User WHERE benutzername = (?);";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute([$username]);
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



    public function addUser($todo){
        $sql = "INSERT INTO User (benutzername, passwort, email) VALUES ((?),(?),(?));";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute([$todo["benutzername"],$todo["passwort"],$todo["email"]]);
        return $stmt;
    }

    
    public function addAbo($values){
        $sql = "INSERT INTO Abo_Profil (idAbo, idProfil) VALUES (?,?);";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute([$values["idAbo"],$values["idProfil"]]);
        return $stmt;
    }

    public function updatePW($values){
        $sql = "UPDATE User SET passwort = (?) WHERE id = ?;";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute([$values["passwort"],$values["userid"]]);
        return $stmt;
    }
    public function updateEM($values){
        $sql = "UPDATE User SET email = (?) WHERE id = ?;";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute([$values["email"],$values["userid"]]);
        return $stmt;
    }

    public function deleteAbos($idAbo){
        $sql = "DELETE FROM Abo_Profil WHERE idAbo = ?;";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute([$values["idAbo"]]);
        return $stmt;
    }
    
}