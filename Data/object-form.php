<?php 

class objectForm {

    // Construtor da classe com todos os parâmetros necessários
    public function __construct(private $name,private $email,private $message,private $phone = null) {
        $this->name = $name;
        $this->email = $email;
        $this->message = $message;
        $this->phone = $phone;
    }

    public function setName($name){
        $this->name = $name;
    }

    public function getName(){
        return $this->name;
    }

    public function setEmail($email){
        $this->email = $email;
    }

    public function getEmail(){
        return $this->email;
    }

    public function setMessage($message){
        $this->message = $message;
    }

    public function getMessage(){
        return $this->message;
    }

    public function setPhone($phone){
        $this->phone = $phone;
    }

    public function getPhone(){
        return $this->phone;
    }

}

$mensagem = new objectForm('Jean', 'jeangariel0990@gmail.com', 'Testando');

echo '<pre>';
print_r($mensagem);
echo '</pre>';

?>