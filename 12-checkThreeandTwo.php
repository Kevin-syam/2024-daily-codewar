<?php function checkThreeAndTwo($arr) {
  // your code here
  $counta  = count(array_keys($arr,'a'));
  $countb  = count(array_keys($arr,'b'));
  $countc  = count(array_keys($arr,'c'));
  if($counta==3||$countb==3||$countc==3){
    if($counta==2||$countb==2||$countc==2){
      return true;
      
    }else{
      return false;
    }
  } 
  else{
    
  return false;
  } 
}

// best practices
function checkThreeAndTwoBest($arr) {
    $counts = array_count_values($arr);
    return count($counts) === 2 && max($counts) === 3;
  }