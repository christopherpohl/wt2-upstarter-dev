<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\Factory\AppFactory;
use DI\Container;

require 'UserInterface.php';

require 'vendor/autoload.php';

$container = new Container();

$container->set('db', function() {
    $settings = [
        "host" => "FutureTechDB",
        "port" => "3306",
        "dbname" => "FutureTech",
        "user" => "ft_user",
        "pass" => "Bochum#2020",
    ];
    $dsn = 'mysql:host=' . $settings['host'] . ';port=' . $settings['port'] . ';dbname=' . $settings['dbname'];
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];
    return new PDO($dsn, $settings['user'], $settings['pass'], $options);
});

AppFactory::setContainer($container);

$app = AppFactory::create();

//Verbindung von React zu Backend erlauben
$app->options('/{routes:.+}',function($request, $response, $args) {
    return $response;
});

$app->add(function($request, $handler) {
    $response = $handler->handle($request);
    return $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000')->withHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Origin,Authorization')->withHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
});

// Routen
$app->get('/{name}', function (Request $request, Response $response,array $args){

    $name = $args['name'];
    $response->getBody()->write("Hello, $name");
    return $response;
});

$app->get('/api/user', function (Request $request, Response $response, array $args){
    $userFace = new UserInterface($this->get('db'));
    $values = $userFace->selectUsers()->fetchAll(PDO::FETCH_ASSOC);
    $response->getBody()->write(json_encode($values));
    return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
});

$app->get('/api/user/{user_id}', function (Request $request, Response $response, array $args){
    $user_id = $args["user_id"];
    if(is_numeric($user_id)){
        $userFace = new UserInterface($this->get('db'));
        $value = $userFace->selectUserByID($user_id)->fetchAll(PDO::FETCH_ASSOC);
        $response->getBody()->write(json_encode($value));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }
	return $response->withStatus(400);
});
public function addUser($array){
    $sql = "INSERT INTO Abo (id) SELECT MAX(id) +1 FROM Abo;INSERT INTO Profil (id) SELECT MAX(id) +1 FROM Profil;INSERT INTO User (benutzername, passwort, email, idProfil, idAbo) VALUES ((?),(?),(?),(SELECT MAX(id) FROM Profil),(SELECT MAX(id) FROM Abo));";
    $stmt = $this->connection->prepare($sql);
    $stmt->execute([$array["benutzername"],$array["passwort"],$array["passwort"]]);
    return $stmt;

}

$app->post('/api/addUser/', function (Request $request, Response $response, array $args){
    $rawData = $request->getBody();
    $userFace = new UserInterface($this->get('db'));
    $value = $todoCreator->addUser($args)->fetchAll(PDO::FETCH_ASSOC);
    $response->getBody()->write(json_encode($value));
    return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
});


$app->run();