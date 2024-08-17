const Heading = ({ title, color, balise }) => {

    return (
    <div className="">
      <h1 className={`text-[${color}]`}>{title}</h1>
    </div>
  );
};

export default Heading;
