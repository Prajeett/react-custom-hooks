const reducer = (count, action) => {

if(action.type === "INC") {
  return (count = count +1);

}
if(action.type === "DEC" && count >0 ) {
  return (count = count - 1);
}

return count;






};



export default reducer;