<?php

function range_bit_count(int $a, int $b): int {
  // Coding and coding ... 
  $sum= 0;
  for($i=$a;$i<=$b;$i++){
    foreach(str_split(decbin($i)) as $x){
      if($x==1) $sum+=1;
    }
  }

  return $sum;
}

echo range_bit_count(2,7);

// best practice
function range_bit_countBest(int $a, int $b): int {
  return substr_count(join(array_map('decbin',range($a,$b))),'1');
}

  ?>