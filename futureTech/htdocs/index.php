<?php



header("Access-Control-Allow-Origin: *");


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

$app->add(function ($request, $handler) {
    $response = $handler->handle($request);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
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

$app->get('/api/username/{username}', function (Request $request, Response $response, array $args){
    $username = $args["username"];
 
    $userFace = new UserInterface($this->get('db'));
    $value = $userFace->selectUserByUsername($username)->fetchAll(PDO::FETCH_ASSOC);
    $response->getBody()->write(json_encode($value));
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



$app->post('/api/addUser', function (Request $request, Response $response, array $args){
    $rawData = $request->getBody();
    $userFace = new UserInterface($this->get('db'));
    $value = $userFace->addUser(json_decode($rawData, true))->fetchAll(PDO::FETCH_ASSOC);
    $response->getBody()->write(json_encode($value));
	return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
});

$app->post('/api/addAbo', function (Request $request, Response $response, array $args){
    $rawData = $request->getBody();
    $userFace = new UserInterface($this->get('db'));
    $value = $userFace->addAbo(json_decode($rawData, true))->fetchAll(PDO::FETCH_ASSOC);
    $response->getBody()->write(json_encode($value));
	return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
});

$app->post('/api/changePW', function (Request $request, Response $response, array $args){
    $rawData = $request->getBody();
    $userFace = new UserInterface($this->get('db'));
    $value = $userFace->updatePW(json_decode($rawData, true))->fetchAll(PDO::FETCH_ASSOC);
    $response->getBody()->write(json_encode($value));
	return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
});

$app->post('/api/changeEM', function (Request $request, Response $response, array $args){
    $rawData = $request->getBody();
    $userFace = new UserInterface($this->get('db'));
    $value = $userFace->updateEM(json_decode($rawData, true))->fetchAll(PDO::FETCH_ASSOC);
    $response->getBody()->write(json_encode($value));
	return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
});

$app->delete('/api/deleteAbos/{idAbo}', function (Request $request, Response $response, array $args){
    $todo_id = $args["idAbo"];
    if(is_numeric($todo_id)){
        $todoCreator = new ToDoInterface($this->get('db'));
        $todo = $todoCreator->deleteAbos($todo_id)->fetchAll(PDO::FETCH_ASSOC);
        $response->getBody()->write(json_encode($todo));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }
	return $response->withStatus(400);
});

$app->get('/api/abos/{id}', function (Request $request, Response $response, array $args){
    $id = $args["id"];
 
    $userFace = new UserInterface($this->get('db'));
    $value = $userFace->getAbos($id)->fetchAll(PDO::FETCH_ASSOC);
    $response->getBody()->write(json_encode($value));
    return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
});











$app->run();