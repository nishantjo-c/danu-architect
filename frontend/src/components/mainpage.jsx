import mainpagecss from "./mainpage.module.scss";

function Main() {
  return (
    <div className={mainpagecss.mainpage}>
      <div className={`${mainpagecss.clearfix} ${mainpagecss.navigation}`}>
        <input type="checkbox" className={mainpagecss.navigation__checkbox} id="navi-toggle" />
        <label className={mainpagecss.navigation__btn} for="navi-toggle">
          <span className={mainpagecss.navigation__btn__value}></span>
        </label>
      </div>
     
      <div className={mainpagecss.main}>
        <h1 className={mainpagecss.main__title}>Danu & <br/> Architect</h1>
        <h3 className={mainpagecss.main__quote}>We don’t just make your house, <br/> we make your dream come true</h3>
      </div>
  </div>
  );
}

export default Main;
