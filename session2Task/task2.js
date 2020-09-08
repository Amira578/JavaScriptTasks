function convert(minutes) {
    return minutes*60;	
}
function footballPoints(wins, draws, losses) {
     return wins*3+draws*1+losses*0;
}
function isSameNum(num1, num2) {
   if (num1===num2){
       return true;
   }
   else {
       return false;
   }
}
function getVoteCount(votes) {
   return votes.upvotes-votes.downvotes;
}
