function Post({component, isSelected, bgSelect}){
  return ( 
    <button
    className={`rounded-xl px-4 md:px-6 lg:px-8 xl:mx-2 py-2 ${
      bgSelect ? "bg-slate-800 text-white" : "text-white"
    }`}
    onClick={() => isSelected(component)}
  >
    {component}
  </button>
  
            
   );
}
 
export default Post;