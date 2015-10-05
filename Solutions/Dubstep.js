/**
 * Dubstep
 * http://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
 */

function songDecoder(song){
  return song.replace(/(?:WUB)*WUB/g,' ').replace(/^\s*(.*\S)\s*$/,'$1');
}