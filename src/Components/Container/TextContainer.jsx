const TextContainer = ( props ) => {
  return (
    <div className={`${props.background} border-box flex flex-col flex-wrap justify-evenly items-center text-center gap-2 md:gap-4 ${props.width} ${props.animation} h-auto p-3 md:p-5 rounded-lg cursor-not-allowed`}>
      {props.children}
    </div>
  );
};

export default TextContainer;