/* src/App.js */
import React, { useEffect, useState } from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: "homepage"
    }
  }

  render() {
    const onSubmit = (event) => {
      event.preventDefault();
    };

    const navigateToAboutUsPage = () => {
      window.scroll({top: 0, left: 0, behavior: 'smooth' });

      this.setState({
        currentPage: "aboutus"
      });
    }

    const navigateToHomepage = () => {
      window.scroll({top: 0, left: 0, behavior: 'smooth' });

      this.setState({
        currentPage: "homepage"
      });
    }

    const navigateToMenuPage = () => {
      window.scroll({top: 0, left: 0, behavior: 'smooth' });

      this.setState({
        currentPage: "menu"
      });
    }

    const navigateToDeliveryInfoPage = () => {
      window.scroll({top: 0, left: 0, behavior: 'smooth' });

      this.setState({
        currentPage: "deliveryinfo"
      });
    }

    const navigateToContactUsPage = async () => {
      window.scroll({top: 0, left: 0, behavior: 'smooth' });

      this.setState({
        currentPage: "contactus"
      });
    }

    const renderContactUsPostSubmitBody = () => {
      this.setState({
        currentPage: "contactuspostsubmit"
      });
    }

    let styles = {};

    const homepageStyles = {
      navbar: { color: "white" }
    };

    const otherStyles = {
      navbar: { color: "black" }
    }

    if(this.state.currentPage === "homepage") {
      styles = homepageStyles;
    } else {
      styles = otherStyles;
    }

    const navbar = (
      <div className="navbar" style={styles.navbar}>
        <img className="navbar-logo" src="images/dmlogo.png" onClick={navigateToHomepage}/>
        <div className="navbar-item" onClick={navigateToAboutUsPage}>
          關於東門
        </div>
        <div className="navbar-item" onClick={navigateToMenuPage}>
          美食介紹
        </div>
        <div className="navbar-item" onClick={navigateToDeliveryInfoPage}>
          外送資訊
        </div>
      </div>
    );

    const footer = (
      <>
        <hr className="footer-divider"/>
        <div className="footer">
          <div className="footer-item" style={{justifySelf: "start"}}>
            <div>
              聯絡資訊
            </div>
            <div>
              (02) 2341-1685
            </div>
            <div>
              dumpling.tw@gmail.com
            </div>
          </div>
          <div className="footer-item">
            <div>
              營業時間
            </div>
            <div>
              一 - 五：11:00--14:30 17:00--21:00
            </div>
            <div>
              六 - 日：11:00--15:00 17:00--21:30
            </div>
          </div>
          <div className="footer-item" style={{justifySelf: "end"}}>
            <span>
              <a href="https://www.facebook.com/%E6%9D%B1%E9%96%80%E9%A4%83%E5%AD%90%E9%A4%A8-192439990781160">
                <img className="footer-icon" src="images/facebookicon.png"/>
              </a>
            </span>
            <span>
              <a href="google.com">
                <img className="footer-icon" src="images/instagramicon.png"/>
              </a>
            </span>
            <div>
              東門餃子館 © All rights reserved.
            </div>
          </div>
        </div>
      </>
    );

    let body = undefined;

    const homepageBody = (
      <div className="homepage-body">
        <img className="homepage-title-image" src="images/newhomepage.png"/>
        <div className="homepage-row">
          <div className="homepage-about-us">
            <div className="homepage-section-title">
              關於東門
            </div>
            <div className="homepage-section-text">
              民國50年的某的傍晚，在台北信義路跟金山南路街口，一對父子正緩緩推著一臺破舊的木製攤車，一路嘰嘎的車輪聲引來了路人的注意，生澀的年輕人不好意思把頭壓的更低了！今日是他們開張的第一天，也是東門餃子館的誕生日，算算看至今已有60餘個寒暑！
            </div>
            <div className="homepage-button" onClick={navigateToAboutUsPage}>
              了解更多
            </div>
          </div>
          <img className="homepage-about-us-image" src="images/picture2.jpg"/>
        </div>
        <div className="homepage-row">
          <img className="homepage-food-image" src="images/foodpicture.png" />
          <div className="homepage-food">
            <div className="homepage-section-title">
              美食介紹
            </div>
            <div className="homepage-section-text">
              東門餃子館經歷了長久的經營，秉持著專心的追求最美味道地菜色的信念，讓每一道菜都讓消費者感到一種用心的感受，歡迎您，挑選我們為您準備的精緻菜單。
            </div>
            <div className="homepage-button" onClick={navigateToMenuPage}>
              了解更多
            </div>
          </div>
        </div>
        <div className="homepage-row">
          <div className="homepage-news">
            <div className="homepage-section-title">
              最新消息
            </div>
            <div className="homepage-section-text ">
              因疫情變化來客量波動，本店五月份每週一公休，六月份將視疫情狀況調整或恢復。
              共體時艱，請多包涵
            </div>
          </div>
        </div>
      </div>
    );

    const aboutUsBody = (
      <div className="aboutus-body">
        <img className="aboutus-banner-image" src="images/aboutusbanner.jpg"/>
        <div className="aboutus-paragraph">
          <div className="aboutus-title">
            關於東門
          </div>
          <div className="aboutus-full-line">
            民國50年的某的傍晚，在台北信義路跟金山南路街口，一對父子正緩緩推著一臺破舊的木製攤車，一路嘰嘎的車輪聲引來了路人的注意，生澀的年輕人不好意思把頭壓的更低了！今日是他們開張的第一天，也是東門餃子館的誕生日，算算看至今已有50餘個寒暑！
          </div>
          <div>
            日子一天天過去，店裡面用的麵粉從一天不到半包慢慢變成兩包，三包，老老闆也退休了，換上剛過門的媳婦，小老闆帶著新婚妻子忙碌的招呼往來的客人，口碑在人來人往中慢慢的傳遞開來，原來的攤車早已經不堪使用！終於在民國57年遷到餃子館現址，在老闆細心研究並參考山東老家道地的口味，水餃從1種 2種 3種，到現在有了蒸餃，鍋貼，生意是一天比一天好。
          </div>
          <img className="aboutus-paragraph-image" src="images/aboutus1.jpg"/>
          <img className="aboutus-paragraph-image" src="images/aboutus2.jpg"/>
          <div>
            還記得老人家們提起當年的小故事，有一則是形容當時的生意，ㄧ到晚上12點下班時間，小學徒趕忙跑去上門板，準備打烊，而晚到的客人邊跑邊喊“別關門！別關門！等我啊～”，兩人在門裡門外爭執的畫面，在當年外食不方便的年代，可是天天上演的。想當然爾，每次都是客人贏了，而小學徒不免要唉上老闆的一頓罵，也別怪小學徒不懂人情，一天十四.五個鐘頭不停的橄水餃皮，實在是令人吃不消啊！一晃眼，年輕的老闆也變成了滿頭華髮的老人家了。
          </div>
          <div className="aboutus-full-line">
            在他老人家65歲，準備作心臟手術前，他把小兒子叫到跟前，把掌管餃子門的鑰匙交給了他，並仔細訓示經營之道，這是第二次交接也是餃子館第三任的老闆。
          </div>
          <img className="aboutus-paragraph-image" src="images/aboutus3.jpg"/>
          <img className="aboutus-paragraph-image" src="images/aboutus4.jpg"/>
        </div>
      </div>
    );

    const menuBody = (
      <div className="menu-body">
        <img className="menu-image" src="images/page3.jpg"/>
        <div className="menu-title">
          美食介紹
        </div>
        <div className="menu-container">
          <img className="menu-image" style={{marginBottom: "80px"}} src="images/menu1.jpg"/>
          <img className="menu-image" src="images/menu2.jpg"/>
        </div>
      </div>
    );

    const deliveryInfoBody = (
      <div className="deliveryinfo-body">
        <img className="deliveryinfo-image" src="images/deliveryinfobanner.jpg"/>
        <div className="deliveryinfo-title">
          外送資訊
        </div>
        <div className="deliveryinfo-text">
          東門餃子館與熊貓外送服務合作，請下方網址訂購。
          <br/><br/>
          網址：熊貓外送 <br/>
          <a href="https://www.foodpanda.com.tw/en/restaurant/w0ll/dong-men-jiao-zi-guan">
            https://www.foodpanda.com.tw/en/restaurant/w0ll/dong-men-jiao-zi-guan
          </a>
        </div>
        <div className="deliveryinfo-title">
          宅配資訊
        </div>
        <div className="deliveryinfo-texttwo">
          本店提供以下品項宅配服務：水餃、鍋貼、蒸餃以及火鍋
          <br></br><br></br>
          如需線上訂購請至聯絡我們頁面填寫訂購品項。
          <br></br><br></br>
          ＊訂購滿＄2000，可享免運費優惠。其餘訂單請於聯絡我們頁面填寫訂購品項，我們將致電通知您運費以及宅配相關事宜。
        </div>
        <img className="deliveryinfo-priceimage" src="images/price.png"/>
      </div>
    );

    const contactUsBody = (
      <div className="contactus-body">
        <img className="contactus-image" src="images/contactusbanner.jpg"/>
        <div className="contactus-title">
          聯絡我們/線上訂位
        </div>
        <form className="contactus-form" onSubmit={onSubmit}>
          <label>
            姓名 *
            <input
              type="text"
              name="name"
              required
            />
          </label>
          <label>
            電話 *
            <input
              type="tel"
              name="phoneNumber"
              required
            />
          </label>
          <label>
            Email *
            <input
              type="email"
              name="email"
              required
            />
          </label>
          <label className="content-label">
            內容 *
            <textarea
              className="content-textarea"
              type="text"
              name="content"
              required
            />
          </label>
          <button type="submit">提交</button>
          <div className="contactus-instructions">
            定位須知<br/>
            ＊訂位請備註日期、時間以及人數。送出並非訂位成功，我們將致電與您確認訂位<br/>
            ＊兩天內的訂位請直接致電(02) 23411685<br/>
            ＊訂位只會保留10 分鐘，如需更改訂位或有任何問題請致電(02) 23411685<br/>
            ＊如有特殊需求，例如：有輪椅需要做一樓，請於內容註明 <br/>
            <br/>
            宅配需知<br/>
            ＊請準確填寫姓名電話，並於內容處填寫宅配地址以及訂購品項，我們將致電與您確認宅配<br/>
          </div>
        </form>
      </div>
    );

    const contactUsPostSubmitBody = (
      <div className="contactus-body">
        <img className="contactus-image" src="images/contactusbanner.jpg"/>
        <div className="contactus-title">
          聯絡我們/線上訂位
        </div>
        <div className="contactus-postsubmit-message">
          內容已提交，感謝您寶貴的問題與建議，我們將盡快與您聯絡，謝謝您!
        </div>
      </div>
    )

    if(this.state.currentPage === "homepage") {
      body = homepageBody;
    } else if(this.state.currentPage === "aboutus") {
      body = aboutUsBody;
    } else if(this.state.currentPage === "menu") {
      body = menuBody;
    } else if(this.state.currentPage === "deliveryinfo") {
      body = deliveryInfoBody;
    } else {
      body = homepageBody;
    }

    return (
      <>
        {navbar}
        {body}
        {footer}
      </>
    )
  }
}

export default App;