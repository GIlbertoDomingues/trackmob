<?php
$data_string = json_encode($_POST);                                                                                   

$ch = curl_init('https://frontend-test-trackmob.firebaseio.com/253c0d77-7095-48a0-8114-6ea307ae743b/GIlbertoDomingues/donors.json');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))
);                                                                                                                   
 
$result = curl_exec($ch);

echo json_encode($result);

?>