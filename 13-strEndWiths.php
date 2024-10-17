<?php
function solution($str, $ending) {
//   TODO: complete
  $a = -strlen($ending);
  $res = substr($str,$a,strlen($ending));
  return $res == $ending;
}

// cheat solution
function solutionCheat(string $str, string $ending): bool {
    return str_ends_with($str, $ending);
  }