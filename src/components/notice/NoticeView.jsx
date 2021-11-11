import { getByDisplayValue } from '@testing-library/dom';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './NoticeView.css';

function NoticeView() {

  const [comment, setcomment] = useState(['나도 그게 맞다고 생각한다....', '동감함다', '안녕']);
  const [time, settime] = useState(['1분전', '12분전', '14분전']);
  const commentnum = comment.length;

  return(
      <>
        <div>
          <div>
            <div className="noticeview_line"></div>
            <div className="noticeview_title">
              배드민턴... 너무 어려워요...
            </div>
            <div className="noticeview_lists">
              <div className="noticeview_lists_date">
                1분전
              </div>
              <div className="noticeview_lists_hits">
                조회수 24
              </div>
              <div className="noticeview_lists_like">
                추천수 10
              </div>
            </div>
            <div className="noticeview_line"></div>
          </div>

          <div>
            <div className="noticeview_content">
              공지사항입니다. 이제 11월이네요 추운겨울 잘 보내세요
            </div>
            <div className="noticeview_line"></div>
            <Link to="/notice">
              <button className="noticeview_back">
                목 록
              </button>
            </Link>
          </div>

          <div className="noticeview_comment">
            전체 댓글( { commentnum } )
          </div>
          <div className="noticeview_line"></div>
          <div>
            {comment.map(function(a, i) {
              return (
                <>
                <div className="noticeview_comment_list">
                  <div className="noticeview_comment_list_title">
                    {comment[i]}
                  </div>
                  <div className="noticeview_comment_list_time">
                    {time[i]}
                  </div>
                </div>
                  <div className="noticeview_comment_list_line"></div>
                </>
              );
            })}
          </div>
          <div className="noticeview_comment_sqaure">

          </div>
          <button className="noticeview_comment_write">
            댓글달기
          </button>
        </div>
      </>
  )
}

export default NoticeView;