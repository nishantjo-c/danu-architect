import mainpagecss from "./mainpage.module.scss";

function Main() {
  return (
    <div className={mainpagecss.mainpage}>
      <div className={mainpagecss.clearfix}>
        <div className={mainpagecss.navigation}></div>
      </div>
     
      <div className={mainpagecss.main}>
        <h1 className={mainpagecss.main__title}>Danu & Architect</h1>
        <h3 className={mainpagecss.main__quote}>We don’t just make your house, we make your dream come true</h3>
      </div>
  </div>
  );
}

export default Main;
