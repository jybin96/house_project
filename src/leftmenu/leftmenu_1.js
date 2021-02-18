import './leftmenu_main.css';
function Leftmenu_1() {
  return (
    <div className="keyword_main">
      <div className="keyword_div">
        <a href="#"></a>
        <input placeholder="지역명또는 도로명주소로 검색"/>
        <button></button>
      </div>
      <div className="realtime_visitor">
      <ul>
        <li>
          <div className="realtime_visitor_div">
            <div className="realtime_visitor_div_num">
              1
            </div>
            <div className="realtime_visitor_div_name">
              경상남도 창원시 의창구 사림동
            </div>
            <div className="realtime_visitor_div_visitornum">
              512명
            </div>
          </div>
        </li>
        <li>
        <div className="realtime_visitor_div">
            <div className="realtime_visitor_div_num">
              2
            </div>
            <div className="realtime_visitor_div_name">
            경상남도 창원시 의창구 대방동
            </div>
            <div className="realtime_visitor_div_visitornum">
            312명
            </div>
          </div>
        </li>
        <li>
        <div className="realtime_visitor_div">
            <div className="realtime_visitor_div_num">
              3
            </div>
            <div className="realtime_visitor_div_name">
            경상남도 창원시 의창구 성주동
            </div>
            <div className="realtime_visitor_div_visitornum">
            162명
            </div>
          </div>
        </li>
        <li>
        <div className="realtime_visitor_div">
            <div className="realtime_visitor_div_num">
              4
            </div>
            <div className="realtime_visitor_div_name">
            경상남도 창원시 의창구 봉림동
            </div>
            <div className="realtime_visitor_div_visitornum">
            52명
            </div>
          </div>
        </li>
      </ul>
      <button className="realtime_visitor_button">

      </button>
      </div>
    </div>
  );
}

export default Leftmenu_1;