function ExperienceContainer ( props ) {
  return (
    <div className="group flex flex-col justify-start max-w-[480px] h-auto m-5 p-3 md:p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md cursor-not-allowed">
      {props.children}
    </div>
  );
};

export default ExperienceContainer;