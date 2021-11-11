import { getByDisplayValue } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';
import './Notice.css';

function Notice() {

  const [title, settitle] = useState(['배드민턴... 너무 어려워요...', '이 배드민채 어떤가요?', '체육관 너무 좋네요^^']);
  const [date, setdate] = useState(['1분전', '11분전', '12분전']);
  const [hits, sethits] = useState(['1', '2', '3']);
  const [like, setlike] = useState(['4', '5', '6']);

  return(
      <>
        <div>
          <div className="notice_name">
            공지사항
          </div>

          <div>
            <div className="notice_line"></div>
            <div className="notice_lists">
              <div className="notice_lists_title">
                제목
              </div>
              <div className="notice_lists_date">
                작성일
              </div>
              <div className="notice_lists_hits">
                조회수
              </div>
              <div className="notice_lists_like">
                추천수
              </div>
            </div>
            <div className="notice_line"></div>
          </div>

          <div>
            {title.map(function(a, i) {
              return (
                <>
                  <div className="notice_content">
                    <div className="notice_content_title">
                      {title[i]}
                    </div>
                    <div className="notice_content_date">
                      {date[i]}
                    </div>
                    <div className="notice_content_hits">
                      {hits[i]}
                    </div>
                    <div className="notice_content_like">
                      {like[i]}
                    </div>
                  </div>
                  <div className="notice_content_line"></div>
                </>
              );
            })}
          </div>

          <div className="pagination">
            1 2 3 4
          </div>
        </div>
      </>
  )
}

export default Notice;