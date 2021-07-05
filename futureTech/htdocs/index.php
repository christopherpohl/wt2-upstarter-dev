<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\Factory\AppFactory;
use DI\Container;


use League\OAuth2\Server\AuthorizationServer;
use League\OAuth2\Server\Exception\OAuthServerException;
use League\OAuth2\Server\Grant\PasswordGrant;

use FutureTech\Repositories\ClientRepository;
use FutureTech\Repositories\AccessTokenRepository;
use FutureTech\Repositories\ScopeRepository;
use FutureTech\Repositories\RefreshTokenRepository;
use FutureTech\Repositories\UserRepository;

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

$app->options('/{routes:.+}', function ($request, $response, $args) {
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

//OAUTH2

$container = new Container();

$container->set('oauth2server', function(){
    $settings = [
        "clientRepository" => new ClientRepository(),
        "accessTokenRepository" => new AccessTokenRepository(),
        "scopeRepository" => new ScopeRepository(),
        "pathToPrivateKey" => 'file://keys/private.key',
        "encryptionKey" => ':`J:)?/7FFTMv"4X]l0~ECxr"\v}XoX\7p+REOg}'
    ];

    $server = new AuthorizationServer(
        $settings['clientRepository'],
        $settings['accessTokenRepository'],
        $settings['scopeRepository'],
        $settings['pathToPrivateKey'],
        $settings['encryptionKey']
    );

    $grant = new PasswordGrant(
        new UserRepository(),
        new RefreshTokenRepository()
    );
    $grant->setRefreshTokenTTL(new \DateInterval('P1M')); // refresh tokens will expire after 1 month

    $server->enableGrantType(
        $grant,
        new \DateInterval('PT1H') // access tokens will expire after 1 hour
    );

    return $server;
});

AppFactory::setContainer($container);

$app = AppFactory::create();

//Verbindung von React zu Backend erlauben

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($request, $handler) {
    $response = $handler->handle($request);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});


$app->post('/api/auth', function (Request $request, Response $response, array $args){
    $server = $this->get('oauth2server');
    try {
        return $server->respondToAccessTokenRequest($request, $response);
    } catch(OauthServerException $exception){
        return $exception->generateHttpResponse($response);
    } catch(\Exception $exception){
        $body = $response->getBody();
        $body->write($exception->getMessage());

        return $response->withStatus(500)->withBody($body);
    } 
});
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


$app->run();