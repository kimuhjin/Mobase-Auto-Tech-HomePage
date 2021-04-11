import "./Recruit.css";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

function Recruit() {
  const [content, setContent] = useState(1);
  const recruitList = [
    {
      id: 1,
      title: "2021년 신입사원 채용 (설비관리, 회계부문)",
      startDate: "2021.05.21",
      endDate: "2021.05.29",
      link: "https://www.naver.com",
    },
    {
      id: 2,
      title: "2021년 경력사원 채용 (설비관리, 회계부문)",
      startDate: "2021.05.29",
      endDate: "2021.06.29",
      link: "https://www.daum.net",
    },
  ];
  return (
    <div className="recruit-container">
      <div className="recruit-sub-header">
        <div
          className={`recruit-sub-header-menu ${
            content === 1 ? "clicked" : ""
          }`}
          onClick={() => setContent(1)}
        >
          지원하기
        </div>
        <div
          className={`recruit-sub-header-menu ${
            content === 2 ? "clicked" : ""
          }`}
          onClick={() => setContent(2)}
        >
          인재상
        </div>
        <div
          className={`recruit-sub-header-menu ${
            content === 3 ? "clicked" : ""
          }`}
          onClick={() => setContent(3)}
        >
          인재육성
        </div>
      </div>
      <div className="recruit-contents">
        {content === 1 && (
          <>
            <div className="recruit-infomation-container">
              <div className="recruit-infomation-main-title">
                모베이스 오토테크와 21세기 자동차 전자부품 산업의 미래를 함께
                열어갈
                <br />
                <div className="color-blue">
                  젊고 유능한 인재들의 도전을 환영합니다.
                </div>
              </div>

              <div className="recruit-infomation-title-line" />
              <div className="recruit-infomation-title">채용공고</div>
              <div className="recruit-infomation-table">
                <div className="recruit-infomation-table-top">
                  <div className="recruit-infomation-table-top-title recruit-infomation-table-top-1">
                    제목
                  </div>
                  <div className="recruit-infomation-table-top-title recruit-infomation-table-top-2">
                    접수기간
                  </div>
                  <div className="recruit-infomation-table-top-title recruit-infomation-table-top-3">
                    마감일
                  </div>
                </div>
                {recruitList.map((data) => {
                  return (
                    <div className="recruit-infomation-table-body">
                      <a
                        className="recruit-infomation-table-body-title recruit-infomation-table-top-1"
                        href={data.link}
                        target="_blank"
                      >
                        {data.title}
                      </a>
                      <div className="recruit-infomation-table-body-title recruit-infomation-table-top-2">
                        {data.startDate}
                      </div>
                      <div className="recruit-infomation-table-body-title recruit-infomation-table-top-3">
                        {data.endDate}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="recruit-infomation">
                <a
                  href="mailto:recruit@mobase-autotech.com?subject=상반기 모베이스 오토테크 신입사원 지원&body=상반기 모베이스 오토테크 신입사원 지원 서류입니다."
                  className="recruit-email-btn"
                >
                  이메일 지원하기
                </a>
              </div>
              <div className="recruit-infomation-flex">
                <div>
                  <div className="recruit-infomation-title-line" />
                  <div className="recruit-infomation-title">채용시기</div>
                </div>
                <div className="recruit-infomation-flex-article">
                  <b>· 정기 채용</b> : 그룹 공채 (매년초)
                  <br />
                  <b>· 수시 채용</b> : 필요시 채용 실시 (별도 공지)
                </div>
              </div>
              <div className="recruit-devide-line" />
              <div className="recruit-infomation-flex">
                <div>
                  <div className="recruit-infomation-title-line" />
                  <div className="recruit-infomation-title">채용절차</div>
                </div>
                <div className="recruit-infomation-flex-article">
                  모든 채용의 전형절차는 다음과 같습니다.
                </div>
              </div>
              <div className="recruit-infomation-process-container">
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-1">
                  채용공고
                </div>
                <AiOutlineRight className="recruit-infomation-process-icon" />
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-2">
                  입사지원
                </div>
                <AiOutlineRight className="recruit-infomation-process-icon" />
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-3">
                  서류전형
                </div>
                <AiOutlineRight className="recruit-infomation-process-icon" />
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-4">
                  인/적성
                  <br />
                  검사
                </div>
                <AiOutlineRight className="recruit-infomation-process-icon" />
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-5">
                  면접/건강
                  <br />
                  검사
                </div>
                <AiOutlineRight className="recruit-infomation-process-icon" />
                <div className="recruit-infomation-process-cicle recruit-infomation-process-cicle-color-6">
                  입사 및 OJT
                </div>
              </div>
              <div className="recruit-devide-line" />
              <div className="recruit-infomation-flex">
                <div>
                  <div className="recruit-infomation-title-line" />
                  <div className="recruit-infomation-title">공통사항</div>
                </div>
                <div className="recruit-infomation-flex-article">
                  · 4년제 정규대학 기졸업자 및 졸업 예정자
                  <br />
                  · 미국, 일본, 중국, 유럽, 호주 등 지역에서 3년 이상 거주자
                  우대
                  <br />
                  · 영어, 일어, 중국어, 비즈니스 회화 가능자 우대
                  <br />· 해외여행 및 파견에 결격사유가 없는 자
                </div>
              </div>
              <div className="recruit-devide-line" />
              <div className="recruit-infomation-flex">
                <div>
                  <div className="recruit-infomation-title-line" />
                  <div className="recruit-infomation-title">제출서류</div>
                </div>
                <div className="recruit-infomation-flex-article">
                  · 이력서
                  <br />
                  · 자기소개서
                  <br />
                  · 경력기술서 (경력자에 한함)
                  <br />
                  · 졸업(예정) 증명서 1부
                  <br />
                  · 최종학교 성적증명서 1부
                  <br />
                  · 외국어 검증시험 성적표 (TOEIC, JPT, HSK 등) 사본 1부
                  (해당자에 한함)
                  <br />
                  · 자격증 사본 1부 (해당자에 한함)
                  <br />
                  &nbsp;&nbsp;- 1차 실무 면접 진행시 제출
                </div>
              </div>

              <div className="recruit-infomation-flex">
                <div>
                  <div className="recruit-infomation-title-line" />
                  <div className="recruit-infomation-title">기타사항</div>
                </div>
                <div className="recruit-infomation-flex-article">
                  문의처 : 인사노무팀 ☎ 031-5174-3055, 3058
                </div>
              </div>
            </div>
          </>
        )}
        {content === 2 && <div className="recruit-image-1" />}
        {content === 3 && <div className="recruit-image-2" />}
      </div>
    </div>
  );
}

export default Recruit;
