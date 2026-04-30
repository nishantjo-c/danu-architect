import mainpagecss from "./mainpage.module.scss";
import Bot from "./bot";

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
        <h1 className={mainpagecss.main__title}>Danu n <br/> Architect</h1>
        <h3 className={mainpagecss.main__quote}>We don’t just build your idea, <br/> we make your dream come true</h3>
      </div>
      <Bot />
  </div>
  );
}

export default Main;
