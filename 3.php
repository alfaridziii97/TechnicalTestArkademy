<?php

    $json = '[
                {
                name: "Movies", info: "category_name",
                data: [
                    { name: "Interstellar", info: "category_data" },
                    { name: "Dark Knight", info: "category_data" },
                ]
                },
                {
                name: "Music", info: "category_name",
                data: [
                    { name: "Adams", info: "category_data" },
                    { name: "Nirvana", info: "category_data" },
                ]
                }
            ]';

    //konversi dari JSON ke Array
    $data = json_decode($json, true);
    var_dump($data);

    //hasilnya
    // Array ( [0] => Array ( [nama] => Daniel [divisi] => Web Designer ) [1] => Array ( [nama] => Akbar [divisi] => Database Administrator ) [2] => Array ( [nama] => Rudi [divisi] => Web Programmer ) [3] => Array ( [nama] => Markus [divisi] => Web Programmer ) [4] => Array ( [nama] => Ishak [divisi] => Network Engineer ))

?>