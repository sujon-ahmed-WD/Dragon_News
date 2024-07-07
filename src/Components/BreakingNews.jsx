import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Braking News</button>
      <Marquee pauseOnClick={true} speed={300} >
        <h1 className="gap-20px">The Daily Star</h1>
        <h1>baking news Bangladesh lose of theAustralia</h1>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
