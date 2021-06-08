<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\Factory\AppFactory;
use DI\Container;

require 'ToDoInterface.php';

require 'vendor/autoload.php';

$container = new Container();

$container->set('db', function() {
    $settings = [
        "host" => "mariadb",
        "port" => "3306",
        "dbname" => "FutureTech",
        "user" => "ft_user",
        "pass" => "1234",
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




$app->get('/api/todos', function (Request $request, Response $response, array $args){
    $todoCreator = new ToDoInterface($this->get('db'));
    $todos = $todoCreator->selectTodos()->fetchAll(PDO::FETCH_ASSOC);
	$response->getBody()->write(json_encode($todos));
    /*  
    foreach($todos as $x => $x_value){
        $response->getBody()->write($x_value['descr'] . " ");
    }
    */
    return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
});

$app->delete('/api/todos/{todo_id}', function (Request $request, Response $response, array $args){
    $todo_id = $args["todo_id"];
    if(is_numeric($todo_id)){
        $todoCreator = new ToDoInterface($this->get('db'));
        $todo = $todoCreator->deleteTodo($todo_id)->fetchAll(PDO::FETCH_ASSOC);
        $response->getBody()->write(json_encode($todo));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }
	return $response->withStatus(400);
});

$app->post('/api/todos', function (Request $request, Response $response, array $args){
    $rawData = $request->getBody();
    $todoCreator = new ToDoInterface($this->get('db'));
    $todo = $todoCreator->insertTodo(json_decode($rawData, true))->fetchAll(PDO::FETCH_ASSOC);
    $response->getBody()->write(json_encode($todo));
	return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
});

$app->run();